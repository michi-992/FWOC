<template>
  <tr>
    <th>
      <audio :src="`./sounds/${sound}.wav`" :id="sound" controls ref="audioTag" @ended="audioTagEnded"></audio>
    </th>
    <th>
      <button @click="playSound" :class="{'bg-teal-100 text-teal-700': isPlaying, 'playing': isPlaying}" class="soundboard-btn">{{ sound }}</button>
    </th>
  </tr>
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