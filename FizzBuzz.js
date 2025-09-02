//Created by Neil Mashalkar on 9/2/2025

// Loop through the numbers 1 to 100
for (let i = 1; i <= 100; i++) {

    // If the number is divisible by both 3 AND 5
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz"); // Print "FizzBuzz"

    // If the number is divisible by 3 only
    } else if (i % 3 == 0) {
        console.log("Fizz"); // Print "Fizz"

    // If the number is divisible by 5 only
    } else if (i % 5 == 0) {
        console.log("Buzz"); // Print "Buzz"

    // Otherwise (not divisible by 3 or 5)
    } else {
        console.log(i); // Print the number itself
    }
}
