// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/dev.sqlite3"
    },
    useNullAsDefault: true
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection:
      "postgres://pvkzluaqxjwsng:374212a0f9cd18edb0d7975b736d66578fe0028d6ddfb0bcc83bc9c7e596efc1@ec2-54-225-113-7.compute-1.amazonaws.com:5432/d4prhnj29vc6pl",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
