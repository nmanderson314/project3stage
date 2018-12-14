module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Users model a name of type STRING
    ID:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    USERNAME: {
      type: DataTypes.STRING
    },
    PASSWORD:{
      type: DataTypes.STRING
    }
  });

  return User;
};