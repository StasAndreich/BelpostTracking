import track from './trackingCommand.js'
import validateTrackCode from './trackCodeValidator.js'

const button = document.getElementById("trackButton");
const inputElement = document.getElementById("trackNumber");

// Disable the button by default.
button.setAttribute('disabled', null);

// Handle if button can be enabled
// in case the validation passed.
inputElement.oninput = () => {
    if(validateTrackCode(inputElement.value))
        button.removeAttribute('disabled', null);
    else
        button.setAttribute('disabled', null);
}

// Track code from input.
button.onclick = () => {
    let trackCode = inputElement.value;
    track(trackCode);
}