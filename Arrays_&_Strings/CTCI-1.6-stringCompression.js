/*
1.6 - String Compression: 
    Implement a method to perform basic string compression using the counts of repeated characters. 
    For example, the string aabcccccaaa would become a2b1c5a3. 
    If the "compressed" string would not become smaller than the original string, 
    your method should return the original string. You can assume the string 
    has only uppercase and lowercase letters (a - z). 

    * Input: one string
    * Output: compressed string
    * Constraints: NA
    * Edge cases: Empty String
     
    * Time Complexity: Linear - O(n) since every element gets checked in 1 for-loop
    * Space Complexity: Constant - O(1) since DS won't grow.. nothing gets stored
*/

let stringCompression = (str1) => {
    let i;
    let len = str1.length;
    let outcome = '';
    let count = 1;
  
    for (i = 0; i < len; i++) {
        let current = str1[i];
        let next = str1[i + 1];
        if (current === next) {
            count++;
        } else {
            outcome += current + String(count);
            count = 1; // Count resets to one
        }
    }
    return outcome.length < len ? outcome : str1;
};
  
console.log(
    stringCompression('aabcccccaaa') === 'a2b1c5a3',
    stringCompression('aa') === 'aa',
    stringCompression('aaAAaa') === 'aaAAaa',
    stringCompression('aaaAAaa') === 'a3A2a2',
    stringCompression('') === ''
);