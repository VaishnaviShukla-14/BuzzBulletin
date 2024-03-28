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



const showUser = async (_, res) => {
  try {
    const users = await User.find({ isDeleted: { $ne: true } }); // Exclude deleted users
    res.status(200).json({ mess: "Users Found Successfully", data: users });
  } catch (error) {
    res.status(400).json({ mess: "Users not found", error });
  }
};


// delete User
const deleteUser = async (req, res) => {
  const { name } = req.body;

  try {
    if (!name) {
      console.error("Invalid user name provided");
      return res.status(400).json({ mess: "Invalid user name provided" });
    }

    console.log(`Attempting to delete user with name: ${name}`);

    const deletedUser = await User.findOneAndUpdate(
      { name },
      { $set: { isDeleted: true } }, // Set isDeleted to true when deleting the user
      { new: true }
    );

    if (deletedUser) {
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

//Update User
const updateUser = async (req, res) => {
  const { name, phone, email, address, password } = req.body;
  const id = req.params.id;

  try {
    console.log(`Attempting to update user with id: ${id}`);

    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { $set: { name, phone, email, address, password } },
      { new: true }
    );

    if (updatedUser) {
      console.log(`User with id ${id} updated successfully`);
      res.status(200).json({ message: "Updated successfully", updatedUser });
    } else {
      console.log(`User with id ${id} not found`);
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(`Error updating user with id ${id}:`, error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
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

const showDeletedUsers = async (_, res) => {
  try {
    const deletedUsers = await User.find({ isDeleted: true });
    res.status(200).json({ mess: "Deleted Users Found Successfully", data: deletedUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mess: "Error fetching deleted users", error: error.message });
  }
};


module.exports = { addUser, loginUser, showUser, deleteUser, updateUser, searchUser, showDeletedUsers};
