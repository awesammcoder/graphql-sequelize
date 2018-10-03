function User(Sequelize, Conn){

  return Conn.define('user', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },

    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

}

module.exports = User;