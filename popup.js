let button = document.getElementById("trackButton");
button.onclick = () => {
    let inputElement = document.getElementById("trackingNumber");
    let trackNumber = inputElement.value;
    
    if (validateTrackNumber(trackNumber))
        open("https://belpost.by/Otsleditotpravleniye?number=" + trackNumber);
}

function validateTrackNumber(number) {
    if (number.length == 13)
        return true;
}