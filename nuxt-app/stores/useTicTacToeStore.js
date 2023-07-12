import {defineStore} from 'pinia';

export const useTicTacToeStore = defineStore('ticTacToe', () => {
    const board = ref([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const playerSign = ref('O');
    let botTurn = ref(false);
    const score = ref(0);
    const rounds = ref(0);


    const player = computed(() => (playerSign.value === 'O' ? 2 : 1));

    const winner = computed(() => {
        if (board.value.filter((tile) => tile !== 0).length < 5) return null;

        let row = Math.floor(game.index / 3);
        let col = game.index % 3;

        // horizontal
        for (let i = 0; i < 3; i++) {
            if (board.value[row * 3 + i] !== player.value) break;
            if (i === 2) return player.value;
        }

        // vertical
        for (let i = 0; i < 3; i++) {
            if (board.value[col + i * 3] !== player.value) break;
            if (i === 2) return player.value;
        }

        // diagonal
        if (col === row) {
            for (let i = 0; i < 3; i++) {
                if (board.value[i * 4] !== player.value) break;
                if (i === 2) return player.value;
            }
        }

        // anti-diagonal
        if (col + row === 2) {
            for (let i = 0; i < 3; i++) {
                if (board.value[(i + 1) * 2] !== player.value) break;
                if (i === 2) return player.value;
            }
        }

        if (!board.value.includes(0)) return 3;
        return null;
    });

    const setCell = (index) => {
        if (board.value[index] === 0 && !winner.value && !botTurn.value) {
            board.value[index] = playerSign.value === 'O' ? 1 : 2;
            playerSign.value = playerSign.value === 'O' ? 'X' : 'O';
            botTurn.value = true;
        } else {
            board.value[index] = playerSign.value === 'O' ? 1 : 2;
            playerSign.value = playerSign.value === 'O' ? 'X' : 'O';
        }
        game.index = index;
    };

    const reset = () => {
        board.value = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        playerSign.value = 'O';
    };

    // bot
    const makeBotMove = () => {
        setTimeout(() => {
            if (playerSign.value === 'X' && !winner.value) {
                const indexes = board.value
                    .map((e, i) => (e === 0 ? i : -1))
                    .filter((e) => e >= 0);
                const randIndex = Math.floor(Math.random() * indexes.length);
                const i = indexes[randIndex];
                setCell(i);
            }
            botTurn.value = false;
        }, 700);
    };

    watch(
        () => playerSign.value,
        () => {
            if (winner.value === 1) {
                score.value++;
            }
            if (winner.value) {
                rounds.value++;
            }
            if (botTurn.value) {
                makeBotMove();
            }
        }
    );

    const game = {
        index: 0,
        board,
        playerSign,
        botTurn,
        score,
        rounds,
        winner,
        setCell,
        reset,
    }

    return {
        game
    };
});