var db = require('./dbpool');
module.exports = {
    myexec: async (sql)=>{
        return new Promise((resolve, reject) => {
            db.connectionpool.getConnection(function (err, connection) {
                  var query = connection.query(sql,function (err, result) {
                      connection.release();
                      if (err) {
                          console.log(query.sql);
                          console.error(err);
                          reject(err.sqlMessage);
                      }
                       console.log('\x1b[36m%s\x1b[0m',"SQL QUERY => "+query.sql);
                       resolve(result);
                  });
              });
          })
    }
}




