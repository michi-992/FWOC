<template>
  <audio :src="`./sounds/${sound}.wav`" :id="sound" controls ref="audioTag" @ended="audioTagEnded"></audio>
  <button @click="playSound" :class="{ playing: isPlaying}">{{ sound }}</button>

</template>

<script setup>
import { ref } from 'vue';
const audioTag = ref();
// const buttonTag = ref();
const isPlaying = ref(false);
const props = defineProps(['sound']);

const playSound = () => {
  // buttonTag.value.classList.add('playing');
  isPlaying.value = true;
  audioTag.value.play();
}

const audioTagEnded = () => {
  // buttonTag.value.classList.remove('playing');
  isPlaying.value = false;
}

</script>