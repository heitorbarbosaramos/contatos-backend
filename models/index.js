const dbConfig = require('../config/db.config');

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    operatorsAliasdes: 0,
     pool: {
         max: dbConfig.pool.max,
         min: dbConfig.pool.min,
         acquire: dbConfig.pool.acquire,
         idle: dbConfig.pool.idle
     }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.endereco = require('./endereco.model')(sequelize, Sequelize);
db.social = require('./social.model')(sequelize, Sequelize);

module.exports = db;