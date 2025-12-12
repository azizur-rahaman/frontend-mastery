// Union (|)
let input : string | number;
input = "Hello";
input = 123;

// Intersection (&)
type Developer = {name: string};
type Engineer = {language: string};

type DevEngineer = Developer & Engineer;

const dev: DevEngineer = {name: "Azizur", language: "TypeScript"};