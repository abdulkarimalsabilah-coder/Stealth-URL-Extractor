chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
    }).then(() => {
        console.log("Script executed successfully!");
    }).catch(error => console.log("Error executing script:", error));
});
