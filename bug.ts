function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //This will give an error because the function expects a string but gets an array