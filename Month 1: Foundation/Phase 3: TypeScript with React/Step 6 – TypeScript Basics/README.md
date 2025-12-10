# Step 6 – TypeScript Basics

## 📚 Learning Objectives

### Core Concepts

- **Types, Interfaces, Enums**
  - Basic type annotations
  - Interface definitions
  - Enum usage and best practices

- **Union & Intersection Types**
  - Combining types with `|` (union)
  - Combining types with `&` (intersection)
  - Type guards and narrowing

- **Generics**
  - Generic functions and components
  - Generic constraints
  - Generic interfaces and types

- **Utility Types**
  - `Partial<T>` - Make all properties optional
  - `Pick<T, K>` - Select specific properties
  - `Omit<T, K>` - Exclude specific properties
  - `Required<T>`, `Readonly<T>`, `Record<K, T>`

- **Type Inference & Narrowing**
  - Automatic type inference
  - Type guards (`typeof`, `instanceof`)
  - Discriminated unions
  - Control flow analysis

## 🎯 Practice Projects

### 1. Counter App (TypeScript Conversion)
Rewrite your Counter app in TypeScript with:
- Typed props and state interfaces
- Proper event handler typing
- Type-safe component composition

### 2. Movie Search App (TypeScript Conversion)
Rewrite your Movie Search app in TypeScript with:
- Create interfaces for props and state
- Add strict typing for API responses
- Type-safe HTTP client functions
- Proper error handling types

## 📝 Best Practices

- Enable strict mode in `tsconfig.json`
- Avoid using `any` type
- Use interfaces for object shapes
- Use type aliases for unions and primitives
- Leverage type inference when obvious
