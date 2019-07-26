require("dotenv").config();



module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/BWDemo.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
