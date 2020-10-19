import { Request, Response } from 'express';
import {findBoards} from '../models/board.models'
import {findListByBoardId}  from '../models/list.models'

export async function getBoards(req: Request, res: Response) {
    const boards = (await findBoards())
    res.send(boards.rows)
}

export async function getBoardById(req: Request, res: Response) {
    const lists = (await findListByBoardId(req.params.id))
    res.send(lists.rows)
}