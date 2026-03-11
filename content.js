const hideSponsoredItems = () => {
  chrome.storage.local.get(['enabled'], (result) => {
    if (result.enabled === false) return; // Do nothing if toggled off

    const items = document.querySelectorAll('.s-result-item');
    items.forEach(item => {
      const isSponsored = item.innerHTML.toLowerCase().includes('sponsored') || 
                          item.querySelector('.puis-sponsored-label-text');
      if (isSponsored) {
        item.style.display = 'none';
      }
    });
  });
};

hideSponsoredItems();
const observer = new MutationObserver(() => hideSponsoredItems());
observer.observe(document.body, { childList: true, subtree: true });
