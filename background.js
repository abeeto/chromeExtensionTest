chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters); // searchParams - interface to interact with URLs
    //send message to contentScript that new video has been opened
    //and send the unique video id from the url to contentScript
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"), //gets everything after "v=" in the url
    })
  }
})