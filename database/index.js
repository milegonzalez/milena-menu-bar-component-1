const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'milenita1809!',
  database: 'users'
});

connection.connect((err) => {
  if (err) {
    console.log(`ERROR: ${err.message}`);
  } else {
    console.log('database connected');
  }
});

module.exports.connection = connection;


// connection.connect(function(err) {
//   if(err) {
//     return console.error('error ' + err.message);
//   }

//   console.log('Connected to the MySQL server. ')
// });

// module.exports.connection = connection;