<template>
  <h2>Soundboard</h2>
  <div>
    <AudioButton v-for="sound in sounds" :sound="sound"/>
  </div>
</template>

<script setup>
import AudioButton from '../components/AudioButton.vue'

const sounds = ['clap', 'hihat', 'kick', 'perc', 'snare', 'tom'];
</script>