module.exports = function(sequelize, DataTypes) {
    var forumHeader = sequelize.define("forumHeader", {
        POST_ID:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        POST_TITLE:{
            type: DataTypes.STRING
        },
        USER_ID:{
            type: DataTypes.INTEGER
        },
        NEIGHBORHOOD_ID:{
            type: DataTypes.INTEGER
        }
    });


    return forumHeader;
};