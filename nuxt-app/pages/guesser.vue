<template>

  <h2>Guesser Game</h2>

  <div class="w-10/12 m-auto flex-col text-center">
    <div class="grid grid-cols-2 text-center">
      <div>
        <h3>Current Score: {{ score }}</h3>
        <button @click="resetScore">Reset Score</button>
      </div>

      <div>
        <h3>Remaining Cards: {{ remainingNrCards }}</h3>
        <button @click="getNewDeck">New Deck</button>
      </div>
    </div>


    <div>
      <h3>Current Guess: {{ guess }}</h3>

      <div>
        <button @click="() => (guess = 'red')">Guess Red</button>
        <button @click="() => (guess = 'black')">Guess Black</button>
      </div>

      <button @click="drawCard" :disabled="guess === undefined || remainingNrCards <= 0">Draw Card</button>
      <div v-if="card">
        <img :src="card.image" class="m-auto">
      </div>
    </div>


  </div>

</template>
<script setup>

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
