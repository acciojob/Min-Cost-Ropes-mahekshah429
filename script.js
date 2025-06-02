function mincost(arr) {
  if (arr.length <= 1) return 0;

  arr.sort((a, b) => a - b);
  let totalCost = 0;

  while (arr.length > 1) {
    const first = arr.shift();
    const second = arr.shift();

    const cost = first + second;
    totalCost += cost;

    // Insert back the sum maintaining sorted order
    let inserted = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= cost) {
        arr.splice(i, 0, cost);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      arr.push(cost);
    }
  }
  return totalCost;
}

document.getElementById("calcBtn").addEventListener("click", () => {
  const input = document.getElementById("ropesInput").value;
  const output = document.getElementById("output");

  if (!input.trim()) {
    output.textContent = "Please enter rope lengths.";
    return;
  }

  const arr = input
    .split(",")
    .map(x => parseInt(x.trim()))
    .filter(x => !isNaN(x) && x > 0);

  if (arr.length === 0) {
    output.textContent = "Enter valid positive numbers only.";
    return;
  }

  const result = mincost(arr);
  output.textContent = `Minimum cost: ${result}`;
});
