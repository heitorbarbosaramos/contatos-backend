module.exports = {
    HOST : process.env.DB_HOST,
    USER : process.env.DB_USER,
    PASSWORD : process.env.DB_PASSWORD,
    DATABASE : process.env.DB_DATABASE,
    DIALECT : "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};