<template>
  <main>
    <h2>TicTacToe Game</h2>
    <div class="game">
      <div>
        <!-- Display current score and provide a button to reset the score -->
        <div class="gameStat">
          <h3>Current score: {{ store.game.score }} / {{ store.game.rounds }}</h3>
          <button @click="store.game.resetScore">Reset Score</button>
        </div>

        <!-- Show the game result if there is a winner or a draw -->
        <div v-if="store.game.winner !== null">
          <div v-if="store.game.winner === 3">
            <h3>It's a draw!</h3>
          </div>
          <div v-else>
            <h3>{{ store.game.winner === 1 ? 'You win' : 'The bot wins' }}!</h3>
          </div>
          <!-- Provide a button to restart the game -->
          <button @click="store.game.resetBoard">Restart</button>
        </div>
      </div>

      <!-- Render the TicTacToe grid -->
      <div class="tictactoeGrid">
        <!-- Iterate over each cell in the game board -->
        <div v-for="(cell, index) in store.game.board" :key="index">
          <!-- Allow the player to set a cell by clicking the button -->
          <!-- Disable the button if the cell is already filled, there is a winner, or it's the bot's turn -->
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

// Initialize the store for the TicTacToe game
const store = useTicTacToeStore();
</script>