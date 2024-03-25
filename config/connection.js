// Configuration settings
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    'techblog_db',
    'root',
    '',
    {
      host: 'localhost',
      dialect: 'mysql',
      password: '',
      port: 3306
    }
  );
}


module.exports = sequelize;