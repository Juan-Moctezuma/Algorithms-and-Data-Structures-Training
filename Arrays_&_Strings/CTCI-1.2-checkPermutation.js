/*
1.2 - Check Permutation: Given 2 strings, write a method to decide if one is a permutation of the other.

    * Input: 2 strings
    * Output: Boolean
    * Constraint: NA
    * Edge Case: empty strings or strings with different lenght

    * Time Complexity: Linear - O(2n) - 2n since you have 2 for loops but O(n) still valid
    * Space Complexity: Linear - O(n) - due to for-loops returning boolean
*/

let checkPermutation = (str1, str2) => {
    let i, character; // Hoisting
    let hash = {}; // Hash table
    let s1 = str1.length;
    let s2 = str2.length;

    if (s1 !== s2) return false; 

    // In this for-loop we are storing hash with str1's values
    for (i = 0; i < s1; i++) {
        character = str1[i];
        // If character already in hash... then count, otherwise store as one
        if (hash[character]) {
            hash[character]++
        } else {
            hash[character] = 1;
        }
    }

    // In this for-loop we are looking at the hash
    // if str2's values coincide with str1's ... then permutation
    for (i = 0; i < s2; i++) {
        character = str2[i];
        // if in hash and not equal zero (take into account case after we subtract... it might be 0)
        if (hash[character] && hash[character] !== 0) {
            hash[character]--;
        } else {
            return false;
        }
    }

    return true;
};

const word1 = "abba";
const word2 = "baba";
console.log(checkPermutation(word1, word2));