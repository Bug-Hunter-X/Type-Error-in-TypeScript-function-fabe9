function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Access individual elements of the array
console.log(greeter(user[0])); // Greets Jane
console.log(greeter(user[1])); // Greets Doe

// Solution 2: Concatenate the array elements into a single string
let fullName = user.join(" ");
console.log(greeter(fullName)); // Greets Jane Doe

// Solution 3: Modify the function signature to accept an array of strings
function greeterArray(person: string[]):string {
    return "Hello, " + person.join(" ");
}
console.log(greeterArray(user));// Greets Jane Doe