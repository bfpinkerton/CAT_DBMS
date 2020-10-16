module.exports = {
    // HOST: "localhost",
    // USER: "root",
    // PASSWORD: "admin123",
    // DB: "my_db",
    HOST: "us-cdbr-east-02.cleardb.com",
    USER: "b0cdd214e468f3",
    PASSWORD: "480b3cb1",
    DB: "heroku_0ccf4dabc653c14",
    dialect: "mysql",
    pool: {
      max: 80,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

// mysql://b0cdd214e468f3:480b3cb1@us-cdbr-east-02.cleardb.com/heroku_0ccf4dabc653c14?reconnect=true

// HOST: "us-cdbr-east-02.cleardb.com",
// USER: "b0cdd214e468f3",
// PASSWORD: "480b3cb1",
// DB: "heroku_0ccf4dabc653c14",