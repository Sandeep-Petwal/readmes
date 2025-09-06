---
sidebar_label: 'Typescript'
title: 'Typescript Guide'
description: 'Beginners friendly guide to TS.'
---

# Typescript

### TypeScript is a statically typed superset of JavaScript. This means it adds optional static typing to JavaScript, allowing us to catch errors during development rather than at runtime.

- Superset = everything that js have + additional feature

- Every js code is a valid ts code

**Key Benefits of TypeScript**

1.  **Type Safety** -- Prevents unexpected errors by enforcing data types.
2.  **Better Code Readability** -- Makes it easier to understand what kind of data is expected.
3.  **Autocompletion & Intellisense** -- Helps with better code suggestions in IDEs.
4.  **Easier Refactoring** -- Large projects become more maintainable.
5.  **Early Error Detection** -- Detects potential bugs before execution.

- TypeScript Code cannot be interpreted by the Browser directly so there is a need to compile the TypeScript code into plain JavaScript Code, for this purpose we need the TypeScript Compiler (tsc).

- TypeScript code converts to JavaScript, which **runs anywhere JavaScript runs**: In a browser, on Node.js, Deno, Bun and in your apps.

**TypeScript Compiler (tsc)**

-   Written in TypeScript itself.

-   Compiles .ts files to .js files.

-   Installed as an NPM package (NodeJS).

-   Supports ES6 syntax.

Why Do We Use TypeScript ?

-   **Better developer experience**
-   **Code quality**
-   ** Prevents bugs**
-   **Developer Experience**

<br>



**📌 Setting Up TypeScript**

- **Install Node.js and npm (Node Package Manager):** TypeScript relies on Node.js and npm. Download and install them from the official Node.js website (nodejs.org).

- **Install TypeScript:** Open your terminal or command prompt and run:

npm install -g typescript

This installs the TypeScript compiler (tsc) globally.

- Now, create a basic TypeScript file: **index.ts**

let message:  string  =  "Hello, TypeScript!";

console.log(message);

- Compile it:

tsc index.ts

- This generates a JavaScript file (index.js) that you can run using:

node index.js

- Configurination (optional)

tsc --init 


<br>


**📌 TypeScript Basics**

**1️ Type Annotations :** Type annotations explicitly specify the type of a variable, parameter, or return value.

-   **Syntax**:  variable: type

**Basic Types:**

- **boolean**: true or false.

- **number**: All numeric values (integers, floats, etc.).

- **string**: Textual data.

- **array**: Collections of values.

- **tuple**: Fixed-length arrays with specific element types.

- **enum**: Named constants.

- **any**: Represents any type (use sparingly).

- **void**: Represents the absence of a value (e.g., a function that doesn't return anything).

- **null** and undefined: Represent null and undefined values.

- **never**: Represents values that never occur.

- **object**: Represents non-primitive types.
<br>



``` typescript
let isDone:  boolean  =  false;

let  decimal: number =  6;

let color:  string  =  "blue";

let list: number[]  =  [1,  2,  3];

let tuple:  [string, number]  =  ["hello",  10];

enum  Color  {Red,  Green,  Blue}

let c:  Color  =  Color.Green;
```

**📌Interfaces :** Interfaces define contracts for the shape of objects. They specify the properties and methods that an object *must have*.

``` typescript
interface  Person  {

  firstName:  string;

  lastName:  string;

  age?: number;  // Optional property

}

function greetPerson(person:  Person)  {

  console.log(`Hello, ${person.firstName} ${person.lastName}`);

 if(person.age){

    console.log(`You are ${person.age} years old.`)

 }

}

let myPerson:  Person  =  {

  firstName:  "John",

  lastName:  "Doe",

  age:  30

};

greetPerson(myPerson);

Interfaces can be **extended** using the extends keyword.

interface  Employee  extends  Person  {

  position:  string;

}

```

**📌 Using Type Aliases**

Instead of repeating object structures, we can define **type aliases**.

``` typescript
type Car  =  {

  brand:  string;

  model:  string;

  year: number;

};

let myCar:  Car  =  {

  brand:  "Tesla",

  model:  "Model S",

  year:  2023,

};
```

**📌 Interfaces vs Type Aliases**

Both **interfaces** and **type aliases** allow you to define the structure of an object, but they have different use cases.

1\. An **interface** is a way to define the shape of an object.

✔ Can be **extended** (inherit properties).\
✔ Best for defining objects.\
✔ Only used for objects, not primitive types.

2\. A **type alias** can define object structures but can also be used for **primitive types** and **unions**.

✔ Can define **objects, primitives, and union types**.\
✔ Cannot be extended like interfaces.


<br>


**📌 Functions in TypeScript**

You can explicitly specify types for **parameters** and **return values**.

``` typescript
function greet(name:  string, optional-age?: number, city:string="Default"):  string  {

 if  (optional-age)  {

 return  `Hello ${name}, you are ${optional-age} years old. you are from ${city}`;

 }  else  {

 return  `Hello ${name}, you are from ${city}`;

 }

 }

console.log(greet("Sanju"));

console.log(greet("Sanju",  25));

const square =  (num: number): number => num * num;

console.log(square(4));  // ✅ 16
```

<br>


**📌 Object Types in TypeScript**

In JavaScript, objects are dynamic, but in TypeScript, we can **define the structure** of objects using **type annotations**.


``` typescript
type ProductAddress  =  {

    city:  string;

    country:  string;

 };

type Product  =  {

 readonly id: number;

  name:  string;

  price: number;

  category?:  string;

  address?:  ProductAddress;

};

const product:  Product  =  {

  id:  1,

  name:  "iphone",

  price:  100000,

address :  {

city :  "Tehri",

country :  "India"

 }
};
```
<br>


**📌 Arrays**

**TypeScript allows you to enforce type safety by specifying the type of elements an array can hold**

``` typescript
const names:  string[]  =  ["Something"];\
names.push("Dylan"); // no error\
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```


**The readonly keyword can prevent arrays from being changed**

``` typescript
const superHeros:  readonly  string[]  =  ["Superman",  "Batman",  "Wonder Woman"];

names.push("Ironman");

console.log(superHeros);  // ✅ ["Superman", "Batman", "Wonder Woman"]
```


<br>

**📌 What Are Enums?**

Enums (**short for "enumerations"**) allow you to define a set of **constant values** with human-readable names. This makes your code more readable and maintainable.

``` typescript
enum  Status  {

 Pending, // 0

 Approved,  // 1

 Rejected // 2

}

let requestStatus:  Status  =  Status.Approved;

console.log(requestStatus);  // ✅ Output: 1

// String Enums

enum  Role  {

 User  =  "USER",

 Admin  =  "ADMIN",

 SuperAdmin  =  "SUPER_ADMIN"

}

let userRole:  Role  =  Role.Admin;

console.log(userRole);  // ✅ Output: ADMIN
```

Note : TypeScript also allows you to mix string and number values in an enum, though it's not common.

Numeric enums support **reverse mapping**, meaning you can get the enum name from a value.


``` typescript
enum  Color  {

 Red  =  1,

 Blue  =  2

}

console.log(Color.Red); // ✅ 1

console.log(Color[1]); // ✅ "Red" (reverse mapping)
```

<br>

**📌 Tuples (SAF)**

A **Tuple** is a special type in TypeScript that allows you to define **an array with a fixed number of elements** where each element has a specific type.\
Unlike regular arrays, tuples define the exact number and type , order of elements.

``` typescript
let person:  [string, number,  Boolean?]  =  ["Sandeep",  30];

person =  [30,  "Sandeep",  true];  // ❌ Error: Type 'number' is not assignable to type 'string'

// Tuple with Labels (Destructuring)

let  [name, age]  = person;

// If you don't want to allow modifications to a tuple, use readonly.

let coordinates:  readonly  [number, number]  =  [10,  20];
```

<br>

**📌 Type Assertions**

Type assertions allow you to **tell TypeScript the exact type** of a variable when TypeScript cannot infer it properly.

``` typescript
let  value: any =  "Hello, TypeScript";

let length1: number =  (value  as  string).length;

let length2: number =  (<string>value).length;  // Alternative syntax

console.log(length1);  // ✅ 17

console.log(length2);  // ✅ 17
```


<br>

**📌Union & Intersection & Literals Types**

**Union (|)** Allows a variable to have **multiple possible types**.


``` typescript
let  value:  string  | number;

value  =  "Hello";  // ✅ Allowed

value  =  100; // ✅ Allowed

value  =  true; // ❌ Error 

**Intersection (&)**

Combines multiple types into **one**.

type Admin  =  { name:  string; privileges:  string[]  };

type Employee  =  { name:  string; startDate:  Date  };

type AdminEmployee  =  Admin  &  Employee;

let emp:  AdminEmployee  =  {

  name:  "Sanju",

  privileges:  ["manage-users"],

  startDate:  new  Date(),

};

console.log(emp);
```

<br>

**Literal Types**

You can restrict a variable to specific values.


``` typescript

type Status  =  "pending"  |  "approved"  |  "rejected";

let orderStatus:  Status;

orderStatus =  "approved";  // ✅ Allowed

orderStatus =  "shipped";  // ❌ Error
```

<br>


**📌 Classes in TypeScript**

TypeScript supports object-oriented programming (OOP) with classes, which are similar to JavaScript but with added type safety.



``` javascript

class  Employee  {

 public name:  string;  // Accessible everywhere

 private salary: number;  // Accessible only within Employee

 protected department:  string;  // Accessible in subclasses

 constructor(name:  string, salary: number, department:  string)  {

 this.name = name;

 this.salary = salary;

 this.department = department;

 }

  showSalary()  {

    console.log(`Salary is: ${this.salary}`);  // ✅ Allowed

 }

}

const emp =  new  Employee("John",  5000,  "IT");

console.log(emp.name);  // ✅ Allowed

console.log(emp.salary);  // ❌ Error: Property 'salary' is private

```

<br>

**📌 TypeScript in React & Node.js**

- **To use TypeScript in a React project:**

npx create-react-app my-app --template typescript

- **To use TypeScript in a Node.js + Express project:**

``` javascript


npm init -y

npm install typescript ts-node @types/node @types/express --save-dev

npx tsc --init

**📌 TypeScript Usage in React :**

import  React,  { useState }  from  "react";

type MyPageProps  =  {

  text:  string;

 Number?: number;

};

const  MyPage:  React.FC<MyPageProps>  =  (props)  =>  {

 const  [value, setValue]  = useState<number>(1);

 const  [inputValue, setInputValue]  = useState<string>("");

 const handleInputChange =  (e:  React.ChangeEvent<HTMLInputElement>)  =>  {

    setInputValue(e.target.value);

 };

 return  (

 <>

 <h2>Text  is  :  {props.text}</h2>

 <button onClick={()  => setValue((val)  => val +  1)}>Click me +  </button>

 <h1>Input  value  :  {inputValue}</h1>

 <input type="text" onChange={handleInputChange}  />

 </>

 );

};

export  default  MyPage;

```

<br>

**📌 TypeScript Generics :**

Generics allow you to write reusable, type-safe code. They're like function parameters for types.

Instead of writing:

``` javascript

function identityString(arg:  string):  string  {

 return arg;

}

We use a generic:

function identity<T>(arg: T): T {

 return arg;

}

```

Now T can be any type --- string, number, object, etc.

**🔥 Why Generics in React?**

**In React, we often want:**

-   **Reusable components that work with different types**
-   **Typed props or hooks that are flexible yet safe**

**\
**

**Typescript more**

A. **Record Type in TypeScript : **  The Record type is a utility type that creates an object type with specified keys and values. It's incredibly useful for defining dictionaries, maps, or any object with a known set of keys and consistent value types. 

**Basic Syntax : **Record<Keys, Type>

**Keys**: The type of the keys (usually string, number, or symbol)

**Type:** The type of the values

``` javascript

// 1. Dictionary where keys are strings and values are numbers

type Scores  =  Record<string, number>;

const examScores:  Scores  =  {

  alice:  95,

  bob:  87,

  charlie:  92

};

// 2. Using literal types for keys

type Status  =  'active'  |  'inactive'  |  'pending';

type UserStatus  =  Record<Status, number>;

const statusCounts:  UserStatus  =  {

  active:  150,

  inactive:  30,

  pending:  20

};

// Missing a key would cause an error:

// const invalidCounts: UserStatus = { active: 150, inactive: 30 }; // Error: missing 'pending'

// 3. Another example

interface  Room  {

socket :  Websocket[]

}

const rooms :  Record<string  ,  Room>  =  {}

interface  User  {

  id: number;

  name:  string;

  email:  string;

}

// 4. Complex value type

type UserDictionary  =  Record<string,  User>;

const users:  UserDictionary  =  {

 'user-1':  { id:  1, name:  'Alice', email:  'alice@example.com'  },

 'user-2':  { id:  2, name:  'Bob', email:  'bob@example.com'  }

};

```