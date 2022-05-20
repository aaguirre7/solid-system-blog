//module imports
const db = require('sequelize');
require('dotenv').config();

//start DB

let sequelize;

if (process.env.JAWSDB_URL){
    sequelize = new db(process.env.JAWSDB_URL);
}else{
    sequelize = new db(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

//export modules
module.exports = sequelize;

