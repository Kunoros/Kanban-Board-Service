import { Router } from 'express';
import pool from '../db';

const router = Router();

router.get('/:id', async (req, res) => {
  try {
    const listCards = await pool.query(`SELECT list.list_id, list.list_name, json_agg(jsonb_build_object( 'card_id', card.card_id, 'card_name', card.card_name, 'card_description', card.card_description)) AS card FROM list LEFT JOIN card on list.list_id = card.list_id WHERE list.board_id='${req.params.id}' GROUP BY list.list_id, card.list_id`)
    res.send(listCards.rows)
  } catch (err) {
    console.error(err.message);
  }
});

export default router;