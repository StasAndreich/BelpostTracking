import track from './trackingCommand.js'

const button = document.getElementById("trackButton");
const inputElement = document.getElementById("trackNumber");

// Track code from input.
button.onclick = () => {
    let trackCode = inputElement.value;
    track(trackCode);
}