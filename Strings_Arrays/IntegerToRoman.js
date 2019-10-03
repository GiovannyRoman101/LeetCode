/**
 * @param {number} num
 * @return {string}
 */

function intToRoman(num) {
    let result = ""
    let roman = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ]
    while (num !== 0) {
        for (let i = 0; i < roman.length; i++) {
            if (roman[i][1] <= num) {
                num -= roman[i][1]
                result += roman[i][0]
                break
            }
        }
    }
    return result
}

console.log(intToRoman(20))
