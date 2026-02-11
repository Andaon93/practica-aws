const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('Hospital', {
    id_hospital: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    presupuesto: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true
    },
    publico: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    tableName: 'HOSPITAL',
    freezeTableName: true,
    timestamps: false
  });
};