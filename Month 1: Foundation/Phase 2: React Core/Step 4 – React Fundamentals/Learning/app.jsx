// JSX = Javascript XML

import React from "react"

function app() {
    return <h1>Hello React</h1>
}

// Under the hood

React.createElement('h1', null, "Hello");

// Virtual DOM:
//      - React keeps a lightweight copy of the real DOM in memory.
//      - When state changes, React diffs (compares) the new and old virtual DOM.
//      - Only the changed parts are updated in the browser (fast + efficient).

// ES6

const Welcome = () => <h2>Welcome to React!</h2>;