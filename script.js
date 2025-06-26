function mincost(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  const heap = [...arr].sort((a, b) => a - b);
  let totalCost = 0;

  while (heap.length > 1) {
    const first = heap.shift();
    const second = heap.shift();
    const cost = first + second;
    totalCost += cost;

    // Insert the cost back in sorted position
    const index = heap.findIndex(x => x > cost);
    if (index === -1) heap.push(cost);
    else heap.splice(index, 0, cost);
  }

  return totalCost;
}

function calculateMinCost() {
  const input = document.getElementById('ropeInput').value;
  const arr = input.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x) && x > 0);

  if (arr.length < 2) {
    document.getElementById('result').innerText = 'Please enter at least two valid rope lengths.';
    return;
  }

  const cost = mincost(arr);
  document.getElementById('result').innerText = `Minimum cost to connect ropes: ${cost}`;
}
