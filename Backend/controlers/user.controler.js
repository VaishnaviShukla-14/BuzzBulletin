const User = require("../models/user.models");
const genrateToken = require("../helpers/generatetoken");

//signup
const addUser = async (req, res) => {
  const { name, email, phone, adharcard, address, password } = req.body;
  try {
      const newUser = new User({ name, email, phone, password, adharcard, address });
      await newUser.save();
      res.status(200).json({ mess: "User Save SuccessFully", newUser });
  } catch (error) {
      console.error(error); // Log the error to the console
      res.status(500).json({ mess: "Error To save the User", error: error.message });
  }
};


//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const loginDeatial = await User.findOne({ email });
  if (!loginDeatial) {
  return   res.status(400).json({ mess: "eamil is invalid" });
  }
  if (loginDeatial.password != password) {
  return  res.status(400).json({ mess: "password is invalid" });
  } else {
    const Token = genrateToken(loginDeatial);
  return res.status(200).json({ mess: "login successfully", Token, loginDeatial });
  }
};

//Show Users
const showUser = async (_, res) => {
  try {
    const users = await User.find(); // Change variable name to 'users'
    res.status(200).json({ mess: "Users Found Successfully", data:users });
  } catch (error) {
    res.status(400).json({ mess: "Users not found", error });
  }
};

//delete User
const deleteUser = async (req, res) => {
  const { name } = req.body;

  try {
    if (!name) {
      console.error("Invalid user name provided");
      return res.status(400).json({ mess: "Invalid user name provided" });
    }

    console.log(`Attempting to delete user with name: ${name}`);

    const deletedUser = await User.findOneAndDelete({ name });

    if (deletedUser) {
      // Assuming you have a productImagePath property in your User model
      // const imageToDelete = deletedUser.productImagePath;

      console.log(`User with name ${name} deleted successfully`);
      return res.status(200).json({ mess: "User deleted" });
    } else {
      console.log(`User with name ${name} not found`);
      return res.status(404).json({ mess: "User not found" });
    }
  } catch (error) {
    console.error(`Error deleting user with name ${name}:`, error.message);
    return res.status(500).json({ mess: "Internal server error", error: error.message });
  }
};

// Update the user 
const updateUser = async (req, res) => {
  const { id, name, phone, email, password } = req.body;

  try {
    console.log(`Attempting to update user with id: ${id}`);

    const updatedUser = await User.findOneAndUpdate(
      { _id: id }, // Use _id to find the user by ID
      {
        $set: {
          name,
          phone,
          email,
          password,
          // Add other fields as needed
        },
      },
      { new: true }
    );

    if (updatedUser) {
      console.log(`User with id ${id} updated successfully`);
      res.status(200).json({ mess: "Updated successfully", updatedUser });
    } else {
      console.log(`User with id ${id} not found`);
      res.status(404).json({ mess: "User not found" });
    }
  } catch (error) {
    console.error(`Error updating user with id ${id}:`, error.message);
    res.status(500).json({ mess: "Server Error", error: error.message });
  }
};

//Search The User
const searchUser = async (req,res) => {
    const alphabet = req.params.alphabet;  //get the alphabet parameter from the request
    try{
      //Use a regular expression to find documents starting with the specified alphabet
      const results = await User.find({ name: {$regex: '^'+ alphabet, $options:'i'}});
      console.log(results);
      res.json(results);
    }
    catch(err){
      console.error(err);
      res.status(500).json({message:'Server Error'});
    }
};


module.exports = { addUser, loginUser, showUser,deleteUser,updateUser,searchUser };