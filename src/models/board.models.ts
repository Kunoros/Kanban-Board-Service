import pool from '../db';

async function findBoards() {
  try {
    const boards = await pool.query('SELECT * FROM board');
    return boards;
  } catch (err) {
    console.error(err.message);
  }
}

async function createNewBoard(boardName: string) {
  try {
    const newBoard = await pool.query(
      `INSERT INTO board (board_name) VALUES ('${boardName}')`
    );
    return newBoard;
  } catch (err) {
    console.error(err.message);
  }
}

async function deleteFullBoardById(id: string) {
  try {
    const deleteBoard = await pool.query(
      `DELETE FROM board WHERE board_id = '${id}'`
    );
  } catch (err) {
    console.error(err.message);
  }
}

async function deleteListById(id: string) {
  try {
    const deleteBoard = await pool.query(
      `DELETE FROM list WHERE list_id = '${id}'`
    );
  } catch (err) {
    console.error(err.message);
  }
}

async function crateNewList(id: string, listName: string) {
  try {
    const newBoard = await pool.query(
      `INSERT INTO list (list_name, board_id) VALUES ('${listName}','${id}')`
    );
    return newBoard;
  } catch (err) {
    console.error(err.message);
  }
}

async function crateNewCard(
  cardName: string,
  cardDescription: string,
  id: string
) {
  try {
    const newCard = await pool.query(
      `INSERT INTO card (card_name, card_description, list_id) VALUES ('${cardName}','${cardDescription}','${id}')`
    );
    return newCard;
  } catch (err) {
    console.error(err.message);
  }
}

async function deleteCardById(cardId: string) {
  try {
    const deleteBoard = await pool.query(
      `DELETE FROM card WHERE card_id = '${cardId}'`
    );
  } catch (err) {
    console.error(err.message);
  }
}

async function updateCardByListId(cardId: string, listId: string) {
  try {
    const updateCard = await pool.query(
      `UPDATE card SET list_id='${listId}' WHERE card_id=${cardId}`
    );
  } catch (err) {
    console.error(err.message);
  }
}

export {
  findBoards,
  createNewBoard,
  deleteFullBoardById,
  deleteListById,
  crateNewList,
  crateNewCard,
  deleteCardById,
  updateCardByListId,
};
