// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const expertReview = sequelizeClient.define('expert_review', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ideasID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    usersID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    score: {
      type: DataTypes.JSON,
      allowNull: true
    },
    publish: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    trash: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  expertReview.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return expertReview;
};
