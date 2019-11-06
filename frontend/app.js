var express = require('express');

//set up handlebars view engine and express app
var handlebars = require('express-handlebars').create({
	defaultLayout : 'main'
});
var app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

require('./routes/approutes')(app)

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:' + app.get('port')
			+ '; press Ctrl-C to terminate.');
});



