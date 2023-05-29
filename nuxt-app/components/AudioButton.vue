<template>
  <div class="flex flex-row gap-3 place-content-center">
    <audio :src="`./sounds/${sound}.wav`" :id="sound" controls ref="audioTag" @ended="audioTagEnded"></audio>
    <button @click="playSound" :class="{ playing: isPlaying}">{{ sound }}</button>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const audioTag = ref();
const isPlaying = ref(false);
const props = defineProps(['sound']);

const playSound = () => {
  isPlaying.value = true;
  audioTag.value.play();
}

const audioTagEnded = () => {
  isPlaying.value = false;
}

</script>