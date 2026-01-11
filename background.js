// Handle keyboard shortcuts
chrome.commands.onCommand.addListener((command) => {
  if (command === "open-clamp") {
    chrome.action.openPopup();
  }
  
  if (command === "copy-and-close") {
    chrome.runtime.sendMessage({ action: "COPY_AND_CLOSE" });
  }
  
  if (command === "switch-radio") {
    chrome.runtime.sendMessage({ action: "SWITCH_RADIO" });
  }
});

// Listen for messages (for future expansion)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Handle any background messages here
  return true;
});