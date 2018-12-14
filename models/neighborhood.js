module.exports = function(sequelize, DataTypes) 
{
    var Neighborhood = sequelize.define("Neighborhood", {
     
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      HOODNAME: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ZIPCODE:{
        type: DataTypes.STRING,
        allowNull: false

      },
      BOUNDARYDESC:{
        type: DataTypes.STRING,
        allowNull: true

      },
      BOUNDARY_PHOTO:{
        type: DataTypes.STRING,
        allowNull: true

      },
      HOOD_VIBE:{
        type: DataTypes.STRING,
        allowNull: true
      },
      TRENDING_TOWARDS:{
        type: DataTypes.STRING,
        allowNull: true
      },
      COMING_SOON:{
        type: DataTypes.STRING,
        allowNull: true
      },
      ZID:{
        type: DataTypes.STRING,
        allowNull: true
      }
    });

    return Neighborhood;
  };
  