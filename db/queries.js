const pool = require('./pool');

async function getAllPatrons() {
  const { rows } = await pool.query('SELECT * from patrons');
  return rows;
}

async function insertPatron(patron) {
  await pool.query('INSERT INTO patrons (patron) VALUES ($1)', [patron]);
}

module.exports = {
  getAllPatrons,
  insertPatron
};