<template>
  <h1>Soundboard</h1>
  <div>
    <AudioButton v-for="sound in sounds" :sound="sound"/>

    <!--    <audio :src="`./sounds/${sound}.wav`" :id="sound" controls></audio>-->
    <!--    <button>{{ sound }}</button>-->

  </div>
</template>

<script setup>
import AudioButton from '../components/AudioButton.vue'

const sounds = ['clap', 'hihat', 'kick', 'perc', 'snare', 'tom'];

// 3rd approach
// const message = 'Hello Soundboard from Setup';
// const greeter = () => {
//   alert('hello');
// };

// another/2nd approach
// export default {
//   setup() {
//     const message = 'Hello Soundboard from Setup';
//
//     return {
//       message,
//     }
//   }

// first/old approach
// data() {
//   return {
//     message: 'Hello Soundboard',
//   };
// },
// };
</script>