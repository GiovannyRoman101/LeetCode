/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let combination = []
    let str = ""
    for (let i = 1; i <= n; i++) {
        str += i
    }
    function dfs(string, start, end) {
        if (start === end) {
            combination.push([...string])
        } else {
            for (let i = start; i <= end; i++) {
                let temp = string[i]
                string[i] = string[start]
                string[start] = temp
                dfs(string, start + 1, end)
                temp = string[i]
                string[i] = string[start]
                string[start] = temp
            }
        }
    }
    dfs(str, 0, str.length - 1)
    return combination[k - 1]
}

console.log(getPermutation(3,3))