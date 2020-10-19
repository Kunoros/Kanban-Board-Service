import { Router } from 'express';
import pool from '../db';

const router = Router();

router.get(`/`, async (req, res) => {
  try {
    const allBoards = await pool.query('SELECT * FROM board');
    res.json(allBoards.rows);
  } catch (err) {
    console.error(err.message);
  }
});

export default router;
