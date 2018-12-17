// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const ideas = sequelizeClient.define('ideas', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    deskripsi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    file: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isi: {
      type: DataTypes.JSON,
      allowNull: true
    },
    kategoriID: {
      type: DataTypes.INTEGER(1),
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

  ideas.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return ideas;
};
