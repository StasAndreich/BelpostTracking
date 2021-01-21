import validateTrackCode from './trackCodeValidator.js'

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