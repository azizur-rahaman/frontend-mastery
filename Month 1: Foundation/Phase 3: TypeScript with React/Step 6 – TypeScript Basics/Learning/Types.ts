let age: number = 22;
let name: string = "Azizur";
let isFrontend: boolean = true;
let skills: string[] = ["React", "TypeScript", "Next.js"];

// Add this line to make the file a module with a local scope
export {}

type User = {
    name: string;
    age: number;
    isActive: boolean;
}

const user: User = {name: "Azizur", age: 22, isActive: true};