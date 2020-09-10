/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// study it
const canCompleteCircuit = function (gas, cost) {
    if (!gas || !gas.length) {
        return -1
    }

    let currentSum = 0,
        currentSumLeastIndex = null,
        totalSum = 0
    for (let i = 0; i < gas.length; i++) {
        let diff = gas[i] - cost[i]

        if (currentSumLeastIndex === null) {
            currentSumLeastIndex = i
        }

        currentSum += diff
        totalSum += diff

        if (currentSum < 0) {
            currentSum = 0
            currentSumLeastIndex = null
        }
    }

    if (totalSum < 0) {
        return -1
    }

    return currentSumLeastIndex !== null ? currentSumLeastIndex : -1
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
