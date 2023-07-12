var putMarbles = function(weights, k) {
    const costs = []
for (let i = 0; i < weights.length - 1; i++) {
    costs.push(weights[i] + weights[i+1])
}
costs.sort((a, b) => a - b)

let result = 0

for (let i = 0; i < k - 1; i++) {
    result += costs[costs.length - 1 - i] - costs[i]
}

return result

};