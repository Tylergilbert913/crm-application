module.exports = (sequelize, Sequelize) => {
  const Estimate = sequelize.define("Estimate", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    schedule_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    schedule_date_start: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    schedule_date_end: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    labor_cost: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    material_cost: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    material_type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    material_quanity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    discount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    subtotal: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    total: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    JobID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "job",
        key: "JobID",
        unique: true,
      },
    },
  });
  return Estimate;
};
