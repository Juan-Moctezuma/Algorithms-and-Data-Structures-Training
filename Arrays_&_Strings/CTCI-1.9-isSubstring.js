/*
1.9 - isSubstring: Assume you have a method isSubstring which checks if one word is a substring of 
    another. Given 2 strings, s1 and s2, write code to check if s2 is a rotation of s1 using only
    one call to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat").

    * Input: 2 strings
    * Output: boolean
    * Constraint: NA
    * Edge Cases: empty strings

    * Time Complexity: O(n) - linear since it checks value by value
    * Space Complexity: O(1) - constant (no new matrix being allocated)
*/

// When creating a method (isSubstring) that will be placed inside an arrow f(x)... remove brackets 
let isSubstring = (concatStr, s2) => 
    concatStr.includes(s2); // Do not put brackets

let isRotation = (s1, s2) => {
    let m = s1.length;
    let n = s2.length;

    if (m !== n || m === 0) return false;

    let concatenatedStr = s1 + s1;
    return isSubstring(concatenatedStr, s2);
}

console.log(isRotation('waterbo','terbowa'));
