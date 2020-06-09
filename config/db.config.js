module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "admin123",
    DB: "my_db",
    dialect: "mysql",
    pool: {
      max: 80,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };