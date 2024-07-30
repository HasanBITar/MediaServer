const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const userModel = require('../models/userModel');
const errorRespone = require('../utils')

const signupUser = async (req, res) => {
    const userData = req.body;
    const [ok, result] = await userModel.addUser(userData);

    if (!ok) return await errorRespone(result, res);
    res.status(200).json(result);

}


const signinUser = async (req, res) => {
    const { email, password } = req.body;
    const [ok, result] = await userModel.getUserByEmail(email);

    if (!ok) return await errorRespone(result, res);

    if (result === null) {
        return res.status(401).json({ message: 'Email does not exist' });
    }

    const isValid = await bcrypt.compare(password, result.password);
    if (!isValid) {
        return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ userId: result.id }, process.env.JWT_SECRET, {
        expiresIn: '24h',
    });

    res.json({ ...result, token });
}

module.exports = { signupUser, signinUser }