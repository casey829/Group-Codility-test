//creating the algorithm
/*

1. Iterate over each string in the array S.
    a. For each string, iterate over each character.
    b. Store the current character's position along with its string index in a nested array.
2. Iterate over each pair of strings in the array S (excluding identical pairs and pairs already checked).
    a. For each pair of strings, iterate over each position.
    b. Compare the characters at the same position in both strings.
    c. If the characters are the same, return the indices of the two strings along with the common position.
3. If no such pair is found, return an empty array.

*/

//pseudocode 
/*
function solution(S):
    // Iterate over each word in the array S
    for i from 0 to S.length - 1:
        word1 = S[i]
        
        // Iterate over each  word in the array S
        for j from i + 1 to S.length - 1:
            word2 = S[j]

            // Iterate over each character position in the words
            for k from 0 to word1.length - 1:
                // Check if the characters at the same position in both words are the same
                if word1[k] equals word2[k]:
                    //  return the indices of the two words along with  common position
                    return [i, j, k]

    // Return an empty array if no pair is found
    return []

        


*/

// The Solution
function solution(S) {
    // Iterate over each word in the array S
    for (let i = 0; i < S.length; i++) {
        const word1 = S[i];
        
        // Iterate over each subsequent word in the array S
        for (let j = i + 1; j < S.length; j++) {
            const word2 = S[j];

            // Iterate over each character position in the words
            for (let k = 0; k < word1.length; k++) {
                // Check if the characters at the same position in both words are the same
                if (word1[k] === word2[k]) {
                    // return the indices of the two words along with the common position
                    return [i, j, k];
                }
            }
        }
    }

    //Return an empty array
    return [];
}

console.log(solution(["abc", "bca", "dbe"])); // Output: [0, 2, 1]
console.log(solution(["zzzz", "ferz", "zdsr", "fgtd"])); // Output: [0, 1, 3]
console.log(solution(["gr", "sd", "rg"])); // Output: []
console.log(solution(["bdafg", "ceagi"])); // Output: [0, 1, 2]
