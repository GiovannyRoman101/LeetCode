// Alice and Bob take turns playing a game, with Alice starting first.

// Initially, there is a number N on the chalkboard. On each player's turn,
// that player makes a move consisting of:

// Choosing any x with 0 < x < N and N % x == 0.
// Replacing the number N on the chalkboard with N - x.
// Also, if a player cannot make a move, they lose the game.

// Return True if and only if Alice wins the game, assuming both players play optimally.

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N, arr = []) {
    if (arr[N] !== undefined) {
        return arr[N]
    }
    for (let i = 1; i < N; i++) {
        if (N % i === 0) {
            if (arr[N - i] !== undefined && arr[N - i] === false) {
                return true
            } else if (arr[N - i] === undefined) {
                let result = divisorGame(arr, N - i)
                arr[N - i] = result
                if (!result) {
                    return true
                }
            }
        }
    }
    return false
}

console.log(divisorGame(3))
