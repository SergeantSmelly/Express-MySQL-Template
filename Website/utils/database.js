const mysql = require('mysql');

// credentials for my database connection
const mysqlConnection = mysql.createConnection({
	host	   : 'localhost',
	user     : process.env.MYSQL_USER,
	password : process.env.MYSQL_PASSWORD,
	database : process.env.MYSQL_DATABASE,
});

// check for error connecting to database
mysqlConnection.connect((err) => {
	if (!err) {
		// if connection is made
		console.log('Database Connected');
	} else {
		// if connection is failed
		console.log('Database Connection Failed');
		console.log(err);
	}
});

module.exports = mysqlConnection;
