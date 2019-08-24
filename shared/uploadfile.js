var path = require('path')
var multer = require('multer')

var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, '../uploads')
	},
	filename: function(req, file, callback) {
		console.log(file)
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

module.exports=storage;
