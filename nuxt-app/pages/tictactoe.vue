<template>
  <main>
    <h2>TicTacToe Game</h2>
    <div class="game">
      <div>
        <div class="gameStat">
          <h3>Current score: {{ store.game.score }} / {{ store.game.rounds }}</h3>
          <button @click="store.game.resetScore">Reset Score</button>
        </div>


        <div v-if="store.game.winner !== null">
          <div v-if="store.game.winner === 3">
            <h3>It's a draw!</h3>
          </div>
          <div v-else>
            <h3>{{ store.game.winner === 1 ? 'You win' : 'The bot wins' }}!</h3>
          </div>
          <button @click="store.game.resetBoard">Restart</button>
        </div>
      </div>

      <div class="tictactoeGrid">
        <div v-for="(cell, index) in store.game.board" :key="index">
          <button @click="store.game.setCell(index)" :disabled="cell !== 0 || store.game.winner || store.game.botTurn"
                  class="tictactoeCell">
            {{ cell === 1 ? 'O' : cell === 2 ? 'X' : ' ' }}
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import {useTicTacToeStore} from "~/stores/useTicTacToeStore";

const store = useTicTacToeStore();
</script>