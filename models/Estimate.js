const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Estimate extends Model {}

Estimate.init(
  {
    EstimateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    schedule_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    schedule_date_start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    schedule_date_end: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    labor_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    material_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    material_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    material_quanity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    JobID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "job",
        key: "JobID",
        unique: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "estimate",
  }
);

module.exports = Estimate;
