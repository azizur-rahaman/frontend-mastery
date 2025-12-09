# Step 4 – React Fundamentals

## Learning Objectives

### 1. JSX & Virtual DOM
Understand React's core rendering concepts:
- **JSX Syntax**: JavaScript XML for component templates
- **Virtual DOM**: How React optimizes rendering
- JSX expressions and embedding JavaScript
- JSX vs HTML differences (className, htmlFor, etc.)
- Fragment usage (`<>` or `<React.Fragment>`)

### 2. Functional Components
Master modern React component creation:
- Component syntax and structure
- Component composition and reusability
- Props as function parameters
- Component naming conventions (PascalCase)
- Import/export patterns

### 3. Props & State
Learn data management in React:
- **Props**: Passing data from parent to child
- Props destructuring
- PropTypes for type checking (optional)
- **State**: Component-level data with `useState`
- State immutability
- When to use props vs state

### 4. Conditional Rendering
Display content based on conditions:
- **Logical AND (`&&`)**: Render if condition is true
- **Ternary operator (`? :`)**: Render one of two options
- Early returns for cleaner code
- Conditional styling and classes

### 5. Rendering Lists
Work with arrays of data:
- **`.map()`**: Transform arrays into JSX elements
- **Key prop**: Unique identifiers for list items
- Filtering and sorting lists
- Handling empty lists

### 6. Handling Events
Create interactive components:
- **Event handlers**: `onClick`, `onChange`, `onSubmit`
- Event handler syntax (arrow functions vs methods)
- Event object and `preventDefault()`
- Passing arguments to event handlers
- Synthetic events in React

### 7. Controlled Forms
Build forms the React way:
- **Controlled inputs**: `value` + `onChange`
- Form state management
- Handling multiple inputs
- Form validation
- Submit handling

## 🧠 Core Concepts to Master

### Unidirectional Data Flow
- Data flows from parent to child via props
- State is owned by components
- Lifting state up for shared data
- Props are read-only

### Component Hierarchy
- Parent and child relationships
- Component composition patterns
- Container vs presentational components
- Thinking in components

## Practice Projects

### Project 1: Counter App
Build a simple counter to master state updates.

**Features:**
- ✅ Increment button
- ✅ Decrement button
- ✅ Reset button
- ✅ Display current count
- ✅ Optional: Set increment/decrement step

**Concepts Applied:**
- `useState` for counter state
- Event handlers (`onClick`)
- State updates and re-rendering

### Project 2: Movie Search App
Build a movie search application using the **OMDb API**.

**Features:**
- ✅ Search input field
- ✅ Search button or search on type
- ✅ Display movie results in a grid/list
- ✅ Show movie poster, title, year, type
- ✅ Handle loading states
- ✅ Handle error states (no results, API errors)
- ✅ Display message when no movies found

**Concepts Applied:**
- Controlled form inputs
- API calls with `fetch` or `axios`
- State management for search query, results, loading, errors
- List rendering with `.map()`
- Conditional rendering for loading/error states
- Event handling for search

**API Setup:**
1. Get free API key from [OMDb API](http://www.omdbapi.com/apikey.aspx)
2. API endpoint: `http://www.omdbapi.com/?apikey=YOUR_KEY&s=SEARCH_TERM`

## Key Takeaways

By the end of this step, you should be able to:
- Build functional React components with JSX
- Manage component state with hooks
- Handle user interactions and events
- Fetch and display data from APIs
- Render dynamic lists with proper keys
- Create controlled form inputs
- Understand React's one-way data flow

## Resources
- [React Official Documentation](https://react.dev/)
- [React Hooks Reference](https://react.dev/reference/react)
- [Thinking in React](https://react.dev/learn/thinking-in-react)