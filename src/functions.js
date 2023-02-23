/**
 * Create a matrix of field objects that contains the information of the game board
 * Each field have the following properties:
 * row: Number of the row that the field is located
 * column: Number of the column that the field is located
 * opened: Boolean that indicates if the field is opened or not
 * flagged: Boolean that indicates if the field is flagged or not
 * mined: Boolean that indicates if the field is mined or not
 * exploded: Boolean that indicates if the field is exploded or not
 * nearMines: Number that indicates the number of mines that are near the field
 * @param {Number of Rows that the game table will have} rows 
 * @param {Number of Columns that the game table will have} columns 
 * @returns 
 */
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row)=> {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

/**
 * Place mine on the board field randomly until the amount of mines is reached
 * @param {Board created on the createBoard Method} board 
 * @param {Amount of mines on the field - will be based on game difficult level} minesAmount 
 */
const spreadMines = (board, minesAmount) => {
    const rows = board.length;
    const columns = board[0].length;
    let plantedMines = 0;
    while(plantedMines < minesAmount){
        const randomlySelectedRow = parseInt(Math.random() * rows, 10);
        const randomlySelectedCol = parseInt(Math.random() * columns, 10);

        if(!board[randomlySelectedRow][randomlySelectedCol].mined){
            board[randomlySelectedRow][randomlySelectedCol].mined = true;
            plantedMines++;
        }
    }
}

/**
 * Create the board based on the parameters passed, and return the board with the mines spreaded
 * @param {Number of rows on the game, will be passed to the createBoard Method} rows 
 * @param {Number of Columns on the game, will be passed to the createBoard Method} columns 
 * @param {Number of mines on the field, will be passed to the spreadMines Method} minesAmount 
 * @returns 
 */
const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns);
    spreadMines(board, minesAmount);
    return board;
}

export { createMinedBoard };