## Installation

Disclaimer: This process assumes you already have installed git, NodeJS, and MySQL
If you do not have these please do not continue furthur without downloading the following:
- [NodeJS](https://nodejs.org/en/)
- [MySQL](https://dev.mysql.com/downloads/installer/)
- [Git](https://git-scm.com/downloads)


Clone the repository

```cmd
git clone https://github.com/SergeantSmelly/Express-MySQL-Template
```

## MySQL

Before you start the server you are going to want to connect your database, so head to utils/database.js and you are going to want to add your credentials in lines 4 - 8 replacing the process.env's unless you are going to use a .env file. The file says: 

```javascript
const mysqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DATABASE
});
```

No need for extra config if you want the .env file, it already supported. Place it in the Website folder for it to take effect. Here is a .env file example: 

```.env
MYSQL_USER='user'
MYSQL_PASSWORD='password'
MYSQL_DATABASE='database'
```

( You don't need the quotes unless it contains spaces in your credentials )
## Start The App

To start the server you are going to need to open up a command prompt and enter:
```cmd
nodemon app.js
```
That will start the database and the webserver, you should see: 
```cmd
[nodemon] 2.0.12
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Database Connected
```

If you do not see what I see you have some errors to sort out on your end. Once you get it running you can go to http://localhost:3000/ and enjoy your running webserver with a connected database.

## Other
- .env file documentation [here](https://appdividend.com/2019/06/06/what-is-process-env-in-node-js-environment-variables-in-node-js/)

- Some miscellaneous snippets through out the creation of a Heroku app that may be useful to you are right [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)

- Plenty of much needed information on SQL and can help you understand it a bit better at this [link](https://dev.to/lisahjung/beginner-s-guide-to-using-mysql-database-in-a-node-js-app-49li)