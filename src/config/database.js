require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

module.exports = {
  development: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT || "postgres",
    storage: 'src/database/db/database.sqlite',
    logging: false,
    define: {
      timestamps: true,
      charset: "utf8",
    },
  }
}