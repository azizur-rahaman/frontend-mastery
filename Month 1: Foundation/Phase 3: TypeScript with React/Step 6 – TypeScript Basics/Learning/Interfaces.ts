interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    console.log(`Hello ${person.name}`);
}