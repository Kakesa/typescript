let nom: string = "John";
let age: number = 30;
let isStudent: boolean = false;

function isMature(name: string, age: number): void {
    if (age >= 18) {
        console.log(name + " is an adult.");
    } else {
        console.log(name + " is not an adult.");
    }
}

isMature('Espoir', 30);