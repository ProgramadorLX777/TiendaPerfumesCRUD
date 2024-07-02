const mysql = require('mysql2');
const config = require('../config/config.js');

let conn;
function connMYSQL() {

    conn = mysql.createConnection(config.mysql);

    conn.connect((error) => {
        if (error) {
            console.log('[ERROR 500 - ERROR AL CONECTAR BD!!]', error);
            setTimeout(connMYSQL, 2000);
        } else {
            console.log('[BD INICIADA CON EXITO - 200!!]');
        }
    });

    conn.on('error', error => {
        console.log('[db error]', error);
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            connMYSQL();
        } else {
            throw error;
        }
    });
}
connMYSQL();

module.exports = conn