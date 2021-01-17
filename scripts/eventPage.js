import track from './trackingCommand.js'

let contextMenuItem = {
    "id": "belpostTracking",
    "title": "Track code: %s",
    "contexts": ["selection"]
}

// Create context.
chrome.contextMenus.create(contextMenuItem);

// Add listener on click.
chrome.contextMenus.onClicked.addListener(handleData);

function handleData(clickData) {
    if (clickData.menuItemId == "belpostTracking"
        && clickData.selectionText)
        track(clickData.selectionText);
}
