var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'todos'
});

connection.connect();

var query = function(q) { 
  return new Promise(function(resolve, reject){
    connection.query(q, function (error, results, fields){
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    })
  })
}

module.exports = {
	handleGet: () => query('SELECT * FROM items'),
	handlePost: ({event, due, priority,done}) => query(`INSERT INTO items(event, due, priority, done) VALUES ('${event}', '${due}', '${priority}', ${done})`)
}


//query(`INSERT INTO items(event, due, priority, done) VALUES (${event}, ${due}, ${priority}, ${done})`