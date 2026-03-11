const checkbox = document.getElementById('toggleFilter');

// Load the current saved state
chrome.storage.local.get(['enabled'], (result) => {
  checkbox.checked = result.enabled !== false; // Default to true
});

// Save the state when clicked and reload the page to apply
checkbox.addEventListener('change', () => {
  chrome.storage.local.set({ enabled: checkbox.checked }, () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.reload(tabs[0].id);
    });
  });
});
