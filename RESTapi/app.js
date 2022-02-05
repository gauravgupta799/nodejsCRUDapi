const express = require("express");
const app = express();
const port = process.env.PORT || 8800;
const mongoose = require("mongoose");
const userroute = require("./API/routes/user");
const logoutroute = require("./API/routes/logout");
const loginroute = require("./API/routes/login");
const homeroute = require("./API/routes/home");
const bodyParser = require("body-parser");
const profileroute = require("./API/routes/profile");

const mongourl = "mongodb+srv://gauravcom:gupta123@cluster0.wzm9s.mongodb.net/API?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/user", userroute);
app.use("/api/user", homeroute);
app.use("/api/user", loginroute);
app.use("/api/user", logoutroute);
app.use("/api/user", profileroute);

app.use("/uploads", express.static("uploads"));
app.use(express.static(__dirname));

app.use((req, res, next) => {
	res.status(200).json({
		message: "app is running",
	});
});

mongoose.connect(mongourl, {useNewUrlParser: true,useUnifiedTopology: true})
	.then(console.log("Connected with database successfully.."))
	.catch((err) => console.error(err));

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
