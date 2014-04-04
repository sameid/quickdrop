var http = require('http');
var express = require('express');
var path = require('path')

var app = express();
app.configure(function () {
	// app.set('views', __dirname + '/public');
	app.engine('html', require('ejs').renderFile);
    app.use(express.urlencoded());
	app.use(express.json());
	app.use(express.logger('dev'));
    app.use('/', express.static(path.join(__dirname, 'public')));
});

app.get('/', function (req, res){
	res.render('index.html')
});



app.listen(8080);
console.log('quickdrop server running...');