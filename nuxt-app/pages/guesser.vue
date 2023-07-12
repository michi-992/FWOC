<template>
  <main>
    <h2>Guesser Game</h2>

    <div class="game">
      <div>
        <div class="gameStat">
          <h3>Current Score: {{ store.score }} / {{ store.rounds }}</h3>
          <button @click="store.resetScore">Reset Score</button>
        </div>

        <div>
          <h3>Remaining Cards: {{ store.remainingNrCards }}</h3>
          <button @click="store.getNewDeck">New Deck</button>
        </div>
      </div>


      <div class="guesserInput">
        <h3>Current Guess: {{ store.guess }}</h3>

        <div>
          <button @click="() => (store.setGuess('red'))">Guess Red</button>
          <button @click="() => (store.setGuess('black'))">Guess Black</button>
        </div>

        <button @click="store.drawCard" :disabled="store.guess === undefined || store.remainingNrCards <= 0">
          Draw Card
        </button>
        <div v-if="store.card">
          <img :src="store.card.image" class="m-auto">
        </div>
      </div>

    </div>
  </main>
</template>

<script setup>
import {useGuesserStore} from "~/stores/useGuesserStore";
const store = useGuesserStore();
</script>
