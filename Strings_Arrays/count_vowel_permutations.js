/**
 * @param {number} n
 * @return {number}
 */
// TODO: can be optimized can make a formula
var countVowelPermutation = function(n) {
    let vowels = ["a", "e", "i", "o", "u"]
    if (n === 0) {
        return 0
    }

    let result = []
    function premute(curr = "", vownum = 0) {
        if (vownum === n) {
            if (curr !== "") {
                result.push(curr)
            }
        } else if (vownum < n) {
            for (let i = 0; i < vowels.length; i++) {
                if (curr === "" || rules(curr[curr.length - 1], vowels[i])) {
                    premute(curr + vowels[i], vownum + 1)
                }
            }
        }
    }
    premute()
    console.log(result)
    return result.length
}

function rules(fletter, sletter = "") {
    if (sletter === "") {
        return true
    }
    if (fletter === "a" && sletter === "e") {
        return true
    }
    if (fletter === "e" && (sletter === "a" || sletter === "i")) {
        return true
    }
    if (fletter === "i" && sletter !== "i") {
        return true
    }
    if (fletter === "o" && (sletter === "i" || sletter === "u")) {
        return true
    }
    if (fletter === "u" && sletter === "a") {
        return true
    }
    return false
}

console.log(countVowelPermutation(5))
