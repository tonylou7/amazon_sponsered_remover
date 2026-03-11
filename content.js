/**
 * Function to find and hide sponsored items
 */
const hideSponsoredItems = () => {
  // Amazon search results are usually within .s-result-item
  const items = document.querySelectorAll('.s-result-item');

  items.forEach(item => {
    // Check for common "Sponsored" indicators in the HTML
    const isSponsored = item.innerHTML.toLowerCase().includes('sponsored') || 
                        item.querySelector('.puis-sponsored-label-text') ||
                        item.getAttribute('data-component-type') === 'sp-ad';

    if (isSponsored) {
      // Instead of removing, we hide it to maintain page stability
      item.style.display = 'none';
    }
  });
};

// Run immediately on page load
hideSponsoredItems();

// Observe the page for changes (like infinite scrolling)
const observer = new MutationObserver((mutations) => {
  hideSponsoredItems();
});

// Start observing the body for added nodes
observer.observe(document.body, {
  childList: true,
  subtree: true
});
