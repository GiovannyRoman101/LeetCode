// The string "PAYPALISHIRING" is written in a zigzag pattern on a given 
// number of rows like this: (you may want to display this pattern in a 
// fixed font for better legibility)

/**
 * original: PAYPALISHIRING
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * expected: PAHNAPLSIIGYIR
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    let arr = []
    let goingdown = false
    if(numRows === 1){
        return s
    }
    for(let i = 0; i < numRows ; i++){
        arr[i] = ''
    }
    let ind = 0
    for(let i = 0 ; i < s.length; i++){
        if(i % (numRows -1) === 0 ){
            goingdown = !goingdown
        }
        arr[ind] += s[i]
        if(goingdown){
            ind++
        } else {
            ind--
        }
    }
    return ''.concat(...arr)

}

let s = 'PAYPALISHIRING'
console.log(convert(s,4))
