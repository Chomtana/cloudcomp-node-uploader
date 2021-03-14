var express = require('express')
var multer = require('multer')
var app = express()
const fs = require('fs')
//var bodyParser = require('body-parser');
app.use(express.raw({
	inflate: true, limit: '100GB', type: '*/*'
}));
//app.use(multer({dest: './uploads/'}).single('file'))
app.post('/upload', function (req, res) {
	fs.writeSync(fs.openSync('./uploads/' + Date.now(), 'w'), req.body);
	res.send("Success");
})
app.listen(80, function () {
	  console.log('App running on port 80')
})
