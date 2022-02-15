module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define("Job", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tech_notes: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ClientID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "client",
        key: "ClientID",
        unique: true,
      },
    },
  });
  return Job;
};
