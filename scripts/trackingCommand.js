// Tracks code parameter on a target service.
export default function track(trackCode) {

    // Validate code.
    if(validateTrackCode(trackCode))
    {
        // Redirect to service.
        openPostSite(trackCode);
    }
}

function openPostSite(trackCode) {
    open("https://belpost.by/Otsleditotpravleniye?number=" 
        + trackCode);
}

function validateTrackCode(trackCode) {
    if (trackCode.length == 13
        && containsNumber(trackCode))
        return true;
    else return false;
}

function containsNumber(trackCode) {
    return /\d/.test(trackCode);
}