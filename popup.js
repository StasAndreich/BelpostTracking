const button = document.getElementById("trackButton");
const inputElement = document.getElementById("trackNumber");

button.onclick = () => {
    let trackNumber = inputElement.value;
    if (validateTrackNumber(trackNumber))
        open("https://belpost.by/Otsleditotpravleniye?number=" 
            + trackNumber);
}

function validateTrackNumber(number) {
    if (number.length == 13)
        return true;
    else return false;
}