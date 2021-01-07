/* 
1.5 - One Way: There are three types of edits that can be performed on strings: 
    - insert a character,
    - remove a character, 
    - or replace a character. 
    Given two strings, write a function to check if they are one edit (or zero edits) away.
    EXAMPLE
    pale, ple -> true
    pales, pale -> true
    pale, bale -> true
    pale, bake -> false

    * Input: 2 strings
    * Output: Boolean
    * Constraint: NA
    * Edge Case: empty strings

    * Time Complexity: Linear - O(n) since every element gets checked in 1 for-loop
    * Space Complexity: Constant - O(1) since DS won't grow
     
    * NOTE: if insert, then s1's current char should match s2's next char
    * NOTE: if remove, then s1's next char should match s2's current char
    * NOTE: if replace, then s1's next char should match s2's next char

    * NOTE: There's one edit maximum
    * NOTE: If the differemce in lengths is greater than the no. of max edit, then return false
    * NOTE: Loops iterate through strings at the same time, checking for the difference in length
    * NOTE: If difference in length is found, but edits dropped below zero, return false
    * NOTE: when for loop is done, return true
*/ 

let checkEdit = (str1, str2) => {
    let i, j;
    let edits = 1;
    let maxLen = Math.max(str1.length, str2.length);
    let diff = Math.abs(str1.length - str2.length);

    if (diff > edits) return false;

    for (i = 0, j = 0; i < maxLen || j < maxLen; i++, j++) {
        let ch1 = str1[i];
        let ch2 = str2[j];
        if (ch1 !== ch2) {
            edits--; // Subtract from the number of edits that we are allowed
            if (edits < 0) return false;
            if (ch1 === str2[j + 1]) j++; // Inserted
            else if (str1[i + 1] === ch2) i++; // Removed
        }
    } return true;
};

console.log(
    checkEdit('pale', 'ple') === true, //removed
    checkEdit('pales', 'pale') === true, //inserted
    checkEdit('pale', 'bale') === true, //replaced
    checkEdit('pake', 'rave') === true
);