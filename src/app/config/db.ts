import knex, { Knex } from "knex";

const knexConfig: Knex.Config = {
    client: process.env.DB_DRIVER,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        dateStrings: true,
    },
    acquireConnectionTimeout: 100000000,
    debug: process.env.DB_DEBUG === 'true' || false,
    pool: { min: 0, max: 10, propagateCreateError: false },
};
const db = knex(knexConfig);

export default db;