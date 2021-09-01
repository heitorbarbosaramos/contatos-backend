module.exports = (sequelize, Sequelize) => {
   const social = sequelize.define('social',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    label: Sequelize.STRING(20),
    icon: Sequelize.STRING,
    link: Sequelize.STRING,
   });
   return social;
}