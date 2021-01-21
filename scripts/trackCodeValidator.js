// Validates basic requirements of a track code.
// Length == 13.
// Contains numbers and letters.
export default function validateTrackCode(trackCode) {
    if (trackCode.length == 13
        && containsNumber(trackCode))
        return true;
    else return false;
}

function containsNumber(trackCode) {
    return /\d/.test(trackCode);
}