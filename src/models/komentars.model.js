// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const komentars = sequelizeClient.define('c_ideas', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ideID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: true
    },
    misc: {
      type: DataTypes.JSON,
      allowNull: false
    },
    reply: {
      type: DataTypes.JSON,
      allowNull: true
    },
    usersID: {
      type: DataTypes.INTEGER(11),
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

  komentars.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return komentars;
};
