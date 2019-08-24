var mysql = require('mysql')
var pool = mysql.createPool({
    multipleStatements: true,
    connectionLimit: 50,
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 1005,
    database: 'dbsppd',
    timezone: 'utc'
})

module.exports.connectionpool = pool;