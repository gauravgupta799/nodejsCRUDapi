const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 8800;
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const MONGODB = process.env.MONGODB_URI;

const RegisterUser = require("./API/routes/signup");
const logoutroute = require("./API/routes/logout");
const loginroute = require("./API/routes/login");
const homeroute = require("./API/routes/home");
const bodyParser = require("body-parser");
const profileroute = require("./API/routes/profile");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/user", RegisterUser);
app.use("/api/user", homeroute);
app.use("/api/user", loginroute);
app.use("/api/user", logoutroute);
app.use("/api/user", profileroute);

app.use(express.static(path.join(__dirname, "./uploads")));

app.use((req, res) => {
	res.status(200).json({
		message: "app is running",
	});
});

mongoose.connect(MONGODB, {useNewUrlParser: true,useUnifiedTopology: true})
	.then(console.log("Connected with database successfully.."))
	.catch((err) => console.error(err));

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});