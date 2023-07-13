import {defineStore} from 'pinia';

export const useTicTacToeStore = defineStore('ticTacToe', () => {
    // Initialize the board as an array of 0s
    const board = ref([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    // Initialize the player's sign as 'O'
    const playerSign = ref('O');

    // Initialize the bot's turn as false - the player starts the game;
    let botTurn = ref(false);

    // Initialize the score and rounds as 0
    const score = ref(0);
    const rounds = ref(0);

    // Compute the player's value based on their sign
    const player = computed(() => (playerSign.value === 'O' ? 2 : 1));

    // Compute the winner of the game
    const winner = computed(() => {
        // If there are less than 5 non-zero tiles on the board (not more than 4 moves), there can't be a winner yet
        if (board.value.filter((tile) => tile !== 0).length < 5) return null;

        // Get the row and column of the last played tile
        let row = Math.floor(game.index / 3);
        let col = game.index % 3;

        // Check for a horizontal win
        for (let i = 0; i < 3; i++) {
            if (board.value[row * 3 + i] !== player.value) break; // break loop if there is a tile that doesn't have right player value;
            if (i === 2) return player.value; // if it reaches the last iteration it returns the winner's value
        }

        // Check for a vertical win
        for (let i = 0; i < 3; i++) {
            if (board.value[col + i * 3] !== player.value) break;
            if (i === 2) return player.value;
        }

        // Check for a diagonal (from upper left to lower right) win
        if (col === row) {
            for (let i = 0; i < 3; i++) {
                if (board.value[i * 4] !== player.value) break;
                if (i === 2) return player.value;
            }
        }

        // Check for an anti-diagonal (from lower left to upper right) win
        if (col + row === 2) {
            for (let i = 0; i < 3; i++) {
                if (board.value[(i + 1) * 2] !== player.value) break;
                if (i === 2) return player.value;
            }
        }

        if (!board.value.includes(0)) return 3;   // If there are no empty tiles left, it's a tie

        return null; // No winner yet
    });

    // Function to set a cell on the board to the current player's sign
    function setCell(index) {

        if (board.value[index] === 0 && !winner.value && !botTurn.value) {      // Only allow setting a cell if it's empty, there is no winner, and it's not the bot's turn
            board.value[index] = playerSign.value === 'O' ? 1 : 2;              // Set the cell to the current player's value
            playerSign.value = playerSign.value === 'O' ? 'X' : 'O';            // Switch the player's sign (here from player to bot)
            botTurn.value = true;                                               // It's now the bot's turn
        } else {
            board.value[index] = playerSign.value === 'O' ? 1 : 2;              // Set the cell to the current player's value
            playerSign.value = playerSign.value === 'O' ? 'X' : 'O';            // Switch the player's sign (here from bot to player)
        }
        game.index = index;                                                      // Update the index of the last played tile
    }

    // Function to reset the board to its initial state
    function resetBoard() {
        board.value = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        playerSign.value = 'O';
    }

    // Function to reset the score and rounds to 0
    function resetScore() {
        score.value = 0;
        rounds.value = 0;
    }

    // Function for the bot to make a move
    function makeBotMove() {
        setTimeout(() => {
            // Only allow the bot to make a move if the player's sign is 'X' and there is no winner
            if (playerSign.value === 'X' && !winner.value) {

                // Get the indexes of the empty cells on the board
                const indexes = board.value
                    .map((e, i) => (e === 0 ? i : -1))
                    .filter((e) => e >= 0);

                // Get the row and column of the last played tile
                let row = Math.floor(game.index / 3);
                let col = game.index % 3;

                // set all variables to 0
                let horizontal = 0;
                let smartMoveHor = 0;

                let vertical = 0;
                let smartMoveVer = 0;

                let diagonal = 0;
                let smartMoveDia = 0;

                let antiDiagonal = 0;
                let smartMoveAntDia = 0;

                // checking for possible winning situations of the human player
                // Check for a potential horizontal win or blocking move
                for (let i = 0; i < 3; i++) {
                    if (board.value[row * 3 + i] === 1) {
                        horizontal++;
                    } else if (board.value[row * 3 + i] === 2) {
                        // if human player's tile is in the row it decreases horizontal by 1 (so the horizontal smart move is not executed because there is no blocking needed)
                        horizontal--;
                    } else {
                        // setting respective smartMove to board index
                        smartMoveHor = row * 3 + i;
                    }
                }

                // Check for a potential vertical win or blocking move
                for (let i = 0; i < 3; i++) {
                    if (board.value[col + i * 3] === 1) {
                        vertical++;
                    } else if (board.value[col + i * 3] === 2) {
                        // if human player's tile is in the column it decreases vertical by 1 (so the vertical smart move is not executed because there is no blocking needed)
                        vertical--;
                    } else {
                        // setting respective smartMove to board index
                        smartMoveVer = col + i * 3;
                    }
                }

                // Check for a potential diagonal win or blocking move
                if (col === row) {
                    for (let i = 0; i < 3; i++) {
                        if (board.value[i * 4] === 1) {
                            diagonal++;
                        } else if (board.value[i * 4] === 2) {
                            // if human player's tile is in the diagonal it decreases diagonal by 1 (so the diagonal smart move is not executed because there is no blocking needed)
                            diagonal--;
                        } else {
                            // setting respective smartMove to board index
                            smartMoveDia = i * 4;
                        }
                    }
                }

                // Check for a potential anti-diagonal win or blocking move
                if (col + row === 2) {
                    for (let i = 0; i < 3; i++) {
                        if (board.value[(i + 1) * 2] === 1) {
                            antiDiagonal++;
                        } else if (board.value[(i + 1) * 2] === 2) {
                            // if human player's tile is in the anti-diagonal it decreases anti-diagonal by 1 (so the anti-diagonal smart move is not executed because there is no blocking needed)
                            antiDiagonal--;
                        } else {
                            // setting respective smartMove to board index
                            smartMoveAntDia = (i + 1) * 2;
                        }
                    }
                }

                // Make a blocking move depending on the playing situation (if there are more than 2 of the human-player's values in the respective direction)
                // or a random one
                if (horizontal >= 2) {
                    setCell(smartMoveHor);

                } else if (vertical >= 2) {
                    setCell(smartMoveVer);

                } else if (diagonal >= 2) {
                    setCell(smartMoveDia);

                } else if (antiDiagonal >= 2) {
                    setCell(smartMoveAntDia);

                } else {
                    const randIndex = Math.floor(Math.random() * indexes.length);
                    const i = indexes[randIndex];
                    setCell(i);
                }
            }
            // It's no longer the bot's turn
            botTurn.value = false;
        }, 700);
    }

    // Watch for changes in the player's sign
    watch(
        () => playerSign.value,
        () => {
            // If the player wins, increase the score
            if (winner.value === 1) {
                score.value++;
            }

            // If there is a winner (1 for player, 2 for bot, 3 for draw), increase the rounds
            if (winner.value) {
                rounds.value++;
            }

            // If it's the bot's turn, make a bot move
            if (botTurn.value) {
                makeBotMove();
            }
        }
    );


    // Define the game object with all the relevant properties and functions and return it
    const game = {
        index: 0,
        board,
        playerSign,
        botTurn,
        score,
        rounds,
        winner,
        setCell,
        resetBoard,
        resetScore
    }

    return {
        game
    };
});