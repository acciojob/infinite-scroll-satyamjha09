const list = document.getElementById('infi-list');

// Function to add list items
function addListItems(count) {
  const currentItemCount = list.children.length;
  for (let i = 1; i <= count; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${currentItemCount + i}`;
    list.appendChild(listItem);
  }
}

// Add initial 10 items
addListItems(10);

// Infinite scroll functionality
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  // Check if user has scrolled to the bottom
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    addListItems(2); // Add 2 more items
  }
});
