// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const booking = sequelizeClient.define('booking', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tanggal: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: true
    },
    roomID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    usersID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    events: {
      type: DataTypes.JSON,
      allowNull: true
    },
    approve: {
      type: DataTypes.ENUM('no','yes'),
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

  booking.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return booking;
};
