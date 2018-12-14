module.exports = function(sequelize, DataTypes) {
    var forumDetail = sequelize.define("forumDetail", {
        POST_ID:{
            type: DataTypes.INTEGER,
        },
        POST_BODY:{
            type: DataTypes.STRING
        }
    });


    return forumDetail;
};