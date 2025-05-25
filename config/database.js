// ========== config/database.js ==========
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('quiz_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mariadb',
});

module.exports = sequelize;
