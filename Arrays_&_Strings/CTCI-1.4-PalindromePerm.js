/*
1.4 - Palindrome Permutation: Given a string, write a function to check if
   it is a permutation of a palindrome. The palindrome is a word or phrase that
   is the same forwards & backwards.

    * NOTE: if even string there must be two of every char
    * NOTE: if odd string there must be only one unique char
    * NOTE: White space gets skipped
   
    * Input: 'taco cat'
    * Output: Boolean
    * Constraint: NA
    * Edge Case: empty strings or white space within string
    * Extra: Need Hash table... it is essentially a 
        way to store a key value pairing where insertion, retrieval, and removal 
        can run in constant time.
        Hash will get checked at the end: ODD - 1 key left inside, EVEN - 0 keys left in hash

    * Time Complexity: Linear - O(n) since every element gets checked in 1 for-loop
    * Space Complexity: Linear - O(n) since one by one gets stored in hash table
*/

let palindromePerm = str => {
    let hash = {};
    let len = str.length
    let charCount = 0;
  
    for (let i = 0; i < len; i++) {
        let ch = str[i];
        if (ch === ' ') {
            continue;
        }
        if (hash[ch]) {
            delete hash[ch];
        } else {
            hash[ch] = true;
        }
        charCount++;
    }

    if (charCount % 2 === 0) {
        return Object.keys(hash).length === 0;
    } else {
        return Object.keys(hash).length === 1;
    }
};
  
console.log(
    palindromePerm('taco catbgrg') === true,
    palindromePerm('atco cat') === true,
    palindromePerm(' rac  ecar rara ') === true,
    palindromePerm('juan es el mejor') === false,
    palindromePerm('aabbc') === true,
    palindromePerm('aaaabbbbcc') === true,
    palindromePerm('aabc') === false,
    palindromePerm('') === true
);