/*
1.1 - Is Unique: Implement an algorithm to determine if a string has all unique characters.
      What if you cannot use additional data structures.

    * Input: String
    * Output: Boolean
    * Constraint: Can't use extra Data Structures (DS)
    * Edge Case: empty strings
    * Extra: Need Hash Table

    * Time Complexity: Linear - O(n) since you only have 1 for-loop that checks every element on string
    * Space Complexity: Linear - O(n) since all characters stored one by one
*/

let isUnique = str => { // '(str) => ' with parenthesis is ok too
    let i, character; // Hoisting
    let len = str.length; // ASCII Characters are 128
    let obj = {}; // In JS all objects are Hash Tables

    if (len > 127) return false;
    
    for (i = 0; i < len; ++i) {
        character = str[i];
        // If character already in obj then false since not unique
        if(obj[character]) return false; else obj[character] = true;
    } return true;  
}

const anyWord = 'abcd';
const otherWord = 'aabbccdd';
console.log(isUnique(anyWord));
console.log(isUnique(otherWord));