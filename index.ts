let nom: string = 'papillon';
let age: number = 30;
let isStudent: boolean = false;


let hobbies: string[] = ['reading', 'gaming', 'coding'];

hobbies.push('travelling');


function isMature(name: string, age: number): void {
    if (age >= 18) {
        console.log(name + " is an adult.");
    } else {
        console.log(name + " is not an adult.");
    }
}

isMature('papillon', 15);
console.log(hobbies);
