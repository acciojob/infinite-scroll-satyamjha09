const list = document.getElementById("infi-list");


function addListItems(count) {
	const currentItemCount = list.children.length;
	for(let i = 0; i <= count; i++) {
		const listItems = document.createElement('li');
		listItems.textContent = `Item  ${currentItemCount + 1}`;
		list.appendChild(list);
	}
}

addListItems(10);

window.addEventListener('scroll' , () => {
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  // Check if user has scrolled to the bottom
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    addListItems(2); // Add 2 more items
  }
})

