const mongoose = require("mongoose");
const User = require("../model/user");
const bcrypt = require("bcrypt");

// REGISTRATION
const RegisterUser = async (req, res) => {
	const { username, password, city, qualification, phone, userType } = req.body;
	if (!username || !password || !qualification || !city || !phone) {
		res.status(401).json({ message: "Please fill all the fields." });
	}
	else{
		try{
			const userExist = await User.findOne({ username: username});
				if(userExist){
					return res.status(422).json({ message:"User already exists." });
				}else{
				bcrypt.hash(password,10, (err, hash) => {
					if(err){
						res.status(500).json({ error:err})
					}else{
						const user = new User({
							_id: new mongoose.Types.ObjectId(),
							username, password: hash, qualification, city, phone, userType:userType ? userType : "User",
						});
						user.save((err,result) => {
							if(err){
								res.status(500).json({ error:err})
							}else{
								res.status(200).json({newuser:result})
							}
						})       
					}
				})
				}
			}
		catch(err)
		{
			res.status(500).json({ message: err.message})
		}
	}
};

module.exports = RegisterUser;

// bcrypt.hash(password, 10, (err, hash) => {
// 	if (err) {
// 		return res.status(401).json({
// 			error: err
// 		});
// 	}else {
// 		const user = new User({
// 			_id: new mongoose.Types.ObjectId(),
// 			username, password: hash, qualification, city, phone, userType:userType ? userType : "User",
// 		});
// 		user.save()
// 		.then((result) => {
// 			console.log(result);
// 			res.status(200).json({
// 				newUser: result,
// 			});
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(401).json({
// 				error: err,
// 			});
// 		});
// 	}
// });