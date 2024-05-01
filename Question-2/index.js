// Algorithm
/*

Find the last index of 'a' and 'b' in the string S using lastIndexOf method.
If the last index of 'a' is greater than the last index of 'b', return 0, indicating that 'a' occurs after 'b'.
 return 1, indicating that 'a' occurs before or at the same position as 'b'.
*/

//The solution
function solution(S) {
    const lastIndexOfA = S.lastIndexOf('a');
    const lastIndexOfB = S.lastIndexOf('b');
    // If the last index of 'a' is greater than the last index of 'b', return 0
    
    if (lastIndexOfA > lastIndexOfB) {
        return 0;
    } else {
        return 1;
    }
}
// Test cases
console.log(solution("aabbb")); // Expected output: 1
console.log(solution("ba"));    // Expected output: 0
console.log(solution("aaa"));   // Expected output: 1
console.log(solution("b"));     // Expected output: 1
console.log(solution("abba"));  // Expected output: 0