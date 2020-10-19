import pool from '../db';


export async function findBoards() {
  try {
    const boards = await pool.query('SELECT * FROM board');
    return boards
  } catch (err) {
    console.error(err.message);
  }
}

export default findBoards;