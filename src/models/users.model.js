// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nama_depan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nama_belakang: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kategori: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nohp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jenis_kelamin: {
      type: DataTypes.ENUM('pria', 'wanita'),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alamat: {
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
    },
    active: {
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

  users.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return users;
};
