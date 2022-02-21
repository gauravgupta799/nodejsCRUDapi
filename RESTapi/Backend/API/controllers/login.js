const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const secretAccess = process.env.ACCESS_TOKEN;
const secretRefresh = process.env.REFRESH_TOKEN;

const refreshTokens =[" "];

// LOGIN
const LoginUser = async (req, res) => {
	try{
		const { username, password } = req.body;
		if (!username || !password) {
			return res.send(401).json({ message: "Please fill the field" });
		}
		const userfind = await User.findOne({ username:username});
			if (userfind.length < 1) {
				return res.status(401).json({
					message: "User is not exist",
				});
			}
		const passIsValid = await bcrypt.compare(password, userfind.password);
		if (passIsValid) {
					const AccessToken = jwt.sign(
						{
							username: userfind.username,
							userType: userfind.userType,
							phone: userfind.phone,
							city: userfind.city,
						},
						secretAccess,
						{ expiresIn: "2m" }
					); 
					const RefreshToken = jwt.sign(
						{
							username: userfind.username,
							userType: userfind.userType,
							phone: userfind.phone,
							city: userfind.city,
						},
						secretRefresh,
						{ expiresIn: "24h" }
					);
					// refreshTokens.push(RefreshToken);
					res.status(200).json({
						id: userfind._id,
						username: userfind.username,
						userType: userfind.userType,
						phone: userfind.phone,
						accessToken: AccessToken,
						refreshToken: RefreshToken
					});
				}else {
					res.status(500).json({ error:error });
				}
	}catch(err){
		res.status(500).json({ error:"something went wrong"})
	}
}
  
// Refresh Token
const RefreshToken = (req, res) => {
	const refreshToken = req.body.token;
	if (!refreshToken || !refreshTokens.includes(refreshToken)) {
		return res.status(403).json({ message: "Sorry!, Token is not valid !" });
	}else {
		jwt.verify(refreshToken, secretRefresh, (err, user) => {
			// console.log(refreshToken);
			if (!err) {
				const accessToken = jwt.sign( {
					username: user.username,
					userType: user.userType,
					phone: user.phone,
					city: user.city
				}, secretAccess,
				{ expiresIn: "24h" });
				   return res.status(200).json({ accessToken });
			}else {
				return res.status(403).json({ message: "User is not authinticated" });
			}
		});
	}
};

module.exports = { LoginUser, RefreshToken };
