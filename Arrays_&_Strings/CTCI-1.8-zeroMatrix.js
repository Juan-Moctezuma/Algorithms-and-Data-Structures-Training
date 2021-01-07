/*
1.8 - Zero Matrix: Write an algorithm such that if an element in an MxN matrix is zero,
    it's entire columns are set to zero.

    * Input: nxn matrix
    * Output: zeroed matrix
    * Constraint: matrix stays in place, you must not create another matrix
    * Edge Cases: empty matrix

    * Time Complexity: O(MxN) - quadratic (since go over N x N ... or 2 for-loops)
    * Space Complexity: O(1) - constant (no new matrix being allocated)
*/

let zeroMatrix = (arr) => {
    let i, j; // Hoisting
    let N = arr.length;

    // Mark zero locations as true
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            if (arr[i][j] === 0) arr[i][j] = true;
        }
    }

    // Zero the rest of the columns and rows
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            if (arr[i][j] === true) {
                // Zero Row
                for (x = 0; x < N; x++) {
                    arr[i][x] = 0;
                }
                // Zero Col
                for (x = 0; x < N; x++) {
                    arr[x][j] = 0;
                }
            }
        }
    } return arr;
}

const arr3 = [[4,1,3],[2,-4,0],[5,9,2]];
console.log(zeroMatrix(arr3))
