const multer = require("multer");

const fileStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		const newFilename = Date.now() + "--" + file.originalname;
		cb(null, newFilename);
	},
});

const fileFilter = (req, file, cb) => {
	// console.log(file)
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({
	storage: fileStorage,
	limits: { filesize: 1024 * 1024 * 5 },
	fileFilter: fileFilter,
}).single("profileimage");

module.exports = upload ;