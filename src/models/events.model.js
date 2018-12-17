// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const events = sequelizeClient.define('events', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    judul: {
      type: DataTypes.STRING,
      allowNull: false
    },
    series: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startevents: {
      type: DataTypes.JSON,
      allowNull: true,
      unique: true
    },
    stopevents: {
      type: DataTypes.JSON,
      allowNull: true
    },
    optimizing_search: {
      type: DataTypes.JSON,
      allowNull: true
    },
    venue_lokasi: {
      type: DataTypes.JSON,
      allowNull: true
    },
    misc: {
      type: DataTypes.JSON,
      allowNull: true
    },
    usersID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    misc: {
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

  events.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return events;
};
