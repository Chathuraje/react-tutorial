# React Tutorial Repository

Welcome to my React tutorial repository! Here, I document my journey of learning React through various video series. Each time I push to this repository, I'll update the progress I've made.

## Current Progress

- 📝 **Title**:
- 📝 **Topics Covered**:
- 📝 **Date**:

## Previous Progress

- ✅ **Title**: Day 1.15: Handling Multiple Inputs and Submit
- ✅ **Topics Covered**: Exploring how to handle multiple inputs in a form and implementing form submission functionality.
- ✅ **Date**: 2024-03-23

## Day 1.1: [Introduction to the React](https://github.com/Chathuraje/react-tutorial/tree/a6b8718a6d4869872272c9906a7c01c3e54001b9) 1️⃣

React is a JavaScript library for building user interfaces. It was developed by Facebook and is widely used for building modern web applications. Some key features of React include:

- **Component-Based Architecture**: React follows a component-based architecture, where the UI is broken down into reusable components. Each component manages its own state, making it easier to build and maintain complex user interfaces. Components can be composed together to create larger, more complex UIs, resulting in a modular and scalable codebase.
- **Declarative Syntax**: React uses a declarative syntax, allowing developers to describe how the UI should look at any given point in time. This makes the code more readable and easier to understand, as developers can focus on what the UI should look like rather than how to manipulate the DOM to achieve it. Declarative programming also leads to more predictable code behavior and fewer bugs.
- **Virtual DOM**: React utilizes a virtual DOM to efficiently update the UI. Instead of directly manipulating the browser's DOM, React creates a lightweight virtual representation of the DOM in memory. When changes are made to the UI, React compares the virtual DOM with the real DOM and only applies the necessary updates, minimizing DOM manipulation and improving performance.
- **One-Way Data Binding**: React implements one-way data binding, also known as unidirectional data flow. Data flows from parent components to child components via props, ensuring that changes in the parent component automatically propagate down to its children. This simplifies data management and reduces the likelihood of unexpected side effects, making the codebase more maintainable and easier to reason about.
- **Rich Ecosystem and Community Support**: React has a vibrant ecosystem with a wide range of libraries, tools, and resources available to developers. This includes libraries for state management (e.g., Redux, MobX), routing (e.g., React Router), form handling (e.g., Formik), and much more. Additionally, React has a large and active community of developers who contribute to its ongoing development, provide support, and share knowledge through forums, tutorials, and conferences.

## Day 1.2: [Tools that Required to Development](https://github.com/Chathuraje/react-tutorial/tree/9e484e6c0d370a26eb301feb070e011f063719e6) 1️⃣

To get started with React development, you'll need the following tools:

1. **Node.js and npm**: Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server-side. npm (Node Package Manager) is a package manager for Node.js that helps you install, manage, and share JavaScript packages.

2. **Code Editor**: A code editor is essential for writing and editing your React code. There are many options available, including Visual Studio Code, Sublime Text, Atom, and WebStorm.

3. **Git**: Git is a version control system that allows you to track changes in your codebase, collaborate with others, and manage your project's history.

### Installing Required Tools

#### 1. Node.js and npm

- **Windows/MacOS**:

  - Download the latest version of Node.js and npm from the [official website](https://nodejs.org/).
  - Follow the installation instructions provided on the website.
  - After installation, verify that Node.js and npm are installed correctly by running the following commands in your terminal or command prompt:
    ```bash
    node --version
    npm --version
    ```

- **Linux**:
  - You can install Node.js and npm using your distribution's package manager (e.g., apt for Ubuntu).
  - For example, on Ubuntu, you can install Node.js and npm using the following commands:
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```
  - After installation, verify that Node.js and npm are installed correctly by running the following commands in your terminal:
    ```bash
    node --version
    npm --version
    ```

#### 2. Code Editor

- **Visual Studio Code**:
  - Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/).
  - Follow the installation instructions provided on the website.

#### 3. Git

- **Windows/MacOS**:

  - Download and install Git from the [official website](https://git-scm.com/).
  - Follow the installation instructions provided on the website.

- **Linux**:
  - You can install Git using your distribution's package manager.
  - For example, on Ubuntu, you can install Git using the following command:
    ```bash
    sudo apt update
    sudo apt install git
    ```

### Verifying Installation

After installing the required tools, you can verify that they are installed correctly by running the following commands in your terminal or command prompt:

- Node.js and npm:

  ```bash
  node --version
  npm --version
  ```

- Git:
  ```bash
  git --version
  ```

Once you have installed and verified all the required tools, you're ready to start developing React applications!

## Day 1.3: [Create React App Using Vite](https://github.com/Chathuraje/react-tutorial/tree/330064cf153d64c3b9faed969946174f9bc20470) 1️⃣

If you prefer using `Vite` as a build tool for your React projects, you can create a new React app using Vite. Here's how:

### Creating a New React App with Vite

1. **Install Vite Globally**: If you haven't already installed Vite globally, you can do so using npm:

   ```bash
   npm install vite@4.1.0
   ```

2. **Create a New React App**: Once Vite is installed, you can use it to create a new React app:

   ```bash
   npm create vite@4.1.0
   ```

   Then you can enter Project details and then press Enter

   - `? Project name: » <project-name>`
   - `? Select a framework: » React`
   - ` Select a variant: » JavaScript`

3. **Navigate to the New App Directory**: After the app is created, navigate to the newly created directory:

   ```bash
   cd <app-name>
   ```

4. **Install Libraries**: After the app is created, Need to install the libraries.

   ```bash
   npm install
   ```

5. **Start the Development Server**: Finally, start the development server:

   ```bash
   npm run dev
   ```

6. **Open in Browser**: Open your browser and navigate to `http://localhost:5173` to view the app.

### Benefits of Using Vite

- **Fast Development**: Vite provides lightning-fast cold server start and hot module replacement (HMR) out of the box, making the development experience smoother and more efficient.
- **Modern Build Pipeline**: Vite leverages modern ES module imports and native browser support for dynamic imports, resulting in faster build times compared to traditional bundlers.
- **Optimized for React**: Vite's React template comes pre-configured with React Fast Refresh, allowing you to see your changes reflected instantly without losing component state.

By using Vite with React, you can take advantage of its speed and efficiency to streamline your development workflow and build high-performance React applications.

## Day 1.4: [Cleaning up the project](https://github.com/Chathuraje/react-tutorial/tree/e257e70759a860e4bd7d25daf0cd41cb08a9a895) 1️⃣

Today's focus is on streamlining our project by removing unnecessary files and directories. This step is crucial for maintaining a clean and organized codebase, which ultimately contributes to better development efficiency and code readability. By cleaning up the project, we aim to create a more focused and efficient development environment, allowing us to better focus on implementing new features and improving existing ones.

## Day 1.5: [Create a React Component](https://github.com/Chathuraje/react-tutorial/tree/8051bad2e9f5c3bc583669f771ec2248a1bb7c38) 1️⃣

Today, I delved into the fundamental concept of creating React components. I gained insights into how components are structured and utilized to construct user interfaces efficiently.

### Steps to Create a React Component:

1. **Identify Component Purpose**: Determine the purpose of the component and its role within the application's UI.

2. **Create a New File**: Inside the `components` folder of your React project, create a new file for the component. Ensure that the file name starts with a capital letter and has a .jsx extension.

3. **Define the Component**: In the newly created file, define the component as a JavaScript function. This function should return JSX, a syntax similar to HTML but with the power of JavaScript. Structure the JSX to represent the desired UI elements and their interactions.

4. **Export the Component**: To make the component accessible to other parts of the application, export it using the `export default` syntax followed by the component name.

   ```jsx
   function Hello() {
     return <h1>This is a Component!</h1>;
   }

   export default Hello;
   ```

5. **Integrate the Component**: Import the newly created component into the main component or any other component where it is required. Use the component as you would any HTML tag, passing props as necessary.

   ```jsx
   import Hello from "./components/Hello";

   function App() {
     return (
       <div className="App">
         <Hello />
         <Hello></Hello>
       </div>
     );
   }

   export default App;
   ```

## Day 1.6: [What is JSX (Javascript Extension) in React](https://github.com/Chathuraje/react-tutorial/tree/4bdd47844f1cdb1c4b7a7f98751a0d7941d7d6be) 1️⃣

### Example:

```jsx
const name = "Chathura";

function displayMessage() {
  return "This is a function";
}

function Hello() {
  return (
    <div>
      <h1>
        {name}: This is a Component! {10 + 10}
      </h1>
      <h2>Function: {displayMessage()}</h2>
    </div>
  );
}

export default Hello;
```

## Day 1.7: [Reusability of Components and Usage of Props](https://github.com/Chathuraje/react-tutorial/tree/8e29f6275e85e8509bc0bc9185a0ad7fe9ea59c9) 1️⃣

### Reusability of Components

In React, components are the building blocks of user interfaces, and one of the key advantages is their reusability. By creating components that encapsulate specific functionality or UI elements, you can easily reuse them throughout your application.

#### Example:

```jsx
// Hello Component
function Hello() {
  return <h1>This is a Component!</h1>;
}

export default Hello;
```

```jsx
// Using the Hello Component
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;
```

### Usage of Props

Props (short for properties) are a way to pass data from parent to child components in React. They allow you to customize and configure components dynamically based on their usage.

```jsx
// Hello component
function Hello(props) {
  return (
    <h1>
      Hello, {props.name}! --> {props.age}
    </h1>
  );
}

export default Hello;
```

```jsx
// Using the Hello component
function App() {
  return <Hello name="Chathura" age="26" />;
}

export default App;
```

### Destructuring Props

Destructuring allows you to extract values from objects or arrays and assign them to variables. It's commonly used to simplify access to props within functional components.

```jsx
// Hello component
function Hello({ name, age }) {
  return (
    <h1>
      Hello, {name}! --> {age}
    </h1>
  );
}

export default Hello;
```

```jsx
// Using the Hello component
function App() {
  return <Hello name="Chathura" age="26" />;
}

export default App;
```

### Immutability of Props

Props in React are immutable, meaning they cannot be modified directly within the component. Instead, you should treat props as read-only and rely on state management for any changes that need to occur.

### Passing Arrays to Props

You can pass arrays and objects as props to React components just like any other data type. However, keep in mind that props should be treated as immutable, so it's recommended to avoid modifying them directly within the component.

```jsx
// Hello component
function Hello({ name, age, seatNumbers }) {
  return (
    <div>
      <h1>
        Hello, {name}! --> {age}
      </h1>
      <p>Seat Numbers: {seatNumbers} </p>
    </div>
  );
}

export default Hello;
```

```jsx
// Using the Hello component
const seatNumbers = [1, 2, 3, 4, 5];

function App() {
  return <Hello name="Chathura" age="26" seatNumbers={seatNumbers} />;
}

export default App;
```

### Passing Objects to Props

You can pass objects as props to React components just like any other data type. Objects can contain multiple key-value pairs, allowing you to pass complex data structures to components.

```jsx
// UserInfo component
function Hello({ favourites }) {
  return (
    <div>
      <h2>Favourites</h2>
      <p>Food: {favourites.food}</p>
      <p>Drink: {favourites.drink}</p>
    </div>
  );
}
```

```jsx
// Using the UserInfo component
function App() {
  const favourites = {
    food: "Pizza",
    drink: "Coke",
  };

  return <Hello favourites={favourites} />;
}
```

## Day 1.8: [Rendering Arrays of Lists and Objects in React](https://github.com/Chathuraje/react-tutorial/tree/43010536dafd4398c71760ff7a151ecabc588f07) 1️⃣

Today's focus is on rendering arrays of lists and objects in React. We'll explore how to efficiently render dynamic content using the `map()` method in React components.

#### Usage of Array

```javascript
const prices = [10, 20, 30, 40, 50];
const discount = prices.map((prices) => prices * 0.9);
console.log(discount);
```

### Rendering Arrays of Lists

When dealing with arrays of lists in React, the `map()` method comes in handy for iterating over each item in the array and rendering it as a list item in the UI.

```jsx
// Example: Rendering an array of fruits as a list
const fruits = ["Apple", "Banana", "Orange", "Mango"];

return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
```

### Rendering Arrays of Objects

Rendering arrays of objects in React involves using the `map()` method similarly to rendering arrays of primitive values. However, we need to ensure each list item has a unique key prop to help React efficiently update the UI.

```jsx
// Example: Rendering an array of fruit objects as a list
const fruits = [
  { name: "Apple", price: 10, emoji: "🍎" },
  { name: "Banana", price: 30, emoji: "🍌" },
  { name: "Orange", price: 40, emoji: "🍊" },
  { name: "Mango", price: 110, emoji: "🥭" },
  { name: "Pineapple", price: 80, emoji: "🍍" },
  { name: "Grapes", price: 60, emoji: "🍇" },
];

return (
  <ul>
    {fruitsObject.map((fruit) => (
      <li key={fruit.name}>
        {fruit.emoji} {fruit.name} ${fruit.price}
      </li>
    ))}
  </ul>
);
```

By leveraging the `map()` method, we can dynamically render arrays of lists and objects in React components, making our UIs more flexible and responsive to data changes.

## Day 1.9: [Rendering Components Inside A Loop](https://github.com/Chathuraje/react-tutorial/tree/15a53a2e38fc1e3c9e3836f7c956acc45971270a) 1️⃣

Today, i explored how to render React components dynamically inside a loop.

### Single Fruit Component

```jsx
// Exporting and creating a function using "export default" keyword
export default function Fruit({ fruit }) {
  return (
    <div>
      <li>
        {fruit.emoji} {fruit.name} - {fruit.price}
      </li>
    </div>
  );
}
```

### Fruits Components

```jsx
import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Banana", price: 30, emoji: "🍌" },
    { name: "Orange", price: 40, emoji: "🍊" },
    { name: "Mango", price: 110, emoji: "🥭" },
    { name: "Pineapple", price: 80, emoji: "🍍" },
    { name: "Grapes", price: 60, emoji: "🍇" },
  ];

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} fruit={fruit} />
        ))}
      </ul>
    </div>
  );
}
```

In the Fruits component, we have an array of fruits, each containing properties like name, price, and emoji. We utilize the `map()` method to iterate over this array and dynamically render the Fruit component for each fruit in the list. The key prop is provided to each Fruit component to ensure React can efficiently update the UI.

This approach allows us to create reusable components and render them dynamically based on data, enhancing the flexibility and scalability of our React applications.

This code demonstrates how to dynamically render React components inside a loop, improving code reusability and maintainability.

## Day 1.10: [Conditionally Rendering JSX & Components](https://github.com/Chathuraje/react-tutorial/tree/ceee93be01a83f82468622ef15ab42581e826bf6) 1️⃣

In React, conditional rendering allows you to render different JSX or components based on certain conditions. This is a powerful feature that enables you to dynamically adjust the UI based on user interactions, data fetching, or application state.

Profile.jsx

```jsx
export default function Profile() {
  return (
    <div>
      <h1>This is your Profile!</h1>
    </div>
  );
}
```

Welcome.jsx

```jsx
export default function Welcome() {
  return (
    <div>
      <h1>Welcome to the website</h1>
    </div>
  );
}
```

### Conditionally Rendering JSX

```jsx
import Profile from "./Profile";
import Welcome from "./Welcome";

// It's not a good practise to have nultiple return statements in a function. Instead, we can use a variable to store the component we want to display and then return that variable. This is shown in the next snippet.

export default function ConditionalComponents() {
   const display = true;

   if (display) {
     return <Profile />;
   } else {
     return <Welcome />;
   }
 }.
```

### Conditional Rendering Using Element Variables

```jsx
// We can use Element Variable for the same purpose

import Profile from "./Profile";
import Welcome from "./Welcome";

export default function ConditionalComponents() {
  const displayProfile = true;
  let element;

  if (displayProfile) {
    element = <Profile />;
  } else {
    element = <Welcome />;
  }

  return <div> {element} </div>;
}
```

In this example, the `ConditionalComponents` function conditionally assigns either the `<Profile />` component or the `<Welcome />` component to the element variable based on the `displayProfile` condition. Then, it renders the element variable within the JSX, resulting in either the Profile or Welcome component being rendered.

### Conditional Rendering Using Ternary Operator

```jsx
import Profile from "./Profile";
import Welcome from "./Welcome";

export default function ConditionalComponents() {
  const displayProfile = true;

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {displayProfile ? <Profile /> : <Welcome />}
    </div>
  );
}
```

In this alternative approach, the ternary operator is used directly within the JSX. If `displayProfile` is true, the Profile component is rendered; otherwise, the Welcome component is rendered.

## Day 1.11: [Conditionally Rendering List Items in React](https://github.com/Chathuraje/react-tutorial/tree/c9d7fb3acfaa75b184247335c0d2013b2c4ed5b2) 1️⃣

Today's focus is on conditionally rendering list items in React. We explore how to render list items based on certain conditions, enhancing the flexibility and responsiveness of our components.

### Example: Conditional Rendering Based on Stock Availability

```jsx
import Fruits from "./Fruits";

function App() {
  return (
    <div className="App">
      <Fruits />
    </div>
  );
}

export default App;
```

```jsx
import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", stock: true },
    { name: "Banana", price: 30, emoji: "🍌", stock: true },
    { name: "Orange", price: 40, emoji: "🍊", stock: false },
    { name: "Mango", price: 110, emoji: "🥭", stock: true },
    { name: "Pineapple", price: 80, emoji: "🍍", stock: false },
    { name: "Grapes", price: 60, emoji: "🍇", stock: false },
  ];

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} fruit={fruit} />
        ))}
      </ul>
    </div>
  );
}
```

```jsx
export default function Fruit({ fruit }) {
  return (
    // we use fragments here to add normal list instead of wrapping it with div tags
    <>
      {fruit.stock ? (
        <h2>
          <li>
            {fruit.emoji} {fruit.name} - {fruit.price}
          </li>
        </h2>
      ) : (
        <h2></h2>
      )}
    </>
  );
}
```

Normal IF

```jsx
export default function Fruit({ fruit }) {
  let content;
  if (fruit.stock) {
    content = (
      <h2>
        <li>
          {fruit.emoji} {fruit.name} - {fruit.price}
        </li>
      </h2>
    );
  } else {
    content = "";
  }

  return <div>{content}</div>;
}
```

In this example, we conditionally render list items based on the stock availability of each fruit. If the fruit is in stock, its details are displayed as a list item; otherwise, no content is rendered. This approach allows for dynamic rendering of list items, enhancing the user experience.

## Day 1.12: [Event Handling In React](https://github.com/Chathuraje/react-tutorial/tree/ac1f381706b4d2064723ef4b1bc4997e9966a6f4) 1️⃣

In React, event handling allows you to capture and respond to user interactions, such as clicks, mouse movements, keyboard inputs, etc. This enables you to create interactive and dynamic user interfaces. Let's explore event handling in React using the provided example.

### Handling Click Events

```jsx
import Message from "./Message";

function App() {
  return (
    <div className="App">
      <Message />
    </div>
  );
}

export default App;
```

```jsx
export default function Message() {
  function handleClick() {
    console.log("You clicked the button");
  }
  // when we use handleClick as a callback function, we don't use parentheses. if we do use parentheses, the function will be called immediately
  return (
    <div>
      <h1>Event Handling Example</h1>
      <button onClick={handleClick}>Click here to get a message</button>
    </div>
  );
}
```

In this example, the handleClick function is defined to log a message to the console when the button is clicked. The `onClick` attribute in the `<button>` element is set to `{handleClick}`, indicating that the handleClick function should be called when the button is clicked.

### Understanding Event Handling Syntax

When setting up event handlers in React, you pass a function reference (not a function call) as the event handler. This ensures that the function is executed only when the event occurs, not immediately when the component renders.
If you use parentheses `()` when passing the function as a `callback`, the function will be called immediately when the component renders. This is not the desired behavior for event handlers, so make sure to omit the parentheses.

By effectively handling events in React components, you can create responsive and interactive user interfaces that enhance the overall user experience.

## Day 1.12: [State in React](https://github.com/Chathuraje/react-tutorial/tree/25efebef11bd4c020a3b853eaff2005fc8bfe0f2) 1️⃣

### Why Use State?

State is a crucial aspect of React components as it allows components to manage and maintain their own data. By utilizing state, React components can dynamically update and render UI elements based on changes in data or user interactions. This capability is essential for building interactive and responsive web applications.

```javascript
// Example of using state and props
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

### What is State?

State in React represents the data that a component can maintain and update over time. It is essentially an object that contains information relevant to the component's rendering and behavior. Stateful components have the ability to modify their state, triggering re-renders and enabling dynamic updates to the UI.

### Props vs State

Props State
| | Props | State |
|---|-------|-------|
| **Definition** | Props (short for properties) are immutable data passed from parent to child components. | State is mutable data managed within a component, allowing the component to maintain and update its own data. |
| **Modification** | Props are immutable and cannot be modified directly by the component receiving them. | State is mutable and can be modified using the `setState()` method, triggering re-renders of the component. |
| **Ownership** | Props are owned by the parent component and passed down to child components. | State is owned and managed internally by the component itself. |

### Features of State

The features of states in React are fundamental to building dynamic and interactive user interfaces. Here are the key features of states:

- **Dynamic Data Handling**: States allow components to manage and update their data dynamically. Components can hold various types of data, such as `strings`, `numbers`, `objects`, or `arrays`, within their state, enabling them to respond to user interactions or data changes.

- **Component-Level Scope**: Each component in React can have its own state, isolated from other components. This component-level scope ensures that changes to one component's state do not affect the state of other components, promoting modularity and encapsulation.

- **Mutable and Modifiable**: Unlike props, which are immutable and passed down from parent components, states are mutable and can be modified directly within the component. React provides the `setState()` method to update the state, triggering re-renders of the component to reflect the updated state.

- **Reactivity**: React components automatically re-render when their state changes. This reactivity ensures that the UI reflects the most up-to-date state of the component, providing users with a seamless and responsive experience.

- **Local Storage**: States can persist data locally within the component, allowing components to maintain their state across re-renders and page refreshes. This feature is particularly useful for preserving user input, form data, or application state.

- **Initialization and Lifecycle Management**: States can be initialized within the component's constructor using the `this.state` syntax. Additionally, React components have lifecycle methods, such as `componentDidMount()` and `componentDidUpdate()`, which can be used to manage state initialization, updates, and cleanup.

- **Asynchronous Updates**: React batches state updates for performance reasons, allowing multiple `setState()` calls to be combined into a single update. This asynchronous behavior ensures efficient rendering and minimizes unnecessary re-renders of the component.

By leveraging these features, states empower React developers to create dynamic, responsive, and interactive user interfaces, making React a powerful framework for building modern web applications.

Example Code:

```jsx
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
```

```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // useState(0) -> Set count = 0 when the page loads
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>Count Value is: {count}</div>
      <button onClick={increment}>Increments</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

This code is a simple React component called Counter that demonstrates the usage of the useState hook to manage state within a functional component. Let's break down the code and explain each part:

#### Import Statement:

```jsx
import { useState } from "react";
```

This line imports the useState hook from the React library. The useState hook is a built-in React hook that allows functional components to add state to them.

#### State Initialization:

```jsx
const [count, setCount] = useState(0);
```

Here, the useState hook is used to initialize a state variable named count with an initial value of 0. The useState hook returns an array with two elements: the current state value (count) and a function (setCount) to update that value.

#### Event Handling Functions:

```jsx
function increment() {
  setCount(count + 1);
}
function decrement() {
  setCount(count - 1);
}
```

These are two event handling functions, increment and decrement, which update the count state. They use the setCount function provided by the useState hook to update the state value. When increment is called, it increases the count by 1, and when decrement is called, it decreases the count by 1.

#### JSX Return:

```jsx
return (
  <div>
    <div>Count Value is: {count}</div>
    <button onClick={increment}>Increments</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);
```

This is the JSX returned by the Counter component. It displays the current value of count, along with two buttons labeled "Increment" and "Decrement". Clicking these buttons triggers the increment and decrement functions, respectively, updating the count state and causing a re-render of the component with the updated count value displayed.

In summary, the Counter component uses the useState hook to manage a simple counter state, allowing users to increment and decrement the count value interactively.

## Day 1.14: [Handelling Input Fields in React](https://github.com/Chathuraje/react-tutorial/tree/09a66e64a07657c6348a9116c3578bb1e53d7b06) 1️⃣

In the context of web development, "inputs" typically refer to HTML elements that allow users to input data. These elements are used to collect various types of information from users, such as text, numbers, dates, checkboxes, radio buttons, etc. Inputs are an essential part of web forms and are used extensively in web applications for gathering user input.

In the context of web development, "inputs" typically refer to HTML elements that allow users to input data. These elements are used to collect various types of information from users, such as text, numbers, dates, checkboxes, radio buttons, etc. Inputs are an essential part of web forms and are used extensively in web applications for gathering user input.

Some common types of input elements in HTML include:

- **Text Input**: `<input type="text">` allows users to input single-line text.
- **Textarea**: `<textarea>` allows users to input multi-line text.
- **Number Input**: `<input type="number">` restricts input to numeric values.
- **Checkbox**: `<input type="checkbox">` allows users to select one or more options from a list.
- **Radio Button**: `<input type="radio">` allows users to select only one option from a list.
- **Dropdown Menu**: `<select>` with `<option>` elements allows users to select one option from a list.
- **Date Input**: `<input type="date">` allows users to input a date.
- **File Input**: `<input type="file">` allows users to upload files from their local system.

In the context of React, "inputs" can also refer to input fields within React components, which are typically used to capture user input and manage their state using React's state management mechanisms. These inputs are often created using JSX syntax and are associated with event handlers to update component state based on user input.

This code is a React component named Form that manages a simple form input field using React's useState hook. Let's break it down step by step:

`event` is an object that has a target property that has a value property and more data

#### State Initialization

```jsx
const [formName, SetName] = useState("");
```

#### Form Rendering

```jsx
return (
  <div>
    <form>
      <input
        onChange={(event) => SetName(event.target.value)}
        type="text"
        value={formName}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
);
```

This JSX code renders a `<div>` containing a `<form>` element. Inside the form, there is an `<input>` element for text input. The value attribute of the input is set to the formName state variable, making it a controlled component. The onChange event handler is used to update the formName state whenever the input value changes. Finally, there's a `<button>` element for submitting the form.

#### Event Handling: Method 1

```jsx
onChange={(event) => SetName(event.target.value)}
```

This is an inline arrow function used as the onChange event handler for the input field. It updates the formName state with the new value entered into the input field.

We can use any of following way to archieve the same result

#### Event Handling: Method 2

```jsx
function hadleChange(event) {
  console.log(event.target.value);
  SetName(event.target.value);
}

onChange={function demonstrateChange(event) {
  return hadleChange(event);
}}
```

#### Event Handling: Method 3

```jsx
function hadleChange(event) {
  console.log(event.target.value);
  SetName(event.target.value);
}

onChange={(event) => hadleChange(event)}
```

Overall, this component represents a simple form with a single input field whose value is controlled by React's state mechanism. When the user types into the input field, the state is updated accordingly.

## Day 1.15: [Handling Multiple Inputs and Submit](https://github.com/Chathuraje/react-tutorial/tree/bd8c712d4fcdf188c41db8a33aeb30022fa897a0) 1️⃣

Today's focus is on handling multiple inputs within a form and implementing form submission functionality in a React component.

### Example:

```jsx
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
    // Additional logic for form submission can be added here
  }

  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          type="text"
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
          value={name.firstName}
        />
        <input
          type="text"
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
          value={name.lastName}
        />
        <button onClick={(event) => handleSubmit(event)}>Submit</button>
      </form>
    </div>
  );
}
```

In this example, we create a form component that manages the state of two input fields for first name and last name using React's useState hook. We update the state on input change events and handle form submission by logging the current state to the console. This demonstrates a basic implementation of handling multiple inputs and form submission in React.

#### State variables for managing input values

```jsx
const [name, setName] = useState({ firstName: "", lastName: "" });
```

#### Function to handle form submission

```jsx
function handleSubmit(event) {
  event.preventDefault();
  console.log(name);
}
```

`event.preventDefault();` Prevent the default form submission behavior. means that the site's not going to automatically refresh the page after submission.

####

```jsx
onChange={(event) => setName({ ...name, lastName: event.target.value })}
```

In React, the onChange event is commonly used with form input elements (like text inputs) to capture changes made by the user. It triggers whenever the value of the input field changes.

- `onChange={(event) => ...}`: This part sets up an event listener for changes in the input field. Whenever the user types or modifies the input, this function will be invoked.
- `event`: This represents the event object triggered by the change in the input field. It contains information about the event, such as the target element (the input field) and its current value.
- `setName({ ...name, lastName: event.target.value })`: Inside the event handler, this line updates the state of the component using the setName function provided by the useState hook.
- `setName()`: This function is used to update the state variable name. It takes an object as an argument, which represents the new state.
- `{ ...name, lastName: event.target.value }`: This is an object `spread syntax`. It creates a new object that copies all the properties from the current name state object and updates the lastName property with the value entered by the user (event.target.value).

\*`Spread syntax`, represented by the three dots `(...)`, is a feature introduced in `ECMAScript` 2015 (ES6) that allows an iterable (like an array or an object) to be expanded into individual elements. It is used in various contexts in JavaScript to make copies of arrays or objects, merge arrays or objects, and pass function arguments dynamically.\*\*

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
```

So, in summary, when the user types in the input field for the last name, the onChange event handler updates the state of the component by setting the lastName property of the name state object to the value entered by the user. This ensures that the component's state reflects the latest user input, allowing for dynamic updates and interactions within the form.

## Contributing

If you have any suggestions, corrections, or improvements to make to my code or documentation, feel free to open an issue or submit a pull request. Your contributions are highly appreciated!

## Resources

Here are some helpful resources I've found useful during my learning journey:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [React Router Documentation](https://reactrouter.com/)
- [Redux Documentation](https://redux.js.org/)

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

If you have any suggestions, corrections, or improvements to make to my code or documentation, feel free to open an issue or submit a pull request. Your contributions are highly appreciated!

## Resources

Here are some helpful resources I've found useful during my learning journey:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [React Router Documentation](https://reactrouter.com/)
- [Redux Documentation](https://redux.js.org/)

## License

This project is licensed under the [MIT License](LICENSE).
