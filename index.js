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
	let fd = fs.openSync('./uploads/' + (req.query.name || Date.now()), 'w');
	fs.writeSync(fd, req.body);
	fs.closeSync(fd);
	res.sendStatus(200);
})
app.get('/read', function (req, res) {
	res.send(fs.readFileSync('./uploads/' + req.query.name));
})
app.listen(80, function () {
	  console.log('App running on port 80')
})
