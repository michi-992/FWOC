// 1. Render Audio Tags on the screen
const sounds = ['clap', 'hihat', 'kick', 'perc', 'snare', 'tom'];

sounds.forEach((sound) => {
    const audio = document.createElement('audio');
    audio.setAttribute('src', `/sounds/${sound}.wav`);
    audio.setAttribute('controls', true);

    document.getElementById('audios').append(audio);
})

// 2. render a button for each audio tag
sounds.forEach((sound) => {
    const button = document.createElement('button');
    button.textContent = sound;

    document.getElementById('buttons').append(button);
})
// 3. Connect a button to an audio tag to play a sound

// 1. set a click event on a button
// 2. you need a reference on the click call 'audio.play()' on the element
// 3. based on the click you call 'audio.play() on the element