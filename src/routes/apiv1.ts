import { Router } from 'express';
import { getBoards, getBoardById } from '../controllers/board.controller';

const router = Router();

router.get('/boards', getBoards);
router.get('/boards/:id', getBoardById);
// router.post('/boards', createBoard);

export default router;