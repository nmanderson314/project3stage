module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Users model a name of type STRING
    ID:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
<<<<<<< HEAD
    username: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    bio:{
=======
    USERNAME: {
      type: DataTypes.STRING
    },
    PASSWORD:{
>>>>>>> 75a1ee8deb100c28c069c500ba630c443bd63423
      type: DataTypes.STRING
    }
  });

<<<<<<< HEAD
  // Users.associate = function(models) {
  //   // Associating Users with photos
  //   // When an Users is deleted, also delete any associated photos
  //   Users.hasMany(models.Photos);
  // };

  return Users;
};
=======
  return User;
};
>>>>>>> 75a1ee8deb100c28c069c500ba630c443bd63423
