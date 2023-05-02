<template>
  <audio :src="`/sounds/${sound}.wav`" controls ref="audioTag" @ended="ended"></audio>
  <button @click="playSound" :class="{ playing: isPlaying }">
    {{ sound }}
  </button>


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

const ended = () => {
  // buttonTag.value.classList.remove('playing');
  isPlaying.value = false;
}

</script>