<template>
  <div>
    <h2>TicTacToe Game</h2>
    <div class="grid grid-cols-3">
      <div v-for="(cell, index) in store.game
     .board" :key="index">
        <button @click="store.game.setCell(index)" :disabled="cell !== 0 || store.game.winner"
            class="bg-gray-200 text-gray-800 font-bold py-4 px-6 rounded">
          {{ cell === 1 ? 'O' : cell === 2 ? 'X' : '-' }}
        </button>
      </div>
    </div>
    <div v-if="store.game.winner !== null">
      <div v-if="store.game.winner === -1">
        <p>It's a draw!</p>
      </div>
      <div v-else>
        <p>{{ store.game.winner === 1 ? 'You win' : 'The bot wins' }}!</p>
      </div>
      <button @click="store.game.reset">Restart</button>
    </div>
  </div>
</template>

<script setup>
import {useTicTacToeStore} from "~/stores/useTicTacToeStore";
const store = useTicTacToeStore();
</script>