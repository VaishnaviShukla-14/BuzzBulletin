const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secretKeys = process.env.KEY;

const generateToken = (payload) => {
    return jwt.sign({ payload }, secretKeys, { expiresIn: '1h' });
};

module.exports = generateToken;
