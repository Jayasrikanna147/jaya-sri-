// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove spaces & convert to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the string
    let reversed = str.split('').reverse().join('');
    
    // Check if original equals reversed
    return str === reversed;
}

// Test the function
let testString1 = "Madam";
let testString2 = "Hello";

console.log(`"${testString1}" is a palindrome?`, isPalindrome(testString1));
console.log(`"${testString2}" is a palindrome?`, isPalindrome(testString2));
