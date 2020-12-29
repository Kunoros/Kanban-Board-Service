import { Request, Response } from 'express';
import {
  findBoards,
  createNewBoard,
  deleteFullBoardById,
  deleteListById,
  crateNewList,
  crateNewCard,
  deleteCardById,
  updateCardByListId,
} from '../models/board.models';
import { findListByBoardId } from '../models/list.models';

export async function getBoards(req: Request, res: Response) {
  const boards = await findBoards();
  res.send(boards.rows);
}

export async function getBoardById(req: Request, res: Response) {
  const lists = await findListByBoardId(req.params.id);
  res.send(lists.rows);
}

export async function createBoard(req: Request, res: Response) {
  if (!req.body || !req.body.name) {
    res.sendStatus(400);
  }
  createNewBoard(req.body.name);
  res.send(req.body.name);
}

export async function deleteBoard(req: Request, res: Response) {
  deleteFullBoardById(req.params.id);
}

export async function createList(req: Request, res: Response) {
  if (!req.body || !req.body.name) {
    res.sendStatus(400);
  }
  crateNewList(req.params.id, req.body.name);
  res.send(req.body.name);
}

export async function deleteList(req: Request, res: Response) {
  deleteListById(req.params.id);
}

export async function createCard(req: Request, res: Response) {
  if (!req.body || !req.body) {
    res.sendStatus(400);
  }
  crateNewCard(req.body.cardName, req.body.cardDescription, req.params.id);
  res.send(req.body.cardName + req.body.cardDescription);
}

export async function deleteCard(req: Request, res: Response) {
  deleteCardById(req.params.id);
}

export async function updateCard(req: Request, res: Response) {
  if (!req.body || !req.body) {
    res.sendStatus(400);
  }
  updateCardByListId(req.body.card_id, req.body.list_id);
  res.send(200);
}
