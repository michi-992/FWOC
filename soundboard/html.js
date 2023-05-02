export function createAudioElement(sound) {
    const audio = document.createElement('audio');
    audio.setAttribute('src', `./sounds/${sound}.wav`);
    audio.setAttribute('controls', 'true');
    audio.setAttribute('preload', 'auto');

    return audio;
}

export function createButton(sound) {
    const button = document.createElement('button');
    button.textContent = sound;

    return button;
}