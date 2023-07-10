import {defineStore} from 'pinia';

export const useTicTacToeStore = defineStore('ticTacToe', () => {
    const board = ref([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const turn = ref('O');
    let botTurn = false;

    const turnCode = computed(() => (turn.value === 'O' ? 2 : 1));

    const winner = computed(() => {
        if (board.value.filter((d) => d !== 0).length < 5) return null;

        let row = Math.floor(game.index / 3);
        let col = game.index % 3;

        // horizontal
        for (let i = 0; i < 3; i++) {
            if (board.value[row * 3 + i] !== turnCode.value) break;
            // console.log('horizontal');
            if (i === 2) return turnCode.value;
        }
        console.log('________________________________')
        console.log('________________________________')
        console.log('col ' + col);
        console.log('row ' + row);
        // vertical
        for (let i = 0; i < 3; i++) {
            console.log('i ' + i);
            console.log('r*i+3 ' + (row + 3 * i))
            if (board.value[col + i * 3] !== turnCode.value) break;
            if (i === 2) return turnCode.value;
        }
        console.log('________________________________')
        console.log('________________________________')

        // diagonal
        if (col === row) {
            for (let i = 0; i < 3; i++) {
                if (board.value[i * 4] !== turnCode.value) break;
                // console.log('diagonal');

                if (i === 2) return turnCode.value;
            }
        }

        // anti-diagonal
        if (col + row === 2) {
            for (let i = 0; i < 3; i++) {
                if (board.value[(i + 1) * 2] !== turnCode.value) break;
                // console.log('anti-diagonal');

                if (i === 2) return turnCode.value;
            }
        }

        if (!board.value.includes(0)) return -1;
        return null;
    });

    const setCell = (index) => {
        if (board.value[index] === 0 && !winner.value && !botTurn) {
            board.value[index] = turn.value === 'O' ? 1 : 2;
            turn.value = turn.value === 'O' ? 'X' : 'O';
            botTurn = true;
        } else {
            board.value[index] = turn.value === 'O' ? 1 : 2;
            turn.value = turn.value === 'O' ? 'X' : 'O';
        }
        game.index = index;
    };

    const reset = () => {
        board.value = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        turn.value = 'O';
    };

    // bot
    const makeBotMove = () => {
        setTimeout(() => {
            if (turn.value === 'X' && !winner.value) {
                const indexes = board.value
                    .map((e, i) => (e === 0 ? i : -1))
                    .filter((e) => e >= 0);
                const randIndex = Math.floor(Math.random() * indexes.length);
                const i = indexes[randIndex];
                setCell(i);
            }
            botTurn = false;
        }, 700);
    };

    watch(
        () => turn.value,
        (turn) => {
            if (botTurn) {
                makeBotMove();
            }
        }
    );

    const game = {
        index: 0,
        board,
        turn,
        botTurn,
        winner,
        setCell,
        reset,
    }

    return {
        game
    };
});