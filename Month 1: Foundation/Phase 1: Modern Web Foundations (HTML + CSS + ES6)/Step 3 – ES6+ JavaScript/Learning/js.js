var name = "aziz";
let agee = 22;
const role = "Frontend Developer";

if (true) {
    let x = 5;
    const y = 10;
}
console.log(x); // (X) Error (block scope)


// Arrow functions
    //: Traditional
    function greet(name) {
        return `Hello, ${name}`;
    }

    //: Arrow function
    const greet = (name) => `Hello, ${name}`;


// 3. Template Literals
    const name = "azizur";
    const goal = " Frontend Engineer at OpenAI";
    const intro = `Hi, I'm ${name}.
    My goal is to become a ${goal}`;

    console.log(intro);

// 4. Destructuring
    const user = {name: "Azizur", age:22, role: "Developer"};
    const {name, age} = user;
    console.log(name, age); //Aziz 22

    const numbers = [10,20,30];
    const [a,b] = numbers;
    console.log(a, b); // 10,20

// 5. Spread & Rest Operators

    // expand values ...
    const arr1 = [1,2];
    const arr2 = [...arr1, 3, 4]; // [1,2,3,4]
    
    const obj1 = {name: "Aziz"};
    const obj2 = { ...obj1, age: 22};

    // Rest ... — collects values
    function sum(...nums) {
        return nums.reduce((a,b) => a + b, 0);
    }
    console.log(sum(1,2,3,4)) // 10

// 6. Promises & Async/Await
    // Promise
    const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data loaded"), 2000);
    })
    fetchData.then((data) => console.log(data));

    //Async/Await
    async function getData() {
        const data = await fetchData;
        console.log(data);
    }
    getData();

    // Error handling
    
    async function run() {
        try{
            const res = await fetch('https://api.github.com/users/octocat');
            const data = await res.json();
            console.log(data);
        }catch (err) {
            console.err("Error:", err);
        }
    }

    run();


//7. ES Modules (import/export)
    export const greet = (name) => `Hello, ${name}`;
    export const  PI = 3.1416;

    import {greet, PI} from './js.js';
    console.log(greet('Azizur,'), PI);


// 8. Array & Object Methods
    let arr = [1,2,3,4,5];
    let double = arr.map((element) => element * 2);
    let keepElementThatMatch = arr.filter((element) => element < 4);
    let total = arr.reduce((e1,e2) => e1 + e2, 0);
    arr.forEach(n => console.log(n));


// 9. Event Loop & Microtasks
    console.log("A");
    setTimeout(() => console.log("B"), 0);
    Promise.resolve().then(() => console.log("C"));

    console.log("D");

    // Output order:
    // A → D → C → B
    // Explanation:
    // Main thread (A, D) first.
    // Microtasks (Promises) next.
    // Macrotasks (setTimeout) last.