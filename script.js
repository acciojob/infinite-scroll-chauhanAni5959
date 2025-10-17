const infiList = document.getElementById('infi-list');
let count = 1;

// Function to add n items to the list
function addItems(n) {
  for (let i = 0; i < n; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${count}`;
    infiList.appendChild(li);
    count += 1;
  }
}

// Add initial 10 items
addItems(10);

// Infinite scroll logic on the ol itself
infiList.addEventListener('scroll', function () {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight - 2) {
    addItems(2);
  }
});
