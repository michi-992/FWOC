import {createAudioElement, createButton} from "./html.js";

const sounds = ['clap', 'hihat', 'kick', 'perc', 'snare', 'tom'];

// 1. Render Audio Tags on the screen

// const audios = {};
sounds.forEach((sound) => {
    // const audio = document.createElement('audio');
    // audio.setAttribute('src', `/sounds/${sound}.wav`);
    // audio.setAttribute('controls', 'true');
    // audio.setAttribute('preload', 'auto')
    // audio.setAttribute('id', sound);
    // audios[sound] = audio;

    // const button = document.createElement('button');
    // button.textContent = sound;

    // button.addEventListener('click', () => {
        // document.getElementById(sound).play();
        // button.classList.add('playing');
        // audios[sound].play();
    //     audio.play();
    // });

    const audio = createAudioElement(sound);
    const button = createButton(sound);

    button.addEventListener('click', () => {
        button.classList.add('playing');
        audio.play();
    });

    audio.addEventListener('ended', () => {
        button.classList.remove('playing');
    });

    document.getElementById('audios').append(audio);
    document.getElementById('buttons').append(button);
})

// 3. Connect a button to an audio tag to play a sound

// 3.1. set a click event on a button
// 3.2. you need a reference on the click call 'audio.play()' on the element
// 3.3. based on the click you call 'audio.play() on the element