/*
1.3 - URLify: Write a method to replace all spaces in a string w/ '%20'.
    You may assume that the string has sufficient space at the end to hold 
    additional characters, & that you are given the "true" length of the string.

    * Input: 'Mr John Smith '
    * Output: 'Mr%20John%20Smith'
    * Constraint: NA
    * Edge Case: empty strings or white space within string
    * Extra: May use built-in functions - trim & replace

    * Time Complexity: Linear - O(n) since every element gets checked
    * Space Complexity: Constant - O(1) since nothing gets stored
*/

let urlReplace = (str1, trueLength) => {
    let i, spaces; // Hoisting
    let len = str1.length;
    let output = ''; // Initialize empty string
    let chars_count = 0;

    for (i = 0; i < len; i++) {
        character = str1[i];
        if (character !== ' ') {
            chars_count++;
        }
    }

    spaces = trueLength - chars_count;

    for (i = 0; i < len; i++) {
        character =  str1[i];
        if (character === ' ' && spaces > 0) {
            output += '%20';
            spaces--;
        } else if (character !== ' ') {
            output += character;
        }
    }
    // In case there is still spaces left...
    while (spaces > 0) {
        output += '%20';
        spaces--;
    }

    return output;
}

const sentence1 = 'Mr John Smith      ';
console.log(urlReplace(sentence1, 13));