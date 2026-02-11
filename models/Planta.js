const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('Planta', {
    id_planta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    numero_planta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    capacidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_hospital: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'HOSPITAL',
        key: 'id_hospital'
      }
    }
  }, {
    tableName: 'PLANTA',
    freezeTableName: true,
    timestamps: false
  });
};