import { Router } from 'express';
import {
  getBoards,
  getBoardById,
  createBoard,
  deleteBoard,
  createList,
  deleteList,
  createCard,
  deleteCard,
} from '../controllers/board.controller';

const router = Router();

router.get('/boards', getBoards);
router.get('/boards/:id', getBoardById);
router.post('/boards', createBoard);
router.delete('/boards/:id', deleteBoard);
router.post('/boards/:id', createList);
router.delete('/boards/list/:id', deleteList);
router.post('/boards/list/:id', createCard);
router.delete('/boards/list/card/:id', deleteCard);
export default router;
