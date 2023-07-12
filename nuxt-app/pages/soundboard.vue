<template>
  <main>
    <h2>Soundboard</h2>
    <table>
      <AudioButton v-for="sound in sounds" :sound="sound"/>
    </table>
  </main>
</template>

<script setup>
import AudioButton from '../components/AudioButton.vue'
const sounds = ['clap', 'hihat', 'kick', 'perc', 'snare', 'tom'];
</script>