var Sequelize = require('sequelize');

const user = require('./user');

const Conn = new Sequelize(
  'mainframe_db',
  'postgres',
  '',
  {
    dialect: 'postgres',
    host: 'localhost',
    operatorsAliases: false
  }
);

// Defining Tables by Passing Conn
const User = user(Sequelize, Conn);

Conn.sync();

exports.module = {
  user: User
};



