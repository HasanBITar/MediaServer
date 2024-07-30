const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../db');
const config = require('../config')
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
        return res.status(401).json({ message: 'The email is not registered' });
    }

    const isValid = await bcrypt.compare(password, result.password);
    if (!isValid) {
        return res.status(401).json({ message: 'Incorrect password' });
    }
    
    console.log(result);

    const token = jwt.sign({ userId: result.user_id }, config.env.JWT_SECRET, {
        expiresIn: '24h',
    });

    res.status(200).json({ ...result, token });
}

const verifyToken = async (req, res) => {
    const [ok, result] = await userModel.getUserById(req.userId);
    if(!ok) return await errorRespone(result, res);
    res.status(200).json(result);
}

module.exports = { signupUser, signinUser, verifyToken};