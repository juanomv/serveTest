const  mysql = require ( 'mysql' ) ;

const conexion = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'juanomv2000',
    db       : 'node',
});


conexion.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
 });
conexion.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
  });
  
conexion.end();