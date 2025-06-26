function calculateMinCost() {
  const input = document.getElementById('ropeInput').value;
  const arr = input.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x));

  if (arr.length < 2) {
    document.getElementById('result').innerText = "Please enter at least two valid rope lengths.";
    return;
  }

  const minCost = getMinCost(arr);
  document.getElementById('result').innerText = `Minimum cost to connect ropes: ${minCost}`;
}

function getMinCost(arr) {
  const heap = [...arr];
  heap.sort((a, b) => a - b);

  let totalCost = 0;

  while (heap.length > 1) {
    const first = heap.shift();
    const second = heap.shift();
    const cost = first + second;
    totalCost += cost;

    // Insert back and keep it sorted
    const index = heap.findIndex(x => x > cost);
    if (index === -1) {
      heap.push(cost);
    } else {
      heap.splice(index, 0, cost);
    }
  }

  return totalCost;
}
