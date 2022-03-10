module.exports = (sequelize, Sequelize) => {
  const Invoice = sequelize.define("Invoice", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    invoice_total: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    // EstimateID: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "invoice",
    //     key: "EstimateID",
    //     unique: true,
    //   },
    // },
  });
  return Invoice;
};
