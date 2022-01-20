const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Job extends Model {}

Invoice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tech_notes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ClientID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "client",
        key: "ClientID",
        unique: true,
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "job",
  }
);

module.exports = Job;
