const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS patrons (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR (255)
);

INSERT INTO patrons (name)
    VALUES ('User1');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: process.env.PORT || 5432
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();