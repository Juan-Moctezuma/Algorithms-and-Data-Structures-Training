/*
1.7 - Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
    write a method to rotate the image by 90 degrees. Can you do this in place? 

    * Input: nxn matrix
    * Output: rotated matrix - 90 deg, clockwise or counter-clockwise
    * Constraint: rotate matrix in place, you must not create another matrix
    * Edge Cases: empty matrix, even and odd values for n

    * time complexity: O(n^2) - quadratic (since go over N x N ... or 2 for-loops)
    * Space Complexity: O(1) - constant (no new matrix being allocated)
*/

let rotateMatrixClockWise = (arr) => {
    let i, j;
    let N = arr.length;
    // Inner layer - for loop will traverse or iterate diagonally... so HALF matrix's bound is n-size * 1/2
    // Outer layer - for loop goes diagonally so j = i (because for example (0,0),(1,1))... (N - 1) - i is outer bound
    for(i = 0; i < N / 2; i++) { 
        for(j = i; j < N - 1 - i; j++) { // Since Outer layer loop goes diagonally j = i (example (0,0),(1,1) as loops)

        //Store the TOP left value and start the rotation from here
        let temp = arr[i][j];

        // Move values from LEFT bottom corner to TOP left corner
        arr[i][j] = arr[N - 1 - j][i];

        // Move values from BOTTOM right corner to LEFT bottom corner 
        arr[N - 1 - j][i] = arr[N - 1 - i][N - 1 - j];

        // Move values from RIGHT top corner to BOTTOM right corner
        arr[N - 1 - i][N - 1 - j] = arr[j][N - 1 - i];

        // Move values from TOP left corner to RIGHT corner 
        arr[j][N - 1 - i] = temp;
        }
    }
    return arr;
}

const arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(rotateMatrixClockWise(arr));

/* Counter ClockWise */
let rotateMatrixAntiClockWise = (arr) => {
    let i, j;
    let N = arr.length;

    for(i = 0; i < N / 2; i++){
        for(j = i; j < N - 1 - i; j++){

        // Start rotation from TOP left corner
        let temp = arr[i][j];
      
        // Move values from RIGHT top corner to TOP left corner 
        arr[i][j] = arr[j][N - 1 - i];

        // Move values from BOTTOM right corner to RIGHT top corner 
        arr[j][N - 1 - i] = arr[N - 1 - i][N - 1 - j];

        // Move values from LEFT bottom corner to BOTTOM right corner 
        arr[N - 1 - i][N - 1 - j] = arr[N - 1 - j][i];

        // Move values from TOP left corner to LEFT bottom corner 
        arr[N - 1 - j][i] = temp;
        }
    }
    return arr;
}

const arr2 = [[1,2,3],[5,6,7],[9,10,11]];
console.log(rotateMatrixAntiClockWise(arr2));