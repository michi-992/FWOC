<template>

  <h2>Guesser Game</h2>

  <div class="w-10/12 m-auto flex-col text-center">
    <div class="grid grid-cols-2 text-center">
      <div>
        <h3>Current Score: {{ storeA.score }}</h3>
        <button @click="storeA.resetScore">Reset Score</button>
      </div>

      <div>
        <h3>Remaining Cards: {{ storeA.remainingNrCards }}</h3>
        <button @click="storeA.getNewDeck">New Deck</button>
      </div>
    </div>


    <div>
      <h3>Current Guess: {{ storeA.guess }}</h3>

      <div>
        <button @click="() => (storeA.setGuess('red'))">Guess Red</button>
        <button @click="() => (storeA.setGuess('black'))">Guess Black</button>
      </div>

      <button @click="storeA.drawCard" :disabled="storeA.guess === undefined || storeA.remainingNrCards <= 0">Draw Card</button>
      <div v-if="storeA.card">
        <img :src="storeA.card.image" class="m-auto">
      </div>
    </div>

  </div>

</template>

<script setup>
import { useGuesserStore } from "~/stores/useGuesserStore";
const storeA = useGuesserStore();
</script>
