CREATE DATABASE kanbanboard;

CREATE TABLE board
(
    id SERIAL PRIMARY KEY,
    board_name VARCHAR(255)
);

CREATE TABLE list
(
    id SERIAL PRIMARY KEY,
    list_name VARCHAR(255),
    board_id INTEGER
);

CREATE TABLE card
(
    id SERIAL PRIMARY KEY,
    card_name VARCHAR(255),
    card_description VARCHAR(255),
    list_id INTEGER
);


-- 
SELECT list.list_id, list.list_name, json_agg(jsonb_build_object( 'card_id', card.card_id, 'card_name', card.card_name, 'card_description', card.card_description)) AS card
FROM list LEFT JOIN card on list.list_id = card.list_id
WHERE list.board_id='${req.params.id}'
GROUP BY list.list_id, card.list_id
-- 

