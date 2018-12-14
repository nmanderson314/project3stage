module.exports = function(sequelize, DataTypes) {
  var Locations = sequelize.define("Locations", {
    LOCATION_NAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LOCATION_TYPE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DESCRIPTION: {
      type: DataTypes.STRING
    },
    LOCAL_NOTE: {
      type: DataTypes.STRING
    },
    WEBSITE: {
      type: DataTypes.STRING
    },
    LOCATION_ADDRESS: {
      type: DataTypes.STRING
    },
    PHONE: {
      type: DataTypes.STRING
    },
    EARLY: {
      type: DataTypes.INTEGER
    },
    MID: {
      type: DataTypes.INTEGER
    },
    LATE: {
      type: DataTypes.INTEGER
    },
    NEIGHBORHOOD_ID:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NATSTAMP:{
      type: DataTypes.INTEGER
    }
  });

  Locations.associate = function(models) {
    Locations.belongsTo(models.Neighborhood, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return Locations;
};
