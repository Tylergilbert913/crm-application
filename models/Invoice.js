const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Invoice extends Model {}

Invoice.init(
  {
    InvoiceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    invoice_total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EstimateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "estimate",
        key: "EstimateID",
        unique: true,
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "invoice",
  }
);

module.exports = Invoice;
