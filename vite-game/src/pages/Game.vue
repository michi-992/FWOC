<template>

  <h1>Guesser Game</h1>

  <div id="gameField">
    <div id="scoreAndDeck">
      <div>
      <h2>Current Score: {{ score }}</h2>
      <button @click="resetScore" class="genericButton">Reset Score</button>
      </div>
      <div>
      <h2>Remaining Cards: {{ remainingNrCards }}</h2>
      <button @click="getNewDeck" class="genericButton">New Deck</button>
      </div>
    </div>

    <h2>Current Guess: {{ guess }}</h2>

    <div>
      <button @click="() => (guess = 'red')" class="inputButton">Guess Red</button>
      <button @click="() => (guess = 'black')" class="inputButton">Guess Black</button>
    </div>
    <button @click="drawCard" :disabled="guess === undefined || remainingNrCards <= 0" class="genericButton">Draw Card
    </button>
    <div v-if="card" class="card">
      <Card :image="card.image"></Card>
    </div>
    <div v-else class="card">
      <Card></Card>
    </div>
  </div>

</template>
<script setup>

import {ref, onMounted} from 'vue'
import Card from "../components/Card.vue";

const deckId = ref();
const remainingNrCards = ref();
const card = ref();
const guess = ref();
const score = ref(0);

onMounted(() => {
  getNewDeck();
})

async function getNewDeck() {
  const API = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  const data = await fetch(API).then(res => res.json())
  if (data.success) {
    deckId.value = data.deck_id;
    remainingNrCards.value = data.remaining;
    console.log(data);
  }
}

async function drawCard() {
  if (remainingNrCards.value <= 0) {
    return;
  }

  const API = `https://www.deckofcardsapi.com/api/deck/${deckId.value}/draw/?count=1`
  const data = await fetch(API).then(res => res.json())
  if (data.success) {
    card.value = data.cards[0];
    remainingNrCards.value--;
    console.log(data);
    evaluateGuess();
  }
}

function evaluateGuess() {
  const cardColor = ["HEARTS", "DIAMONDS",].includes(card.value.suit) ? "red" : "black";


  if (cardColor === guess.value) {
    score.value++;
  }
}

function resetScore() {
  score.value = 0;
}


</script>
