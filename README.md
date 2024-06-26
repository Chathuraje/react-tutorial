# React Tutorial Repository - JavaScript Version

Welcome to my React tutorial repository! Here, I document my journey of learning React through various video series. Each time I push to this repository, I'll update the progress I've made.

## Current Progress

- 📝 **Title**: Day 5.8: Migration to TypeScript
- 📝 **Topics Covered**: TypeScript is an open-source programming language developed by Microsoft. It is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code, but TypeScript extends JavaScript by adding static typing.
- 📝 **Date**: 2024-03-27

## Previous Progress

- ✅ **Title**: Day 5.7: Integrating Material-UI (MUI) with React
- ✅ **Topics Covered**: Introduces Material-UI (MUI) and its key features, including reusable components, theming support, accessibility, and responsive design. It provides a step-by-step guide on how to integrate Material-UI into a React project, covering installation, setting up the ThemeProvider, and using Material-UI components. Additionally, it encourages readers to explore Material-UI's documentation and examples for further learning.
- 📝 **Date**: 2024-03-27

## Table of Contents

1. [Introduction to React](#day-11-introduction-to-the-react-%EF%B8%8F)
2. [Essential Development Tools](#day-12-essential-development-tools-%EF%B8%8F)
3. [Creating a React App with Vite](#day-13-creating-a-react-app-with-vite-%EF%B8%8F)
4. [Project Cleanup Procedures](#day-14-project-cleanup-procedures-%EF%B8%8F)
5. [Creating and Managing React Components](#day-15-creating-and-managing-react-components-%EF%B8%8F)
6. [Understanding JSX in React](#day-16-understanding-jsx-in-react-%EF%B8%8F)
7. [Component Reusability and Props Usage](#day-17-component-reusability-and-props-usage-%EF%B8%8F)
8. [Rendering Lists and Objects](#day-18-rendering-lists-and-objects-%EF%B8%8F)
9. [Loop Rendering of Components](#day-19-loop-rendering-of-components-%EF%B8%8F)
10. [Conditional Rendering in React](#day-110-conditional-rendering-in-react-%EF%B8%8F)
11. [Conditional Rendering of List Items](#day-111-conditional-rendering-of-list-items-%EF%B8%8F)
12. [Event Handling](#day-112-event-handling-%EF%B8%8F)
13. [Understanding State Management](#day-112-understanding-state-management-%EF%B8%8F)
14. [Handling Input Fields](#day-114-handling-input-fields-%EF%B8%8F)
15. [Managing Multiple Inputs and Form Submission](#day-115-managing-multiple-inputs-and-form-submission-%EF%B8%8F)
16. [Styling Components with CSS and CSS Modules](#day-116-styling-components-with-css-and-css-modules-%EF%B8%8F)
17. [Understanding Component Lifecycle and useEffect Hook](#day-117-understanding-component-lifecycle-and-useeffect-hook-%EF%B8%8F)
18. [Fetching Data from APIs](#day-118-fetching-data-from-apis-%EF%B8%8F)
19. [Introduction to React Router Dom](#day-119-introduction-to-react-router-dom-%EF%B8%8F)
20. [Advanced State Management Techniques with useContex](#day-21-advanced-state-management-techniques-%EF%B8%8F)
21. [Optimizing Data Fetching with React-Query](#day-22-optimizing-data-fetching-with-react-query-%EF%B8%8F)
22. [Form Validation with React Hook Forms and YUP](#day-31-form-validation-with-react-hook-forms-and-yup-%EF%B8%8F)
23. [Create and Manage Custom Hooks](#day-32-create-and-manage-custom-hooks-%EF%B8%8F)
24. [React Type Safety](#day-33-react-type-safety-%EF%B8%8F)
25. [State Management Using Redux Toolkit](#day-34-state-management-using-redux-toolkit-%EF%B8%8F)
26. [Class Components In React](#day-41-class-components-in-react-%EF%B8%8F)
27. [Caching with useMemo](#day-42-caching-with-usememo-%EF%B8%8F)
28. [Caching with useCallback](#day-43-caching-with-usecallback-%EF%B8%8F)
29. [Storage Managment with useLocalStorage](#day-44-storage-managment-with-uselocalstorage-%EF%B8%8F)
30. [Store Reference to a DOM element using useRef](#day-51-store-reference-to-a-dom-element-using-useref-%EF%B8%8F)
31. [Managing complex state logic with useReducer](#day-52-managing-complex-state-logic-with-usereducer-%EF%B8%8F)
32. [Passing Values from Child to Parent Components via useImperativeHandle](#day-53-passing-values-from-child-to-parent-components-via-useimperativehandle-%EF%B8%8F)
33. [Add transition to UI element using useTransition](#day-54-add-transition-to-ui-element-using-usetransition-%EF%B8%8F)
34. [Manage asynchronous updates in concurrent React mode using useDeferredValue](#day-55-manage-asynchronous-updates-in-concurrent-react-mode-using-usedeferredvalue-%EF%B8%8F)
35. [Synchronous Execution with useLayoutEffect](#day-56-synchronous-execution-with-uselayouteffect-%EF%B8%8F)
36. [Integrating Material-UI (MUI) with React](#day-57-integrating-material-ui-mui-with-react-%EF%B8%8F)
37. [Migration to TypeScript](#day-58-migration-to-type-%EF%B8%8F)

## Day 1.1: [Introduction to the React](https://github.com/Chathuraje/react-tutorial/tree/a6b8718a6d4869872272c9906a7c01c3e54001b9) [⬆️](#table-of-contents)

React is a JavaScript library for building user interfaces. It was developed by Facebook and is widely used for building modern web applications. Some key features of React include:

- **Component-Based Architecture**: React follows a component-based architecture, where the UI is broken down into reusable components. Each component manages its own state, making it easier to build and maintain complex user interfaces. Components can be composed together to create larger, more complex UIs, resulting in a modular and scalable codebase.
- **Declarative Syntax**: React uses a declarative syntax, allowing developers to describe how the UI should look at any given point in time. This makes the code more readable and easier to understand, as developers can focus on what the UI should look like rather than how to manipulate the DOM to achieve it. Declarative programming also leads to more predictable code behavior and fewer bugs.
- **Virtual DOM**: React utilizes a virtual DOM to efficiently update the UI. Instead of directly manipulating the browser's DOM, React creates a lightweight virtual representation of the DOM in memory. When changes are made to the UI, React compares the virtual DOM with the real DOM and only applies the necessary updates, minimizing DOM manipulation and improving performance.
- **One-Way Data Binding**: React implements one-way data binding, also known as unidirectional data flow. Data flows from parent components to child components via props, ensuring that changes in the parent component automatically propagate down to its children. This simplifies data management and reduces the likelihood of unexpected side effects, making the codebase more maintainable and easier to reason about.
- **Rich Ecosystem and Community Support**: React has a vibrant ecosystem with a wide range of libraries, tools, and resources available to developers. This includes libraries for state management (e.g., Redux, MobX), routing (e.g., React Router), form handling (e.g., Formik), and much more. Additionally, React has a large and active community of developers who contribute to its ongoing development, provide support, and share knowledge through forums, tutorials, and conferences.

## Day 1.2: [Essential Development Tools](https://github.com/Chathuraje/react-tutorial/tree/9e484e6c0d370a26eb301feb070e011f063719e6) [⬆️](#table-of-contents)

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

## Day 1.3: [Creating a React App with Vite](https://github.com/Chathuraje/react-tutorial/tree/330064cf153d64c3b9faed969946174f9bc20470) [⬆️](#table-of-contents)

If you prefer using `Vite` as a build tool for your React projects, you can create a new React app using Vite. Here's how:

### Creating a New React App with Vite

1. **Install Vite Globally**: If you haven't already installed Vite globally, you can do so using npm:

   ```bash
   npm install vite@latest
   ```

2. **Create a New React App**: Once Vite is installed, you can use it to create a new React app:

   ```bash
   npm create vite@latest
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

## Day 1.4: [Project Cleanup Procedures](https://github.com/Chathuraje/react-tutorial/tree/e257e70759a860e4bd7d25daf0cd41cb08a9a895) [⬆️](#table-of-contents)

Today's focus is on streamlining our project by removing unnecessary files and directories. This step is crucial for maintaining a clean and organized codebase, which ultimately contributes to better development efficiency and code readability. By cleaning up the project, we aim to create a more focused and efficient development environment, allowing us to better focus on implementing new features and improving existing ones.

## Day 1.5: [Creating and Managing React Components](https://github.com/Chathuraje/react-tutorial/tree/8051bad2e9f5c3bc583669f771ec2248a1bb7c38) [⬆️](#table-of-contents)

Today, I delved into the fundamental concept of creating React components. I gained insights into how components are structured and utilized to construct user interfaces efficiently.

### Steps to Create a React Component:

1. **Identify Component Purpose**: Determine the purpose of the component and its role within the application's UI.

2. **Create a New File**: Inside the `components` folder of your React project, create a new file for the component. Ensure that the file name starts with a capital letter and has a .jsx extension.

3. **Define the Component**: In the newly created file, define the component as a JavaScript function. This function should return JSX, a syntax similar to HTML but with the power of JavaScript. Structure the JSX to represent the desired UI elements and their interactions.

4. **Export the Component**: To make the component accessible to other parts of the application, export it using the `export default` syntax followed by the component name.

#### Method 1

```jsx
function Hello() {
  return <h1>This is a Component!</h1>;
}

export default Hello;
```

#### Method 2

```jsx
export default function Hello() {
  return <h1>This is a Component!</h1>;
}
```

#### Method 3

```jsx
export const Hello = () => {
  return <h1>This is a Component!</h1>;
};
```

5. **Integrate the Component**: Import the newly created component into the main component or any other component where it is required. Use the component as you would any HTML tag, passing props as necessary.

#### Method 1 and 2 Imports

```jsx
import Hello from "./components/Hello";
```

#### Method 3 Imports

```jsx
import { Hello } from "./components/Hello";
```

#### Usage Example:

```jsx
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

### Shortcut to Generate Components:

The ES7 React/Redux/GraphQL/React-Native snippets extension for Visual Studio Code provides shortcuts, or snippets, to quickly generate common code patterns when working with React, Redux, GraphQL, and React Native projects.

To install and use this extension, you can follow these steps:

1. Open Visual Studio Code.
2. Go to the `Extensions` view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`.
3. Search for `ES7 React/Redux/GraphQL/React-Native snippets` in the Extensions Marketplace.
4. Click on the Install button next to the extension.

Once installed, you can start using the snippets in your React, Redux, GraphQL, or React Native projects.

In this case, `rafce` is one of the snippets provided by the extension. It stands for `React Arrow Function Component with Export`. When you type rafce in a React component file and press `Tab` or `Enter`, it expands into a basic React functional component using arrow function syntax, along with the necessary import statement and export statement. This saves you time and effort by automatically generating boilerplate code.

```
rafce
```

Here are some other useful shortcuts provided by this extension:

- `rconst`: Generates a constructor for initializing state in a React component.
- `rprop`: Creates a PropTypes declaration for a prop in a React component.
- `rfc`: Generates a basic React functional component.
- `rcc`: Generates a basic React class component.
- `imr`: Inserts an import statement for React.
- `imrc`: Inserts import statements for React and Component.
- `imrn`: Inserts an import statement for React Native.
- `sl`: Creates a styled-component in a React or React Native file.

## Day 1.6: [Understanding JSX in React](https://github.com/Chathuraje/react-tutorial/tree/4bdd47844f1cdb1c4b7a7f98751a0d7941d7d6be) [⬆️](#table-of-contents)

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

## Day 1.7: [Component Reusability and Props Usage](https://github.com/Chathuraje/react-tutorial/tree/8e29f6275e85e8509bc0bc9185a0ad7fe9ea59c9) [⬆️](#table-of-contents)

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

## Day 1.8: [Rendering Lists and Objects](https://github.com/Chathuraje/react-tutorial/tree/43010536dafd4398c71760ff7a151ecabc588f07) [⬆️](#table-of-contents)

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

## Day 1.9: [Loop Rendering of Components](https://github.com/Chathuraje/react-tutorial/tree/15a53a2e38fc1e3c9e3836f7c956acc45971270a) [⬆️](#table-of-contents)

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

## Day 1.10: [Conditional Rendering in React](https://github.com/Chathuraje/react-tutorial/tree/ceee93be01a83f82468622ef15ab42581e826bf6) [⬆️](#table-of-contents)

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

## Day 1.11: [Conditional Rendering of List Items](https://github.com/Chathuraje/react-tutorial/tree/c9d7fb3acfaa75b184247335c0d2013b2c4ed5b2) [⬆️](#table-of-contents)

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

## Day 1.12: [Event Handling](https://github.com/Chathuraje/react-tutorial/tree/ac1f381706b4d2064723ef4b1bc4997e9966a6f4) [⬆️](#table-of-contents)

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

## Day 1.12: [Understanding State Management](https://github.com/Chathuraje/react-tutorial/tree/25efebef11bd4c020a3b853eaff2005fc8bfe0f2) [⬆️](#table-of-contents)

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

## Day 1.14: [Handling Input Fields](https://github.com/Chathuraje/react-tutorial/tree/09a66e64a07657c6348a9116c3578bb1e53d7b06) [⬆️](#table-of-contents)

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

## Day 1.15: [Managing Multiple Inputs and Form Submission](https://github.com/Chathuraje/react-tutorial/tree/bd8c712d4fcdf188c41db8a33aeb30022fa897a0) [⬆️](#table-of-contents)

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

## Day 1.16: [Styling Components with CSS and CSS Modules](https://github.com/Chathuraje/react-tutorial/tree/7f052b06c51571f668a63fb7c7c5828a4af5037f) [⬆️](#table-of-contents)

The focus is on understanding and effectively utilizing CSS within React applications, particularly emphasizing the usage of CSS Modules. CSS (Cascading Style Sheets) plays a crucial role in defining the visual presentation of web applications, and integrating it seamlessly with React components is essential for building engaging user interfaces. The tutorial likely covers various aspects of working with CSS in React, such as applying inline styles directly to JSX elements and importing external CSS files into React components. Additionally, it delves into the concept of CSS Modules, a popular approach for styling React applications. CSS Modules offer a solution to the problem of global scope pollution by providing local scoping for styles within individual components. By automatically generating unique class names for each CSS module, CSS Modules ensure that styles are encapsulated and do not interfere with other components. The tutorial is expected to guide learners through the process of setting up and using CSS Modules, highlighting their advantages over traditional CSS approaches in terms of maintainability, modularity, and avoiding naming conflicts. Overall, Day 1.16 aims to equip learners with the necessary skills and best practices for effectively managing styles in React applications, thus enhancing the overall user experience and maintainability of the codebase.
App.jsx

```jsx
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
```

### Inline Styles

React allows you to apply styles directly to JSX elements using inline styles. This is achieved by passing a JavaScript object with style properties to the style attribute of an element.

```jsx
export default function Header() {
  const headerStyle = {
    textAlign: "center",
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 0",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
  };

  return (
    <header style={headerStyle}>
      <h1 style={headingStyle}>My React App</h1>
    </header>
  );
}
```

### External Stylesheets

You can also include traditional CSS files in your React project. This method works similarly to how it's done in regular HTML files. You import the CSS file into your component or index.js file, and React takes care of applying the styles.

##### Header.css

```css
.header {
  text-align: center;
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

.headerh1 {
  font-size: 2rem;
  font-weight: bold;
}
```

##### Header.jsx

```jsx
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="headerh1">My React App</h1>
    </header>
  );
}
```

### CSS Modules

CSS Modules are a popular approach for styling React applications. They offer a way to scope CSS locally to a component, preventing styles from leaking into other components. Here's how CSS Modules typically work.

- **Local Scoping**: CSS Modules automatically generate unique class names for each CSS module. This ensures that styles are scoped locally to the component where they are imported.
- **Importing CSS Modules**: In React components, you import CSS Modules like regular JavaScript modules. You then use the imported class names in your JSX, and React takes care of applying the appropriate styles.
- **Benefits**: CSS Modules help maintain a clean and modular codebase by encapsulating styles within components. They also prevent naming conflicts and make it easier to manage styles in large projects.

##### Hrader.module.css

```css
.header {
  text-align: center;
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

.headerh1 {
  font-size: 2rem;
  font-weight: bold;
}
```

##### Header.jsx

```jsx
import Styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={Styles.Header}>
      <h1 className={Styles.headerh1}>My React App</h1>
    </header>
  );
}
```

## Day 1.17: [Understanding Component Lifecycle and useEffect Hook](https://github.com/Chathuraje/react-tutorial/tree/7eaaf3881c88d1ed8df05d62cb389a3066dff736) [⬆️](#table-of-contents)

In React, components have a life cycle that consists of several stages: mounting, updating, and unmounting. Each stage serves a specific purpose in managing the behavior and appearance of components throughout their existence within the application.

### `UseEffect` and Its Role in Component Life Cycle

The `useEffect` hook in React provides a way to perform side effects in functional components. It combines the functionality of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` into a single hook, allowing developers to manage side effects in a declarative and concise manner.

#### App.jsx

```jsx
import UseEffects from "./components/UseEffects";

function App() {
  return (
    <div className="App">
      <UseEffects />
    </div>
  );
}

export default App;
```

#### UseEffects.jsx

```jsx
import { useState } from "react";
import Counter from "./Counter";

export default function UseEffects() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <button onClick={() => setStatus(!status)}>Mount/Unmount</button>

      {status ? <Counter /> : ""}
    </div>
  );
}
```

#### Counter.jsx

```jsx
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Mounting the component
  useEffect(() => {
    console.log("Component Mounted");
  }, []); // Empty dependency array ensures the effect runs only once after mounting);

  // Updating the component
  useEffect(() => {
    console.log("Component Updating");
  }, [count]); // Runs every time the count state changes

  // Dismounting the component
  useEffect(() => {
    return () => {
      console.log("Component Unmounting");
    };
  }, []); // Empty dependency array ensures the effect runs only once after mounting);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Mounting Stage

The mounting stage occurs when a component is first created and inserted into the DOM. During this stage, the component goes through the following methods in sequential order:

```jsx
useEffect(() => {
  // Perform side effects after the component is mounted
  console.log("Component mounted");
}, []); // Empty dependency array ensures the effect runs only once after mounting);
```

- `constructor()`: This method is called when the component is initialized. It is typically used for initializing state and binding event handlers.
- `render()`: The render method returns the JSX representation of the component's UI.
- `componentDidMount()`: This method is invoked immediately after the component is mounted. It is often used for fetching data from an external source or initializing subscriptions.

### Updating Stage

The updating stage occurs when a component is re-rendered due to changes in props or state. This stage involves the following methods:

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Component Updating");
}, [count]); // this will check the changes to the component and trigger the useEffect hook when the component is re-rendered: becouse count state is changing.
```

- `render()`: The render method is called again to generate the updated JSX representation of the component's UI.
- `componentDidUpdate()`: This method is invoked after the component's update is reflected in the DOM. It is commonly used for performing side effects such as updating the DOM or fetching additional data based on the new state or props.

### Unmounting Stage

The unmounting stage occurs when a component is removed from the DOM. During this stage, the following method is called:

```jsx
useEffect(() => {
  const [count, setCount] = useState(0);

  return () => {
    // Perform side effects before the component is unmounted
    console.log("Component unmounted");
  };
}, [count]); // Empty dependency array ensures the effect runs only once after mounting);
```

- `componentWillUnmount()`: This method is invoked immediately before a component is unmounted and destroyed. It is often used for cleanup tasks such as cancelling timers or removing event listeners.

The usage of component life cycle methods and the useEffect hook in React can vary depending on the specific requirements of your application. Here are some common scenarios where you might utilize these features:

### Component Life Cycle Methods:

- **Initializing State**: Use the `constructor()` method to initialize state and bind event handlers.
- **Fetching Data**: Utilize `componentDidMount()` to fetch data from an external source after the component is mounted.
- **Updating DOM**: Use `componentDidUpdate()` to perform operations on the DOM or update external resources in response to changes in props or state.
- **Cleanup Tasks**: Utilize `componentWillUnmount()` to perform cleanup tasks such as canceling timers or removing event listeners before the component is unmounted.

### `useEffect` Hook:

- **Performing Side Effects**: Use `useEffect()` to perform side effects such as `data fetching`, `DOM manipulatio`n, or `subscribing` to external events.
- **Conditional Side Effects**: Pass dependencies to `useEffect()` to trigger side effects only when certain values have changed.
- **Cleaning Up**: Return a cleanup function from `useEffect()` to perform cleanup tasks before the component unmounts or before the effect runs again.
- **Subscribing to Events**: Use `useEffect()` to subscribe to events like scroll or resize events, and remember to unsubscribe in the cleanup function.
- **Document Title Update**: Utilize `useEffect()` to update the document title dynamically based on the component's state or props.

By leveraging these features, you can effectively manage the life cycle of React components and handle side effects in a declarative and efficient manner, ensuring your application behaves as expected and remains maintainable.

## Day 1.18: [Fetching Data from APIs](https://github.com/Chathuraje/react-tutorial/tree/a641b385693c360e1765f4744df8a2adb7007602) [⬆️](#table-of-contents)

API URL: https://meowfacts.herokuapp.com/

```json
{
  "data": [
    "Of all the species of cats, the domestic cat is the only species able to hold its tail vertically while walking. All species of wild cats hold their talk horizontally or tucked between their legs while walking."
  ]
}
```

To fetch data from an API in a React application, you can use the fetch API or libraries like Axios. Here's a basic example of how you can fetch data using the fetch API in a React component:

#### JavaScript

```javascript
function FetchData() {
  fetch("https://meowfacts.herokuapp.com/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
```

Axios is a popular JavaScript library used for making HTTP requests from both the browser and Node.js environments. It provides an easy-to-use API for performing asynchronous HTTP requests, making it a convenient choice for fetching data from APIs in React applications and other JavaScript projects. Axios offers several advantages over the native fetch API:

- **Simpler API**: Axios provides a simpler and more intuitive API for making HTTP requests compared to the native fetch API, especially when dealing with request headers, response handling, and error handling.
- **Automatic JSON parsing**: Axios automatically parses JSON responses, whereas with fetch, you need to explicitly call the .json() method on the response object to parse JSON.
- **Request cancellation**: Axios supports canceling requests, which can be useful in scenarios where you need to cancel pending requests, such as when a user navigates away from a page or performs a new request before the previous one completes.
- **Interceptors**: Axios allows you to define request and response interceptors, which are functions that can be executed before a request is sent or after a response is received. This provides a convenient way to globally handle request or response modifications, such as adding authentication headers.

To install Axios for use in your project, you typically use npm (Node Package Manager) or yarn, which are package managers for Node.js. Here's how you can install Axios using npm or yarn:

### Using npm:

Open your terminal or command prompt and navigate to your project directory. Then, run the following command. This command will download and install Axios into your project, and it will add Axios as a dependency in your package.json file.

```bash
npm install axios
```

### Using yarn:

If you prefer using yarn, you can install Axios by running the following command in your terminal or command prompt within your project directory. Like npm, this command will download and install Axios into your project and add it as a dependency in your package.json file.

```bash
yarn add axios
```

Once Axios is installed, you can import it in your JavaScript files and start using it to make HTTP requests, as shown in the previous examples.

```jsx
import axios from "axios";
```

After installing Axios, you can use it in your React components or any other JavaScript files within your project.

### Example 1:

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData() {
  const [catFacts, setCatFacts] = useState("");

  function fetchCatFacts() {
    axios.get(`https://meowfacts.herokuapp.com/`).then((response) => {
      setCatFacts(response.data.data[0]);
    });
  }
  useEffect(() => {
    fetchCatFacts();
  }, []);

  return (
    <div>
      <button onClick={fetchCatFacts}>Show the Cat Facts!</button>
      <p>{catFacts}</p>
    </div>
  );
}
```

This is a React component named FetchData. It's written using functional component syntax, leveraging hooks like `useState` and `useEffect`. The component fetches random cat facts from an external API and displays them.

#### Imports:

The component imports `useState` and `useEffect` from React to manage state and side effects respectively. It also imports axios to make HTTP requests.

#### State:

`catFacts` state variable holds the fetched cat fact.

#### Data Fetching:

`fetchCatFacts` function uses `axios.get()` to fetch data from the API endpoint https://meowfacts.herokuapp.com/. Upon receiving a response, it updates the catFacts state with the first cat fact from the response.

#### Effect Hook:

`useEffect` hook is utilized to execute `fetchCatFacts` when the component mounts ([] passed as dependency ensures it runs only once).

#### Rendering:

Returns JSX describing the UI: A button triggers `fetchCatFacts` on click. A paragraph displays the fetched catFacts.

Overall, this component provides an interactive way to fetch and display random cat facts.

### Example 2:

API URL: https://api.agify.io/?name=chathura

```json
{
  "count": 86,
  "name": "chathura",
  "age": 37
}
```

```jsx
import axios from "axios";
import { useState } from "react";

export default function FetchDataWithInputs() {
  const [name, setName] = useState(null);
  const [data, setData] = useState(0);

  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
      //   console.log(response.data);
      setData(response.data);
    });
  };

  return (
    <div>
      <h1>How Old am I?</h1>
      <input
        type="text"
        placeholder="Enter a name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Data...</button>

      <h3>Name: {data?.name}</h3>
      <h3>Predicted Age: {data?.age}</h3>
      <h3>Count: {data?.count}</h3>
    </div>
  );
}
```

This code is a React component named FetchDataWithInputs that utilizes Axios for making HTTP requests and React's useState hook for managing state. The component renders a simple UI consisting of an input field for entering a name and a button to trigger data fetching.

- **Component Initialization**: The component initializes state variables `name` and `data` using the `useState` hook. name stores the user-entered name, initially set to `null`, while data holds the fetched data, initialized with a default value of `0`.

- **Data Fetching Function**: The `fetchData` function is defined to fetch data from the `Agify API`. It utilizes `Axios` to send a GET request to the API endpoint https://api.agify.io/, with the entered name as a query parameter. Upon receiving the response, the function updates the data state variable with the retrieved data.

- **User Interface Rendering**: The component renders a simple user interface consisting of a heading "How Old am I?", an input field for entering a name, and a button labeled "Predict Data...". The `onChange` event handler for the input field updates the name state variable as the user types. The button's `onClick` event triggers the fetchData function when clicked.

- **Dynamic Data Display**: The component dynamically displays the fetched data within `<h3>` elements. It uses optional chaining (`?`) to prevent `errors` in case the data is `not yet available`. The displayed data includes the name, predicted age, and count retrieved from the Agify API response.

- **Overall Functionality**: This component enables users to input a name, fetch data from the Agify API based on that name, and display the predicted age and count associated with it. It provides a simple and interactive way for users to explore the predicted age statistics for different names.

## Day 1.19: [Introduction to React Router Dom](https://github.com/Chathuraje/react-tutorial/tree/b1199e49507a20c8e9cccb8a967200078f1048ef) [⬆️](#table-of-contents)

"React Router Dom" is a popular routing library for React applications. Routing refers to the process of determining what content to display based on the URL or other factors. In a single-page application (SPA) built with React, routing enables navigation between different views or components without the need for a full page reload.

- **BrowserRouter**: This component provides the router functionality to your application. It uses HTML5 history API to keep the UI in sync with the URL.
- **Route**: The `<Route>` component is used to define a mapping between a URL path and the component to render when the path matches. It's typically used inside a `<Switch>` component.
- **Switch**: `<Switch>` is used to render the first child `<Route>` or `<Redirect>` that matches the current location. This helps in rendering a single route exclusively.
- **Link**: The `<Link>` component is used to navigate between different views in your application. It's similar to the `<a>` tag in HTML, but instead of triggering a full page reload, it updates the URL and renders the appropriate component.
- **Redirect**: This component is used to redirect users to a different location within the application. It's often used conditionally or in response to certain actions.
- **Nested Routing**: React Router Dom supports nested routing, allowing you to define routes within routes. This is useful for building complex applications with multiple layers of navigation.

To install `React Router Dom` for use in your project, you typically use `npm` (Node Package Manager) or `yarn`, which are package managers for Node.js. Here's how you can install `react-router-dom` using `npm` or `yarn`:

### Using npm:

Open your terminal or command prompt and navigate to your project directory. Then, run the following command. This command will download and install `react-router-dom` into your project, and it will add `react-router-dom` as a dependency in your package.json file.

```bash
npm install react-router-dom
```

Once `react-router-dom` is installed, you can import it in your JavaScript files and start using it to make HTTP requests, as shown in the previous examples.

```jsx
import {*} from "react-router-dom";
```

After installing `react-router-dom`, you can use it in your React components or any other JavaScript files within your project.

### Folder Structure

```
src
- Component
  - Header.jsx
  - Footer.jsx
- pages
  - Home.jsx
  - About.jsx
  - Menu.jsx
  - Profile.jsx
  - 404.jsx
- App.jsx
- main.jsx
```

#### App.jsx

```jsx
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Error404 from "./pages/404";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
```

This code is a basic example of how to set up routing in a React application using React Router. Let's break it down step by step:

- **Imports**: The code imports various components from different files. These components include Home, Menu, About, Profile, Error404, Header, and Footer. These components seem to represent different pages or parts of the application
- **React Router Imports**: The code also imports necessary components from `React Router`, such as `BrowserRouter`, `Routes`, and `Route`. These are used for defining the routing behavior of the application.
- **Router Setup**: Inside the App component, a `<Router>` component is used from React Router. This sets up the routing context for the application.
- **Routes**: Inside the `<Router>`, there's a `<Routes>` component. This component is where you define the routes of your application.
- **Route Definitions**: Within the `<Routes`> component, there are several `<Route>` components. Each `<Route>` represents a different URL path in the application. The path attribute of each `<Route>` defines the URL path it corresponds to. The element attribute defines what component should be rendered when the URL matches the specified path.
  - For example, when the URL matches `"/"`, the `<Home>` component will be rendered.
  - In the case of `dynamic` routes like `/profile/:username`, `:username` is a placeholder for the actual username value in the URL. This value can be accessed inside the Profile component using React Router's `useParams()` hook.
- **Header and Footer**: The Header component is rendered before the `<Routes>`, and the Footer component is rendered after the `<Routes>`. These components likely represent common elements that should appear on every page of the application.

In summary, this code sets up routing for a React application using React Router. It defines different routes for different parts of the application and renders corresponding components based on the URL path.

#### Header.jsx

```jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <center>
          <Link to="/">Home</Link> ||
          <Link to="/menu">Menu</Link>||
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </center>
      </nav>
    </div>
  );
}
```

This code defines a Header component that serves as a navigation bar for your React application. Let's go through it step by step:

- **Import Statement**: The code imports the Link component from `react-router-dom`. This component is used to create navigation links that allow users to navigate between different routes in the application.
- **Navigation Links**: Inside the nav element, there are several `<Link>` components. Each `<Link>` component represents a navigation link in the header.
  The to prop of each `<Link>` specifies the path to which the link should navigate when clicked. For example, `<Link to="/">` navigates to the `root` path, `<Link to="/menu">` navigates to the "`/menu`" path, and so on.

In summary, this Header component provides a simple navigation bar with links to different routes of your React application using the Link component from react-router-dom. When users click on these links, they will navigate to the corresponding routes defined in your application's routing configuration.

#### Footer.jsx

```jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <nav>
        <center>
          <h2>This is the Footer</h2>
          <Link to="/">Home</Link> ||
          <Link to="/menu">Menu</Link>||
          <Link to="/about">About</Link>
        </center>
      </nav>
    </div>
  );
```

This code defines a Footer component that serves as a footer bar for your React application.

#### About.jsx

```jsx
import { useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the About Page!</h1>

      <button
        onClick={() => {
          navigate("/menu");
        }}
      >
        Change to Menu Page
      </button>
    </div>
  );
}
```

This code defines an About component, which represents one of the pages in your React application. Let's break down what it does:

- **Import Statement**: The code imports the `useNavigate` hook from `react-router-dom`. This hook allows you to programmatically navigate to different routes within your application.
- **useNavigate Hook**: Inside the About component, the `useNavigate` hook is called to get the navigate function. This function can be used to navigate to different routes when triggered.
- **Rendering**: The component renders a `<h1>` element with the text "Welcome to the About Page!" to indicate that the user is on the About page. It also renders a `<button>` element labeled "Change to Menu Page".
- **Button Click Handler**: The `<button>` element has an `onClick` event handler attached to it. When the button is clicked, it triggers an `anonymous arrow` function. Inside this function, the navigate function obtained from the `useNavigate` hook is called with the argument "`/menu`". This instructs the application to navigate to the "`/menu`" route when the button is clicked.

In summary, this About component displays some content about the page and provides a button that, when clicked, navigates the user to the "/menu" route of the application using the useNavigate hook from react-router-dom.

#### Profile.jsx

```jsx
import { useParams } from "react-router-dom";

export default function Profile() {
  let { username } = useParams();
  return (
    <div>
      <h1>Welcome to the Profile Page!: {username}</h1>
    </div>
  );
}
```

This Profile component utilizes the useParams hook from react-router-dom to extract parameters from the URL path. Let's break down how it works:

- **Import Statement**: The code imports the `useParams` hook from `react-router-dom`. This hook allows us to access parameters from the URL. -
- **useParams Hook**: Inside the Profile component, the `useParams` hook is called to get the `username` parameter from the URL. The username variable is assigned the value of the username parameter extracted from the URL.
- **Rendering**: The component renders a `<h1>` element with the text "Welcome to the Profile Page!: " followed by the username parameter. This effectively displays the username provided in the URL as part of the page content.

In summary, this Profile component dynamically displays the username provided in the URL path, allowing for personalized content on the Profile page based on the username parameter in the URL.

## Day 2.1: [Advanced State Management Techniques](https://github.com/Chathuraje/react-tutorial/tree/470f1e9d1c10f331a49bd8ecc9106e2bc54278da) [⬆️](#table-of-contents)

### What is State Management?

State management in React refers to the management of data that changes over time within a React application. In React, components can have their own state, which determines how they render and behave based on user interactions and other factors. State management involves controlling the state of various components and ensuring that changes to this state are handled effectively and consistently throughout the application.

### Uses of State Management

State management is crucial for building dynamic and interactive user interfaces in React applications. It is used to:

- **Maintain Component State**: Allows components to hold and update their own state independently.
- **Pass Data**: Enables passing data between components efficiently.
- **Manage User Input**: Facilitates handling user interactions such as form submissions, button clicks, etc.
- **Optimize Rerenders**: Helps in optimizing the rendering process by selectively updating components when their state changes.

### How to Use State Management in React

In React, state management can be implemented using either built-in React state or external state management libraries like Redux, MobX, or Context API. Here's a basic guide on how to use state management in React using built-in state:

#### Demostration: This is not really necessary.

```jsx
const TopComponent = () => {
  const [state, setState] = useState();

  return (
    <div>
      <MiddleComponent state={state} />
    </div>
  );
};

const MiddleComponent = ({ state }) => {
  return (
    <div>
      <BottomComponent state={state} />
    </div>
  );
};

const BottomComponent = ({ state }) => {
  return <div>{state}</div>;
};
```

- This code demonstrates a simple React application with three components: TopComponent, MiddleComponent, and BottomComponent. The state management is implemented using React's built-in useState hook.

- `TopComponent`: This component initializes a state variable using the useState hook. The state variable is initialized without any initial value (undefined). This component renders MiddleComponent passing down the state variable as a prop.
- `MiddleComponent`: This component receives the state prop from TopComponent and simply renders BottomComponent, passing down the state prop further
- `BottomComponent`: This component receives the state prop from MiddleComponent and renders it inside a `<div>` element.

While the code provided does technically work, it's not an ideal pattern for several reasons:

- **Prop Drilling**: Prop drilling occurs when you pass props down multiple levels of nested components, even if intermediate components don't directly use those props. In this code, MiddleComponent doesn't use the state prop directly, but it still receives it and passes it down to `BottomComponent`. If the application grows in complexity, prop drilling can become cumbersome and make the code harder to maintain.

- **Component Coupling**: This code creates tight coupling between components. MiddleComponent and BottomComponent are dependent on the structure of TopComponent and how it manages state. If you want to reuse MiddleComponent or BottomComponent elsewhere in your application, you'll have to ensure that they receive the necessary props, even if they don't need them.

- **Scalability and Maintenance**: As your application grows, managing state and passing props down through multiple layers of components becomes increasingly complex and error-prone. It can lead to spaghetti-like code where it's difficult to track data flow and make changes without unintended consequences.

- **Testing Complexity**: When components are tightly coupled and rely on props passed down from parent components, testing becomes more difficult. You have to mock or provide props for all intermediate components even if they don't directly interact with the component you're testing.

- **Performance Impact**: Passing down props unnecessarily can have a performance impact, especially if the props contain large data structures. Even though React is efficient in handling updates, unnecessary re-renders caused by prop changes can degrade performance, especially in larger applications.

To mitigate these issues, it's often recommended to use `state management` solutions like `Redux`, `MobX`, or `Context API`, especially for managing global state or state that needs to be shared across multiple components. These solutions provide centralized state management, decoupling components and making it easier to manage and update state throughout the application.

### What It Resolves

State management in React resolves several common challenges in web application development:

- **Unidirectional Data Flow**: Ensures a predictable flow of data throughout the application, making it easier to understand and debug.
- **Centralized State**: Provides a centralized location for managing application state, making it easier to maintain and scale.
- **Performance Optimization**: Allows for efficient rendering by updating only the components whose state has changed, rather than re-rendering the entire UI.
- **Complex Component Interactions**: Facilitates handling complex interactions between multiple components by managing their shared state effectively.

### Use of Context API

#### Folder Structure

```
src
- component
  - Header.jsx
- context
  - AppContext.jsx
- pages
  - Home.jsx
  - Profile.jsx
  - ChangeProfile.jsx
- App.jsx
- main.jsx
```

#### App.jsx

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import { AppContext } from "./contexts/AppContext";

function App() {
  const [username, setUsername] = useState("John Doe");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/" element={<Profile />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;

}
```

#### Imports:

- `BrowserRouter`, `Routes`, and `Route` are components provided by React Router for handling routing in a React application. `useState` is a React hook used for managing state within functional components.

#### Usage:

- App is the main function component that serves as the `root` of the application. It defines a `state` variable `username` using the `useState` hook, initialized with the default value "John Doe".
- The `AppContext.Provider` wraps the entire application. This provider component allows the `username` state and its corresponding `setUsername` function to be accessed by any component nested within it.
- Inside the `provider`, the `Router` component from React `Router` wraps the application, enabling `client-side routing`.
- Within the Routes component, different routes are defined using the Route component. Each route specifies a path and the corresponding component to render when that path matches the URL.
  - For example, the route with `path="/"` `element={<Home />}` specifies that when the URL matches the root path, the Home component should be rendered. Similarly, the route with `path="/profile/"` `element={<Profile />}` specifies that when the URL matches the `/profile/` path, the Profile component should be rendered.

This structure sets up a basic React application with routing capabilities and manages shared state using context, providing a foundation for building more complex applications with multiple pages and shared data.

#### AppContext.jsx

```jsx
import { createContext } from "react";

export const AppContext = createContext();
```

- **Import Statement**: The file imports createContext from the React library. createContext is a function provided by React to create a new context object.

#### Context Creation:

- `createContext()` is called to create a new context object. This context object is assigned to AppContext. Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's used for sharing state between components without explicitly passing props through each level of the tree.

#### Export Statement:

`export const AppContext = createContext();` exports the created context object. This allows other components to import and use the context to access shared data or functions provided by the context.

In summary, AppContext.jsx is a file that creates a new context object using React's createContext function. This context object, named AppContext, can then be imported and used by other components within the application to share state or other data.

#### Home.jsx

```jsx
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Home() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <center>
        <h1>Welcome to the Home Page!: {username}</h1>
      </center>
    </div>
  );
}
```

#### Imports:

- **useContext**: This is a React hook used to consume the context provided by the AppContext.
- **AppContext**: This is presumably the context object created elsewhere in the application, which provides shared data like the username.

#### Function Component:

- Inside the component, `useContext` hook is used to access the `AppContext`. This hook allows you to subscribe to React context without nesting components deeply in the tree.
- The `username` value is extracted from the context using object destructuring: `{ username } = useContext(AppContext)`.
  The component returns a `JSX` structure containing a `<div>` element wrapping the content.
- Within the `<center>` element, there's an `<h1>` heading displaying a welcome message along with the username obtained from the context.

Overall, this component serves as the home page of the application, welcoming the user with a message including their username, which is obtained from the shared `AppContext`. This approach allows for centralized management of shared data across the application, enhancing reusability and maintainability.

#### Profile.jsx

```jsx
import { useContext } from "react";
import ChangeProfile from "./ChangeProfile";
import { AppContext } from "../contexts/AppContext";

export default function Profile() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <center>
        <h1>Welcome to the Profile Page!: {username}</h1>
        <ChangeProfile />
      </center>
    </div>
  );
}
```

#### ChangeProfile.jsx

```jsx
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

export default function ChangeProfile() {
  const [newUsername, setNewUsername] = useState("");
  const { username, setUsername } = useContext(AppContext);
  return (
    <div>
      <h1>Welcome to the Change Profile Sectrion!</h1>
      <h3>Username is: {username}</h3>

      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
        type="text"
        placeholder="Enter your new username"
      />
      <button onClick={() => setUsername(newUsername)}>Change Username</button>
    </div>
  );
}
```

This code defines a React functional component called ChangeProfile, which represents a section where users can change their profile information, specifically their username. Here's a breakdown of the code:

#### Imports:

- Inside the component, two state variables are initialized using the `useState` hook:

#### State and Context Hooks

- `newUsername`: This state variable holds the value of the new username entered by the user.
- `username` and `setUsername`: These are extracted from the `AppContext` using the `useContext` hook. The `username` represents the current `username`, while `setUsername` is a function to update the username in the context.

#### More Information

- An `<h3>` heading displaying the current username obtained from the context.
  An `<input>` element where users can enter their new username. The `onChange` event updates the `newUsername` state as the user types.
- A `<button>` element that, when clicked, calls the setUsername function with the new username entered by the user.

Overall, this component provides a user interface for changing the profile username. It utilizes local state to manage the new username input and the setUsername function provided by the context to update the username globally across the application. This approach allows for a centralized way to manage and update shared data across different components.

## Day 2.2: [Optimizing Data Fetching with React-Query](https://github.com/Chathuraje/react-tutorial/tree/dfaaf68a7adbe83f2ed9f46fdb50dfb8e880f586) [⬆️](#table-of-contents)

Traditionally, developers have relied on methods like manual state management or third-party libraries to handle data fetching in React applications. However, with the advent of React-Query, a powerful data-fetching library, the landscape has shifted significantly.

### What is React-Query?

`React-Query` is a library specifically designed to manage, cache, synchronize, and update server state in React applications effortlessly. It abstracts away the complexities of data fetching, providing a streamlined approach that enhances performance and scalability.

### Why Use React-Query?

- **Simplified Data Fetching**: React-Query simplifies the process of fetching data from APIs or external sources, reducing boilerplate code and cognitive load.
- **Automatic Caching**: It intelligently caches data, ensuring that subsequent requests for the same data are served from the cache, minimizing unnecessary network calls.
- **Automatic Refetching**: React-Query automatically refetches data based on configurable criteria such as stale-while-revalidate, ensuring that your application remains up-to-date without manual intervention.
- **Optimistic Updates**: It supports optimistic updates, allowing UI changes to be instantly reflected while waiting for the server response, thereby enhancing perceived performance.
- **Pagination and Infinite Loading**: React-Query seamlessly integrates with pagination and infinite loading techniques, making it easy to manage large datasets.

### Features of React-Query:

- **Declarative Queries**: Define data fetching logic declaratively using hooks, making your codebase more readable and maintainable.
- **Query Keys**: Utilize query keys to uniquely identify data queries, enabling efficient cache management and data invalidation.
- **Mutation Management**: Manage data mutations effortlessly with built-in mutation functions, ensuring consistency and reliability in data updates.
- **Loading and Error Handling**: React-Query provides built-in mechanisms for handling loading states and error conditions, enhancing user experience and error resilience.
- **Server-Side Rendering (SSR) Support**: It offers comprehensive support for server-side rendering, enabling seamless integration with server-rendered React applications.

### Installation:

To start leveraging the power of React-Query in your projects, simply install it via npm:

```bash
npm install @tanstack/react-query
```

#### Example Code:

##### App.jsx

```jsx
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
```

This file serves as the entry point for the React application. It imports the Home component and renders it within a div with the class name `App`.

##### Home.jsx

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cats from "../components/Cats";

export default function Home() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div>
      <center>
        <h1>Welcome to the Home Page!</h1>
      </center>

      <QueryClientProvider client={client}>
        <div>
          <center>
            <Cats />
          </center>
        </div>
      </QueryClientProvider>
    </div>
  );
}
```

The Home component represents the main page of the application. It imports the `QueryClient` and `QueryClientProvider` components from `@tanstack/react-query` and the `Cats` component. It creates a new instance of `QueryClient` with default options and wraps the Cats component with `QueryClientProvider`. This wrapping is crucial because it establishes a context for the `QueryClient` instance created within `Home.jsx`. By doing so, any component nested within `QueryClientProvider` can access the same instance of `QueryClient`.

```jsx
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
```

The `QueryClient` instance is created with default options, specified within the `QueryClient` constructor. In this case, the default option being set is `refetchOnWindowFocus` to `false`. This means that by default, queries will not automatically refetch when the window receives focus, providing control over when to refetch data.

##### cats.jsx

This component, `Cats`, is responsible for fetching and displaying cat facts. It utilizes the `useQuery` hook from `@tanstack/react-query` to handle asynchronous data fetching. Let's break down its functionality:

```jsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Cats() {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["catsFacts"],
    queryFn: async () => {
      const response = await axios.get("https://meowfacts.herokuapp.com/");
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error fetching data</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Cats Facts {catData?.data[0]}</h1>
      <button onClick={refetch}>ReFetch Data</button>
    </div>
  );
}
```

- **Data Fetching with `useQuery`**: The `useQuery` hook is used to fetch data `asynchronously`. It takes an object with `queryKey` and `queryFn` properties.

  - `queryKey`: A unique identifier for the query. Here, `["catsFacts"]` is used as the query key.
  - `queryFn`: A function that returns a promise resolving to the data. In this case, it's an `asynchronous` function that fetches data from the specified API endpoint using `Axios`.

- **`Loading` and `Error` States**: While the data is being fetched (`isLoading`), a loading indicator is displayed. If an error occurs during fetching (`isError`), an error message is displayed.

- **Rendering Fetched Data**: Once the data is successfully fetched, the first cat fact is displayed using `catData?.data[0]`. The `?`. operator is used for optional chaining to handle cases where `catData` might be null or undefined.

- **Manual Refetching**: A button is provided to manually trigger a data refetch using the `refetch` function. This function is provided by `useQuery` and can be called to trigger a new fetch of the data.

By utilizing `useQuery`, this component handles all aspects of data fetching, including `loading` states, `error` handling, and data `refetching`, in a concise and declarative manner. This approach ensures a seamless user experience while fetching and displaying cat facts.

For detailed documentation and usage guidelines, refer to the [official documentation](https://tanstack.com/query/latest/docs/framework/react/overview).

Embrace the simplicity and efficiency of React-Query to revolutionize your data fetching workflows in React applications!

## Day 3.1: [Form Validation with React Hook Forms and YUP](https://github.com/Chathuraje/react-tutorial/tree/3127611a8fbb169c6a0d498563ecb28601621977) [⬆️](#table-of-contents)

React Hook Forms (RHF) in tandem with YUP. This powerful combination offers a robust solution for ensuring data integrity and user input accuracy within React applications.

### What is React Hook Forms?

`React Hook Forms` is a lightweight `form management` library for React applications. It leverages React's hooks to streamline form handling, reducing boilerplate code and improving performance. With `React Hook Forms`, you can easily manage form state, handle input changes, and validate user input with minimal effort.

### What is YUP?

`YUP` is a `schema validation` library for JavaScript. It provides a simple and intuitive API for defining validation schemas and ensuring that data meets certain criteria. `YUP` is commonly used in conjunction with form libraries like React Hook Forms to validate user input and maintain data integrity.

### Why use it?

Integrating React Hook Forms with YUP offers numerous benefits:

- **Simplicity**: Both libraries are designed to be easy to use and understand, simplifying the form development process.
- **Performance**: React Hook Forms optimizes form rendering and validation, resulting in better overall performance.
- **Flexibility**: YUP's schema validation allows for complex validation rules and custom error messages, giving you full control over your form validation logic.
- **Integration**: React Hook Forms seamlessly integrates with YUP, providing a cohesive solution for form validation in React applications.
  Features:
- **Hook-based**: Utilizes React hooks for managing form state and validation, promoting a more functional approach to form development.
- **Schema Validation**: Integrates seamlessly with YUP for defining validation schemas and ensuring data integrity.
- **Customization**: Allows for custom error messages and validation rules, giving you the flexibility to tailor the validation experience to your specific needs.
- **Performance**: Optimized for performance, ensuring smooth form interactions even with complex validation logic.
- **Developer Experience**: Offers a developer-friendly API and extensive documentation, making it easy to get started with form validation in React.

### How to Install:

To start using React Hook Forms and YUP in your project, simply install them via npm:

```bash
npm install react-hook-form yup @hookform/resolvers
```

Once installed, you're ready to start building forms with robust validation using React Hook Forms and YUP.

##### Import

```jsx
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
```

1. **`import { useForm } from "react-hook-form";`**:

   - This line imports the `useForm` hook from the `"react-hook-form"` package.
   - `useForm` is a custom React hook provided by React Hook Forms library, which allows you to manage form state, handle form submission, and integrate with form validation libraries like YUP.

2. **`import * as yup from "yup";`**:

   - This line imports the entire YUP library, denoted as `yup`.
   - YUP is a schema validation library for JavaScript. It allows you to define validation schemas for your data and validate inputs against these schemas.

3. **`import { yupResolver } from "@hookform/resolvers/yup";`**:
   - This line imports the `yupResolver` function from the `"@hookform/resolvers/yup"` package.
   - `yupResolver` is a resolver function provided by the `@hookform/resolvers/yup` package, which integrates YUP with React Hook Forms.
   - When using YUP for form validation with React Hook Forms, you typically use `yupResolver` to validate your form inputs against YUP schemas.

By combining these imports, you set up your form validation process as follows:

- Use `useForm` hook from `"react-hook-form"` to manage your form's state and submission.
- Define validation schemas using YUP's validation rules.
- Use `yupResolver` from `"@hookform/resolvers/yup"` to integrate YUP's validation with React Hook Forms, ensuring that your form inputs are validated against the defined schemas.

This setup allows you to efficiently manage form validation within your React application, leveraging the capabilities of both React Hook Forms and YUP to ensure data integrity and user input accuracy.```

##### Validation: Schema

```jsx
const registerSchema = yup.object().shape({
  fullName: yup.string().required("Your Full Name is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .min(18, "Age must be at least 18 years")
    .required("Age is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Please confirm your password"),
});

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: yupResolver(registerSchema),
});
```

- **`const registerSchema = yup.object().shape({ ... });`**:

  - This section defines a YUP schema for form validation. Each field in the form (fullName, age, email, phone, password, confirmPassword) is assigned validation rules using YUP's schema API.

- **`const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema) });`**:
  - This section initializes form handling using the `useForm` hook from React Hook Forms.
  - The `resolver` option is provided to the `useForm` hook, specifying `yupResolver(registerSchema)`, which integrates the YUP schema (`registerSchema`) with React Hook Forms.
  - This setup enables form validation based on the defined YUP schema (`registerSchema`). The `register`, `handleSubmit`, and `errors` variables are destructured from the return value of the `useForm` hook for further use in managing and validating the form.

##### Implementation

```jsx
export const Form = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name" {...register("fullName")} />
      <p>{errors.fullName?.message}</p>

      <input type="number" placeholder="Age" {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="text" placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input type="text" placeholder="Phone" {...register("phone")} />
      <p>{errors.phone?.message}</p>

      <input type="password" placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      <p>{errors.fullName?.confirmPassword}</p>

      <input type="submit" />
    </form>
  );
};
```

- **`export const Form = () => { ... }`**:

  - This section defines a React functional component named `Form` using arrow function syntax.

- **`const onSubmit = (data) => { console.log(data); };`**:

  - This function `onSubmit` is called when the form is submitted. It logs the form data to the console.

- **`<form onSubmit={handleSubmit(onSubmit)}> ... </form>`**:

  - This `<form>` element specifies an `onSubmit` event handler that triggers the `handleSubmit` function provided by React Hook Forms. The `onSubmit` function defined earlier is passed as an argument to `handleSubmit`.

- **`<input type="text" placeholder="Full Name" {...register("fullName")} />`**:

  - This input field is for the user's full name. The `...register("fullName")` spreads the `register` function from React Hook Forms, which registers the input field for validation with the corresponding field name "fullName".

- **`<p>{errors.fullName?.message}</p>`**:

  - This paragraph displays an error message if validation fails for the full name input field. It accesses the error message from the `errors` object returned by React Hook Forms.
  - The use of `?` in `{errors.fullName?.message}` is a feature of JavaScript called optional chaining.

In JavaScript, when you access properties of an object, if the property you are trying to access does not exist, you'll encounter an error. For example, if errors.fullName is undefined and you try to access errors.fullName.message, it will throw an error because you cannot access properties of undefined.

To avoid this error, optional chaining (?.) was introduced in ES2020 (ECMAScript 2020). It allows you to safely access properties of an object without throwing an error if the property is null or undefined. If the property exists, its value is returned; otherwise, undefined is returned.

So, {errors.fullName?.message} checks if errors.fullName exists. If it does, it tries to access the message property of errors.fullName. If errors.fullName is null or undefined, it returns undefined without throwing an error.

Similar patterns follow for other input fields (age, email, phone, password, confirmPassword) and their respective error messages.

### Resources Link:

For more detailed documentation and examples, refer to the official documentation:

- [React Hook Forms Documentation](https://react-hook-form.com/)
- [YUP Documentation](https://github.com/jquense/yup)

## Day 3.2: [Create and Manage Custom Hooks](https://github.com/Chathuraje/react-tutorial/tree/4a9de07abd291efd804970a7d512984a307bc9b1) [⬆️](#table-of-contents)

A hook in React is essentially a function that allows you to use state and other React features within functional components. Hooks enable you to tap into React's lifecycle and state management functionalities, previously available only in class components.

### Understanding Hooks:

A hook in React is essentially a function that allows you to use state and other React features within functional components. Hooks enable you to tap into React's lifecycle and state management functionalities, previously available only in class components.

### The Usage of Custom Hooks:

Custom hooks are user-defined functions that encapsulate reusable logic. They enable developers to extract complex logic from components, promoting cleaner and more maintainable code. Whether it's fetching data from APIs, managing state, or implementing side effects, custom hooks provide a modular approach to organizing code within functional components.

### Why Use Custom Hooks?

The adoption of custom hooks offers several compelling reasons:

- **Code Reusability**: By encapsulating logic into custom hooks, developers can reuse the same functionality across multiple components, promoting a more DRY (Don't Repeat Yourself) coding practice.
- **Abstraction** of Logic: Custom hooks abstract away implementation details, allowing components to focus solely on their presentation logic. This separation of concerns enhances code readability and makes components easier to understand and maintain.

### Benefits of Custom Hooks:

- **Enhanced Modularity**: Custom hooks facilitate a modular approach to building React applications. Developers can create hooks for specific functionalities, making it easier to manage and scale codebases.
- **Improved Testing**: Separating logic into custom hooks simplifies unit testing. Since hooks are pure functions, they can be tested independently, promoting a more robust testing strategy.
- **Promotes Clean Code**: Custom hooks encourage developers to adhere to best practices such as separation of concerns and code reusability. This leads to cleaner, more maintainable codebases that are easier to debug and extend.

```jsx
export const Text = () => {
  return (
    <div>
      <h2>Text</h2>
      <p>This is a text component!</p>
    </div>
  );
};
```

#### Without Custom Hooks

```jsx
import { useState } from "react";
import { Text } from "../components/Text";

export default function Home() {
  const [isVisible, setVisble] = useState(false);

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <div>
        <button onClick={() => setVisble(!isVisible)}>
          {isVisible ? "Hide" : "Show"} Form
        </button>
        {isVisible && <Text />}
      </div>
    </div>
  );
}
```

In this code snippet, a functional component named Home is created. It uses the useState hook from React to manage the state of isVisible, which determines whether the `<Text />` component is visible or hidden. Initially, isVisible is set to false. Upon clicking the button, the state toggles between true and false, and accordingly, the "Show Form" button text changes to "Hide Form" and vice versa. The `<Text />` component is rendered conditionally based on the value of isVisible.

#### With Custom Hook

##### useToggle.js

```javascript
import { useState } from "react";

export const useToggle = (initialVal = false) => {
  const [isVisible, setIsVisble] = useState(initialVal);

  const toggle = () => {
    setIsVisble(!isVisible);
  };

  return { isVisible, toggle };

  // return [isVisible, setIsVisble] // This is the old way of returning the state and the setter function
};
```

This code defines a custom hook named useToggle. It utilizes the useState hook internally to manage the state of isVisible, initialized with a default value of false. The toggle function toggles the state of isVisible between true and false. The hook returns an object containing isVisible and toggle function, allowing components to toggle visibility easily.

##### Home.jsx

```jsx
import { Text } from "../components/Text";
import { useToggle } from "./../contexts/useToggle";

export default function Home() {
  const { isVisible, toggle } = useToggle();
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <div>
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"} Form</button>
        {isVisible && <Text />}
      </div>
    </div>
  );
}
```

In this modified version of the Home component, the useToggle custom hook is imported and utilized. Instead of managing the state directly within the component, the `isVisible` state and the toggle function are obtained from the useToggle hook. This simplifies the Home component, making it cleaner and more focused on rendering UI elements. The behavior remains the same as before, with the button toggling the visibility of the `<Text />` component.

#### Use Different Name if We Use Objects Instead of Lists

When using objects instead of lists for destructuring in JavaScript, we can assign different names to the properties being extracted. This can be particularly useful for clarity and avoiding naming conflicts.

```jsx
const { isVisible, toggle: toggleVisibility } = useToggle();
```

Reference for Another Example : [Optimizing Data Fetching with React-Query](https://github.com/Chathuraje/react-tutorial/tree/dfaaf68a7adbe83f2ed9f46fdb50dfb8e880f586)

##### CatFacts.jsx Page

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cats from "../components/Cats";

export default function Home() {
  const client = new QueryClient();

  return (
    <div>
      <center>
        <h1>Welcome to the Home Page!</h1>
      </center>

      <QueryClientProvider client={client}>
        <div>
          <center>
            <Cats />
          </center>
        </div>
      </QueryClientProvider>
    </div>
  );
}
```

##### Cats.jsx Component

```jsx
import { useGetCat } from "../contexts/useGetCat";

export default function Cats() {
  const { catData, refetchData, isLoading } = useGetCat();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Cats Facts {catData?.data[0]}</h1>
      <button onClick={refetchData}>Refetch</button>
    </div>
  );
}
```

##### useGetCat.js Hook

```javascript
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetCat = () => {
  const {
    data: catData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["catsFacts"],
    queryFn: async () => {
      const response = await axios.get("https://meowfacts.herokuapp.com/");
      return response.data;
    },
  });

  const refetchData = () => {
    refetch();
    alert("Data has been refetched!");
  };

  return { catData, refetchData, isLoading };
};
```

In conclusion, the adoption of custom hooks in React empowers developers to build more modular, maintainable, and scalable applications. By encapsulating logic into reusable functions, custom hooks streamline development workflows and promote code quality. Today's session will equip you with the skills to create and manage custom hooks effectively, unlocking new possibilities in React development.

## Day 3.3: [React Type Safety](https://github.com/Chathuraje/react-tutorial/tree/58bc44bf8f22b1b4ebe2da932a01233439000752) [⬆️](#table-of-contents)

React Type Safety refers to the practice of ensuring that the data passed between components in a React application conforms to specific data types, thus reducing the likelihood of runtime errors and improving code reliability. React itself doesn't enforce type safety inherently, as it's a JavaScript library, and JavaScript is dynamically typed. However, you can achieve type safety in React applications using various techniques:

- **PropTypes**: PropTypes is a runtime type checking system for React props and similar objects. By defining PropTypes for components, you can specify the type of data that props should be, and React will issue warnings in development if the props passed to a component don't match the specified types.

- **TypeScript**: TypeScript is a superset of JavaScript that adds optional static typing to the language. React developers often use TypeScript to bring type safety into their projects. With TypeScript, you can define interfaces or types for props, state, and other objects, allowing the TypeScript compiler to catch type-related errors at compile time rather than runtime.

- **Flow**: Flow is a static type checker for JavaScript developed by Facebook. Similar to TypeScript, Flow allows you to add type annotations to your JavaScript code to catch type errors early in development. It can be used alongside React to provide type safety.

- **Static Analysis Tools**: Tools like ESLint with plugins such as eslint-plugin-react and eslint-plugin-react-hooks can be configured to enforce best practices, including type safety guidelines. They can catch potential type-related issues during development.

- **PropTypes vs. TypeScript/Flow**: PropTypes is more of a runtime solution, as it checks types during execution. On the other hand, TypeScript and Flow offer static type checking, catching errors at compile time. While PropTypes are easier to adopt in existing JavaScript projects, TypeScript and Flow provide more comprehensive type safety features.

### Why use PropTypes

- **Documentation**: PropTypes serve as a form of documentation for components. By declaring the expected types for props, developers can easily understand what kind of data a component expects to receive.

- **Type Checking**: PropTypes provide a runtime type checking mechanism. When a component is rendered, React checks the types of the props passed to it against the PropTypes definitions. If a prop doesn't match the expected type, React will issue a warning in the console. This helps catch type-related errors during development, making it easier to debug and fix issues.

- **Code Maintainability**: PropTypes help ensure that components are used correctly throughout the application. By defining the expected prop types, developers can prevent unintended usage of components with incorrect data types.

- **Development Workflow**: PropTypes facilitate a smoother development workflow by providing immediate feedback when incorrect prop types are passed to components. This can save time by catching errors early in the development process.

- **PropTypes and API Contracts**: PropTypes define the contract between different parts of the application. They communicate expectations about the shape and types of data that components consume, making it easier to reason about component interactions and dependencies.

- **Gradual Migration**: PropTypes are especially useful in projects that are gradually adopting static type checkers like TypeScript or Flow. They provide some level of type safety without requiring a full migration to a statically typed solution.

Overall, PropTypes help improve code quality, maintainability, and developer productivity by providing a form of runtime type checking and documentation for React components. However, it's worth noting that PropTypes are primarily a runtime tool and do not provide the same level of type safety as static type checkers like TypeScript or Flow

### Instalation

```bash
npm install prop-types
```

### Usage

Once installed, you can import PropTypes in your React components and use them to define the types for your props. Here's an example of how you might use PropTypes in a React component:

```jsx
import PropTypes from "prop-types";
```

#### Home.jsx

```jsx
import { Person } from "../components/Person";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Person
        name="Alice"
        emails="people"
        age={25}
        isMarried={true}
        friends={["Chathura", "Jake", "Nore"]}
      />
    </div>
  );
}
```

#### Person.jsx

```jsx
import PropTypes from "prop-types";

export const Person = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Emails: {props.emails}</p>
      <p>Age: {props.age}</p>
      <p>Married: This Person {props.isMarried ? "is" : "is not"} Married</p>
      <p>Friends: {props.friends.join(", ")}</p>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  emails: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isMarried: PropTypes.bool.isRequired,
  friends: PropTypes.arrayOf(PropTypes.string).isRequired,
};
```

## Day 3.4: [State Management Using Redux Toolkit](https://github.com/Chathuraje/react-tutorial/tree/9a58e24375bdab1833e459680e6295c2d94891d1) [⬆️](#table-of-contents)

`Redux` is a state management library for JavaScript applications. It helps in managing the state of your application in a predictable way, making it easier to understand, debug, and test your code.

### Usage

`Redux` is commonly used in React applications, although it can be used with other JavaScript frameworks or libraries as well. It works by maintaining the state of your application in a single immutable state tree, which can only be modified by emitting actions. These actions are plain JavaScript objects describing what happened, and they are processed by special functions called reducers, which specify how the state should change in response to actions.

### Why Redux?

Redux provides several benefits, including:

- **Predictability and Debugging**: Since the state changes in Redux are explicit and predictable, it becomes easier to understand how data flows through your application and to debug issues when they arise.

- **Centralized State**: Redux keeps the state of your entire application in a single store, making it easier to manage and reason about your application's state.

- **Time-travel Debugging**: Redux enables powerful debugging techniques like time-travel debugging, where you can step forward and backward through state changes to understand how your application's state evolved over time.

### How to Install Redux Toolkit?

You can install Redux Toolkit using npm or yarn. Here's how you can install it:

```bash
npm install @reduxjs/toolkit react-redux
```

- `@reduxjs/toolkit`: This command installs the Redux Toolkit package, which is the official toolset for efficient Redux development. Redux Toolkit simplifies the process of working with Redux by providing utilities to streamline common Redux use cases, such as creating slices, defining reducers, and configuring the Redux store.

- `react-redux`: This command installs the React Redux package, which is the official React bindings for Redux. React Redux provides a set of APIs that allow React components to interact with the Redux store, such as connect and `useSelector`, enabling seamless integration of Redux state management into React components.

Once installed, you can start using Redux Toolkit in your project by importing the necessary functions and components and configuring your Redux store.

For more detailed information on Redux Toolkit, its usage, and advanced features, refer to the official Redux Toolkit documentation: [Redux Toolkit Documentation](https://redux-toolkit.js.org/)

### What is a Store?

In the context of Redux, a `store` refers to the central repository that holds the entire state tree of your Redux application. It's a plain JavaScript object that contains the current state of your application and provides methods to dispatch actions, subscribe to changes, and access the state.

The Redux store plays a crucial role in the Redux architecture. It follows the principle of a single source of truth, meaning that the entire state of your application is stored in a single object tree within the Redux store. This centralized state management makes it easier to manage and reason about the application state, especially in large and complex applications.

Key characteristics of the Redux store include:

- **Single State Tree**: The entire state of your application is represented as a single JavaScript object tree within the store. This ensures that all state changes are predictable and centralized.

- **Immutable State**: The state within the Redux store is immutable, meaning it cannot be changed directly. Instead, state changes are made by dispatching actions, which are processed by reducers to produce a new state object.

- **Dispatching Actions**: The store provides a dispatch method, which is used to dispatch actions to update the state. Actions are plain JavaScript objects that describe what happened in the application.

- **Subscribing to Changes**: Developers can subscribe to changes in the Redux store using the subscribe method. This allows components to be notified whenever the state changes, enabling them to update their UI accordingly.

Overall, the Redux store serves as the heart of the Redux architecture, providing a centralized location for managing and updating the state of your application in a predictable and scalable manner.

#### App.jsx

```jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Header } from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./contexts/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
```

This code is a React application setup using React Router for navigation and Redux for state management.

- **Provider**: This component from Redux wraps the entire application and provides the Redux store to its children. This makes the store accessible to all components in the app.
- **Router**: This component from React Router sets up the application's routing context.
- **Header**: This component represents the header of the application.
- **Routes**: This component defines the routes for the application.
- **Route**: This component defines a route within the Routes component. It specifies the path and the component to render when that path matches.

#### Header.jsx

```jsx
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav>
        <center>
          <Link to="/">Home</Link> ||
          <Link to="/login">Login</Link>
        </center>
      </nav>
    </div>
  );
};
```

This code defines a simple header component in a React application using React Router for navigation.

#### store.js

```jsx
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: { username: "" } };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
```

This code sets up a Redux store using Redux Toolkit. It also defines a slice for managing user state, including `login` and `logout` actions. Let's break down the code:

##### Imports

```jsx
import { configureStore, createSlice } from "@reduxjs/toolkit";
```

- This line imports the configureStore and createSlice functions from Redux Toolkit. These functions are used to create the Redux store and define Redux slices respectively.

##### Initial State:

```jsx
const initialState = { value: { username: "" } };
```

- This line defines the initial state for the user slice. It contains an object with a key value which initially has a username set to an empty string.

##### User Slice:

```jsx
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});
```

- This block of code creates a slice named "user" using the `createSlice` function from Redux Toolkit.
- The slice contains two reducers: `login` and `logout`. Reducers specify how the state should change in response to actions.
- The `login` reducer updates the `value` field in the state with the `payload` passed to the action.
- The `logout` reducer resets the `value` field in the state to its initial value.

##### Export Actions

```jsx
export const { login, logout } = userSlice.actions;
```

- This line exports the login and logout actions created by the createSlice function. These actions can be dispatched to update the user state.

##### Redux Store Configuration:

```jsx
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
```

- This block of code creates the Redux store using the `configureStore` function from Redux Toolkit.
- It specifies the initial state and reducers for the store. In this case, there's only one reducer (`userSlice.reducer`) which handles the user state.

Redux Toolkit simplifies the process of creating Redux stores and managing state by providing utilities like `configureStore` and `createSlice`. The `createSlice` function creates a slice of the Redux state, including `reducers` and action creators automatically. `configureStore` is used to create the Redux store with the specified `reducer`.

Overall, this code sets up a Redux store with a user slice that handles login and logout actions. It provides a structured and efficient way to manage user state in a React application.

#### Home.jsx

```jsx
import { useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector((state) => state.user.value.username);
  return <div>Welcome Home: {username}</div>;
};
```

This code defines a React functional component named Home which displays a welcome message along with the username fetched from the Redux store using the useSelector hook from react-redux.

- `useSelector` hook allows functional components to extract data from the Redux store without directly connecting to the store through `connect()`.
- By using `useSelector`, the component automatically subscribes to the Redux store, and it will re-render whenever the relevant part of the store state changes.
- This component assumes that there is a user slice in the Redux store, which contains a value object with a `username` property.
  The `Welcome Home: {username}` message will display the `username` fetched from the Redux store.

#### Login.jsx

```jsx
import { useSelector } from "react-redux";
import { Logged } from "../components/Logged";
import { Visitor } from "../components/Visitor";

export const Login = () => {
  const username = useSelector((state) => state.user.value.username);

  return <div>{username ? <Logged /> : <Visitor />}</div>;
};
```

This code defines a React functional component named Login which conditionally renders either a Logged component or a Visitor component based on whether a username is present in the Redux store.

- This is a functional component named `Login`.
- Inside the component, the `useSelector` hook is used to select and extract the `username` from the Redux store state.
- The `useSelector` hook takes a selector function as an argument. This function receives the entire Redux state as its argument and returns the specific piece of state that the component needs.
- The useSelector hook allows functional components to extract data from the Redux store without directly connecting to the store through `connect()`.
- In this case, the selector function `(state) => state.user.value.username` extracts the `username` value from the user slice of the Redux store state.
- The component then `conditionally` renders either the `Logged` component or the `Visitor` component based on whether a username is present.
- If username is truthy (i.e., it exists), the Logged component is rendered; otherwise, the Visitor component is rendered.
  Explanation:

#### Logged.jsx

```jsx
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../contexts/store";

export const Logged = () => {
  const username = useSelector((state) => state.user.value.username);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Logged in as: {username}</h2>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
```

- This code defines a React functional component named Logged. This component represents the UI for a logged-in user. It displays the username and a logout button.

##### Imports

```jsx
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../contexts/store";
```

- This code imports two hooks from react-redux: useSelector and useDispatch.
- It also imports the logout action creator from the Redux store.

##### Logged Component:

```jsx
export const Logged = () => {
  const username = useSelector((state) => state.user.value.username);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Logged in as: {username}</h2>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
```

- `useSelector` hook is used to select and extract the username from the Redux store state. It takes a selector function as an argument, which receives the entire Redux state and returns the specific piece of state that the component needs. In this case, the selector function `(state) => state.user.value.username` extracts the username value from the user slice of the Redux store state.
  `useDispatch` hook is used to get a reference to the `dispatch` function, which is used to dispatch actions to the Redux store.
- It renders a `<div>` element containing the username and a logout button.
- When the `logout` button is clicked, it `dispatches` the `logout` action using the dispatch function obtained from `useDispatch`. This action is expected to reset the user's authentication status or clear relevant state in the Redux store.

#### Visitor.jsx

```jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../contexts/store";

export const Visitor = () => {
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Login</h1>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
        type="text"
        id="login"
        placeholder="Login"
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Login
      </button>
    </div>
  );
};
```

- This code defines a React functional component named Visitor. This component represents the UI for a visitor who wants to log in. It includes a login form with an input field for the username and a login button.

##### Imports:

```jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../contexts/store";
```

- This code imports the `useState` hook from React for managing component state, the `useDispatch` hook from `react-redux` for dispatching actions to the Redux store, and the `login` action creator from the Redux store.

##### Visitor Component

```jsx
export const Visitor = () => {
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Login</h1>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
        type="text"
        id="login"
        placeholder="Login"
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Login
      </button>
    </div>
  );
};
```

- It initializes a `state` variable `newUsername` using the `useState` hook. This state variable holds the value of the `username` entered by the visitor in the input field.
- It initializes the `dispatch` function using the useDispatch hook, which allows dispatching actions to the Redux store.
- It renders a `<div>` element containing a heading "Login", an input field for entering the username, and a login button.
- The input field is controlled by React state. Its value changes as the user types due to the `onChange` event handler, which updates the `newUsername` state with the value entered by the user.
- When the login button is clicked, it `dispatches` the login action with the `username` entered by the visitor as a `payload`. This action is `dispatched` to the Redux store, which is expected to handle the login process and update the state accordingly.

This component provides a simple login form for visitors and demonstrates how to handle user input and dispatch actions to manage state in a Redux-powered application.

## Day 4.1: [Class Components In React](https://github.com/Chathuraje/react-tutorial/tree/d505aa6989fc4ccb28fd502aa63d83a067cf9ad4) [⬆️](#table-of-contents)

In React, class components are a way of creating components using ES6 classes. They were the primary way of creating components before the introduction of functional components with hooks.

```jsx
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return <div>This is Home</div>;
  }
}
```

In recent versions of React, functional components with hooks have become more popular due to their simplicity and the capabilities provided by hooks for state management and lifecycle behavior. However, class components are still supported in React and may be found in legacy codebases or used in certain scenarios where hooks are not applicable.

## Day 4.2: [Caching with useMemo](https://github.com/Chathuraje/react-tutorial/tree/d02598bbc275eb79faf7cd1b72d19fa314ca206b) [⬆️](#table-of-contents)

`useMemo` is a React Hook that allows you to cache the result of a calculation between re-renders of your component. It takes a function and an array of dependencies, and returns a memoized value. This memoized value will only be recalculated when one of the dependencies has changed.

### Why Use useMemo?

The primary purpose of `useMemo` is to optimize the performance of your React components by avoiding unnecessary re-calculations. When dealing with expensive calculations or computations that don't need to be re-evaluated on every render, `useMemo` can significantly improve the responsiveness and efficiency of your application.

### How useMemo Works:

`useMemo` works by memoizing the result of a function so that it's only recomputed when one of the dependencies provided in the dependency array changes. Here's how it operates:

- When the component renders for the first time, or when any of the dependencies change, the function provided to `useMemo` is executed.
- The result of that function is stored internally by React.
- On subsequent renders, if none of the dependencies have changed, `useMemo` returns the cached result without re-executing the function.
- If any of the dependencies have changed since the last render, `useMemo` re-executes the function, recalculates the result, and updates the cached value.
- This mechanism ensures that expensive computations are only performed when necessary, thus optimizing the performance of your React components.

### When to Use useMemo:

You should consider using useMemo in the following scenarios:

- **Expensive Computations**: When you have computationally expensive operations (e.g., complex calculations, data processing, or filtering), and you want to avoid unnecessary recalculations on every render.

- **Memoizing Values**: When you have a value that depends on certain inputs or props but doesn't need to be recalculated every time the component re-renders. Memoizing such values using useMemo can help improve performance.

- **Preventing Unnecessary Rendering**: When you want to prevent unnecessary re-renders of a component due to changes in props or state, especially when those changes don't affect the result of a computation.

- **Optimizing Performance**: When you're working on performance optimization and profiling tools indicate that certain computations are a bottleneck, useMemo can be a valuable tool to optimize those specific parts of your application.

#### Expensive Re-Render without useMemo

This code demonstrates a React component Counter that maintains a count state (count) and displays the ID of a selected item from a list of items. However, it illustrates a scenario where the component re-renders unnecessarily due to inefficient rendering logic.

```jsx
import { useState } from "react";
import { initialItems } from "../contexts/initialItems";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = items.find((item) => item.isSelected);

  return (
    <div>
      <h1>Counts: {count}</h1>
      <h1>Selected Item {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

###### initialItems.js

```javascript
export const initialItems = new Array(29_999_999).fill(0).map((_, index) => {
  return {
    id: index,
    isSelected: index === 29_999_998,
  };
});
```

Here's how the code works:

- `Counter` component imports `useState` from React to manage state.
- It also imports `initialItems` from an external file, which contains an array of objects representing items. Each item has an `id` and an `isSelected` property.
- Inside the component, it initializes two state variables:
  - `count`: initialized to 0 using `useState`.
  - `items`: initialized to initialItems array using `useState`.
- It then attempts to find the selected item from the `items` array using the find method. The selected item is the one with `isSelected` set to true.
- The component renders the count (count state) and the ID of the selected item (selectedItem?.id).
- It also renders a button that increments the count state when clicked.
- The initialItems array contains a large number of items (29,999,999) and is created using `Array.fill()` and `Array.map()`. One item in the array has `isSelected` set to true.

However, the inefficiency in this code lies in the rendering logic:

- Every time the component `re-renders`, it recalculates the selectedItem by traversing through the entire items array using Array.`find()`.
- This traversal is computationally expensive, especially with a large array like `initialItems`.
- Since initialItems never changes, this traversal could be avoided on subsequent re-renders if the selected item remains the same.

To optimize this, you can use `useMemo` to memoize the selected item, ensuring that it's only recalculated when the items array or its contents change, thus avoiding unnecessary re-renders and improving performance.

#### `useMemo`

```jsx
import { useMemo } from "react";

const selectedItem = useMemo(
  () => items.find((item) => item.isSelected),
  [items]
);
```

This code snippet utilizes the useMemo hook from React to optimize the calculation of the selectedItem. Here's how it works:

- The useMemo hook takes two arguments:
  - A function that performs the calculation to be memoized. In this case, it's an arrow function that uses the find method to search for the selected item within the items array.
  - An array of dependencies that the memoized value depends on. If any of these dependencies change, the memoized value will be recalculated. In this case, the dependency is `[items]`, indicating that the memoized value should be recalculated if the items array changes.
- The result of the `useMemo` hook, which is the memoized value of `selectedItem`, is stored in the `selectedItem` variable.

By using `useMemo`, the calculation of `selectedItem` is memoized. This means that the expensive operation of searching through the `items` array will only be performed when the `items` array changes. Subsequent renders of the component will reuse the memoized value of `selectedItem` without recalculating it unnecessarily, thereby improving performance.

## Day 4.3: [Caching with useCallback](https://github.com/Chathuraje/react-tutorial/tree/4554f584c9f4013e0c91714459331c8393e59d59) [⬆️](#table-of-contents)

`useCallback` is a React Hook used for memoizing functions in functional components. It is similar to `useMemo` but specifically designed for `functions`. The purpose of `useCallback` is to optimize performance by memoizing the provided callback function so that it is not recreated on every render unless its dependencies change. This can be particularly useful in scenarios where a `callback` function is passed down to child components, as it ensures that the child components do not unnecessarily re-render when the parent component re-renders. `useCallback` takes a callback function and an array of dependencies, and returns a memoized version of the function that only changes if one of the dependencies has changed. By utilizing `useCallback`, you can improve the efficiency of your React components by avoiding unnecessary function recreations and optimizing rendering performance.

### What it does:

`useCallback` returns a memoized version of the `callback` function that only changes if one of the dependencies has changed. It's similar to `useMemo`, but instead of memoizing a computed value, it memoizes a function.

### Usage:

```jsx
const memoizedCallback = useCallback(callback, dependencies);
```

- `callback` is the function you want to memoize.
- `dependencies` is an array of values that, when changed, will trigger the recreation of the memoized callback. If the dependencies array is empty, the callback will only be created once.

### Why use it:

- **Performance optimization**: By memoizing callbacks, you can prevent unnecessary re-renders of components that receive these callbacks as props, especially in scenarios where the callback function itself doesn't rely on the component's state or props but might still get recreated due to parent component re-renders.
- **Preventing unnecessary renders**: Memoizing callbacks with useCallback ensures that the same callback function instance is passed down to child components as long as the dependencies remain unchanged, avoiding unnecessary re-renders of those child components.

### Explanation: Without useCallback

#### shuffle.js

```jsx
export const shuffle = (array) => {
  const shuffledArray = array.slice(); // Make a shallow copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
```

#### Users.jsx

```jsx
import { useCallback, useState } from "react";
import Search from "./Search";
import { shuffle } from "../contexts/Shuffle";

const allUsers = ["john", "jane", "alice", "bob", "charlie", "david", "eve"];

export const Users = () => {
  console.log("Parent component rendered");
  const [users, setUsers] = useState(allUsers);

  const handleSeach = (text) => {
    console.log(users[0]);
    const filterdUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filterdUsers);
  };

  return (
    <div>
      <div>
        <h1>Search Users</h1>
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>

        <Search onChange={handleSeach} />
      </div>

      <div>
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
```

In summary, the Users component maintains a list of users in state and provides a search functionality to filter users.

```jsx
import { useCallback, useState } from "react";
```

- This imports the useCallback and useState hooks from the React library.

```jsx
import { shuffle } from "../contexts/Shuffle";
```

- This imports the shuffle function from a context named Shuffle. This function is presumably used to shuffle the array of users.

```jsx
const allUsers = ["john", "jane", "alice", "bob", "charlie", "david", "eve"];
```

- This defines an array containing all the users.

```jsx
const [users, setUsers] = useState(allUsers);
```

- This initializes a state variable users using the useState hook, setting its initial value to allUsers array. setUsers is the function used to update the users state.

```jsx
const handleSeach = (text) => { ... }
```

- This is a callback function `handleSeach` that takes a `text` parameter. It filters the allUsers array based on the input text and updates the users state accordingly.

##### Inside the return statement:

- A h1 element with the text "Search Users".
- A button with the text "Shuffle" that triggers the shuffle function when clicked, shuffling the `allUsers` array and updating the `users` state.
- The Search component is rendered with a prop `onChange` set to the `handleSeach` function.
- A `div` containing a ul element where each user from the users state is mapped to a `li` element with a unique key.

#### Search.jsx

```jsx
import { memo } from "react";

function Search({ onChange }) {
  console.log("Child component rendered");

  return (
    <input
      type="text"
      placeholder="Search users...."
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default memo(Search);
```

The `Search` component is a child component responsible for handling user input for searching, and it notifies the parent component (Users) of changes via a callback function passed as a prop.

```jsx
import { memo } from "react";
```

- This imports the memo function from the React library.

```jsx
function Search({ onChange }) { ... }
```

This defines a functional component named Search that accepts a prop onChange.

##### Inside the component:

- An input element of type text with a placeholder "Search users...".
- An onChange event handler on the input element, which calls the onChange prop function with the input value when the input changes.
  ```jsx
  export default memo(Search);
  ```
  - This exports the Search component wrapped with memo, which memoizes the component to prevent unnecessary re-renders if its props haven't changed.

### useCallback

```jsx
const handleSeach = useCallback(
  (text) => {
    console.log(users[0]);
    const filterdUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filterdUsers);
  },
  [users]
);
```

The provided code snippet introduces the use of the useCallback hook to memoize the handleSeach function. Let's break it down:

- `useCallback` is a React hook used to memoize functions. It takes two parameters: the `callback` function to memoize and an array of `dependencies`.
  In this case, the callback function is `(text) => { ... }`, which represents the search functionality.
- The dependency array `[users]` specifies that the memoized callback should be recreated **_only if the users state changes_**. If users remain unchanged between renders, the same memoized callback will be returned, optimizing performance.
- Inside the callback function, the `users` state and `allUsers` array are referenced. Since users is listed as a dependency, it's important to include it in the dependency array to ensure the correct behavior of the memoized callback.
- When the callback is invoked (presumably as an event handler for search input changes), it logs the first user in the users state and filters the allUsers array based on the provided search text. The filtered users are then set as the new state using setUsers.

By using `useCallback`, the `handleSeach` function is memoized, optimizing performance by preventing unnecessary recreations of the `callback` function on each render unless the users state changes. This can be particularly beneficial in scenarios where the handleSeach function is passed as a prop to child components, ensuring that those components do not unnecessarily re-render when the parent component re-renders.

## Day 4.4: [Storage Managment with useLocalStorage](https://github.com/Chathuraje/react-tutorial/tree/2ea7b1db4086ef4c870b53ddc332370d3e4f8be9) [⬆️](#table-of-contents)

`localStorage` is a web API provided by modern browsers to store key-value pairs locally within the user's browser. It provides a simple way to persist data across browser sessions. `localStorage` is a part of the Web Storage API along with `sessionStorage`, but it offers persistent storage whereas `sessionStorage` only lasts for the duration of the page session.

`localStorage` is particularly useful for storing **small** amounts of data, such as user preferences, settings, or cached data. It's commonly used in web applications to save user settings or state information.

### Reasons to use localStorage:

- **Persistence**: Data stored in localStorage persists even after the browser is closed and reopened. This makes it suitable for storing user preferences or application state that should persist across sessions.

- **Easy to Use**: localStorage provides a simple API for storing and retrieving data using key-value pairs, making it easy to incorporate into web applications.

- **Client-Side Storage**: Since localStorage operates on the client side, it doesn't require server-side processing, which can reduce server load and improve application performance.

- **Capacity**: localStorage typically offers more storage space compared to cookies, which have stricter size limits.

### Features of localStorage:

- **Data Storage**: localStorage can store strings, so complex data types like objects need to be serialized into JSON format before storing.

- **Synchronous API**: The API is synchronous, meaning operations block the main thread until they complete. This can affect performance if large amounts of data are stored or retrieved.

- **Domain Specific**: Data stored in localStorage is specific to the domain of the website, meaning it's isolated from data stored by other websites.

- **No Expiration**: Unlike cookies, data stored in localStorage doesn't have an expiration time and remains stored indefinitely until explicitly removed.

- **Storage Limit**: While localStorage offers more storage space than cookies, there are still limits (usually around 5-10MB per domain), so it's not suitable for storing large amounts of data.

### Example Code:

#### Home.jsx

```jsx
import { useState } from "react";
import { useLocalStorage } from "../contexts/useLocalStorage";

export const Home = () => {
  const [value, setValue] = useState("");
  const { setItem, getItem, deleteItem } = useLocalStorage("value");

  return (
    <div>
      <h1>Local Storage</h1>

      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => setItem(value)}>Set</button>
      <button onClick={() => alert(getItem())}>Get</button>
      <button onClick={() => deleteItem()}>Remove</button>
    </div>
  );
};
```

The Home.jsx component manages a text input field's value using React's state. It interacts with local storage through useLocalStorage, allowing users to set, get, and remove items stored under the key "value" in the browser's local storage.

#### useLocalStorage.js

```javascript
export const useLocalStorage = (key) => {
  const setItem = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = () => {
    try {
      const items = window.localStorage.getItem(key);
      return items ? JSON.parse(items) : undefined;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    setItem,
    getItem,
    deleteItem,
  };
};
```

The useLocalStorage.js hook provides functionalities to set, get, and delete items from the browser's local storage. It wraps these functionalities in a custom hook that takes a key as an argument, enabling easy integration with components needing local storage interaction.

## Day 5.1: [Store Reference to a DOM element using useRef](https://github.com/Chathuraje/react-tutorial/tree/71bd1f609de54017fbbcaf70b3fb166312b68962) [⬆️](#table-of-contents)

In React, the useRef hook is used to create a mutable ref object whose .current property can hold a reference to a DOM element or a value that persists across renders.

### Why Use useRef?

1. **Accessing DOM elements**: You can use useRef to gain direct access to a DOM element, which can be useful for focusing an input field, measuring its size, or triggering imperatively controlled animations.

2. **Storing Mutable Values**: `useRef` can be used to store mutable values that persist across renders without causing re-renders like state updates do. This is because changing the .current property of a ref doesn't trigger a re-render.

### Example

```jsx
import { useRef } from "react";

export const Home = () => {
  const countRef = useRef(0);

  const handeleIncrement = () => {
    countRef.current++;

    console.log("Ref: " + countRef.current);
  };
  return (
    <div>
      <h1>useRef Hook</h1>
      Count: {countRef.current}
      <button onClick={handeleIncrement}>Increment</button>
    </div>
  );
};
```

This React component utilizes the useRef hook to create a mutable reference to a value, which persists across renders without causing the component to re-render. Let's break down the code:

```jsx
import { useRef } from "react";

export const Home = () => {
  const countRef = useRef(0);
```

Here, we import the useRef hook from the React library. Inside the Home component, we initialize a ref named countRef and set its initial value to 0 using useRef(0).

```jsx
const handeleIncrement = () => {
  countRef.current++;
  console.log("Ref: " + countRef.current);
};
```

We define a function handleIncrement that increments the value stored in the countRef.current property. This function is triggered when the "Increment" button is clicked. After incrementing the value, we log the updated value to the console.

```jsx
  return (
    <div>
      <h1>useRef Hook</h1>
      Count: {countRef.current}
      <button onClick={handeleIncrement}>Increment</button>
    </div>
  );
};
```

In the JSX portion of the component, we render a heading "useRef Hook" and display the current value of the ref (countRef.current). We also render a button labeled "Increment" that, when clicked, calls the handleIncrement function, causing the ref's value to be incremented and the updated value to be displayed.

#### Summary:

- This component demonstrates the usage of the `useRef` hook to maintain a mutable value (`countRef.current`) across renders.
- The value stored in the `ref` is updated without causing a re-render of the component.
- This pattern is useful for managing stateful values that don't need to trigger component re-renders, such as in the case of this simple counter example.

### Another Example

```jsx
import { useEffect, useRef } from "react";

export const Home = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h1>useRef Hook</h1>
      <input ref={inputRef} type="text" placeholder="Type Something....." />
    </div>
  );
};
```

Let's break down the provided React component in more detail:

```jsx
const inputRef = useRef(null);
```

We initialize a ref using the useRef hook and assign it to the variable inputRef. This ref will be used to reference the input element in the JSX.

```jsx
useEffect(() => {
  inputRef.current?.focus();
}, []);
```

We use the useEffect hook to execute a side effect. In this case, the side effect is triggered when the component mounts, as indicated by the empty dependency array ([]). Inside the effect, we call the focus() method on inputRef.current. The ?. operator is used for optional chaining, ensuring that if inputRef.current is null, calling focus() won't throw an error.

```jsx
return (
  <div>
    <h1>useRef Hook</h1>
    <input ref={inputRef} type="text" placeholder="Type Something....." />
  </div>
);
```

This is the JSX representation of the component. We render a `<div>` containing an `<h1>` element with the text "useRef Hook" and an `<input>` element. We assign the inputRef ref to the input element using the ref attribute. This allows us to reference the input element elsewhere in the component, such as in the `useEffect` hook where we call the `focus()` method.

#### Summary:

- This component utilizes the useRef hook to create a reference to an input element.
- It uses the `useEffect` hook to focus on the input element when the component mounts.
- This pattern is commonly used for automatically focusing on input fields when a component renders, enhancing user experience, particularly in forms or input-intensive interfaces.

## Day 5.2: [Managing complex state logic with useReducer](https://github.com/Chathuraje/react-tutorial/tree/0539786c1f5e065bb0ad3af481472923c2cacd2b) [⬆️](#table-of-contents)

`useReducer` is a React Hook used for managing complex state logic in React applications. It's an alternative to useState that is more suitable for managing state in situations where the state transitions are more complex and involve multiple sub-values, or when the next state depends on the previous one.

### Why use useReducer?

- **Complex state logic**: When state logic becomes too complex to handle with simple useState, useReducer provides a more organized and maintainable solution.
- **Predictability**: Reducers provide a clear and predictable pattern for managing state transitions.
- **Centralized state logic**: useReducer centralizes state logic by encapsulating it within the reducer function, making it easier to understand and manage.
- **Better performance**: In some cases, using useReducer can lead to better performance optimizations compared to multiple useState calls.

### Features of useReducer:

- **Reducer function**: It accepts a reducer function as its first argument. This reducer function specifies how the state should change in response to dispatched actions.
- **Initial state**: useReducer also accepts an initial state as its second argument. This initial state serves as the starting point for the state managed by the reducer.
- **Dispatch function**: The useReducer Hook returns an array with two elements: the current state and a dispatch function. The dispatch function is used to dispatch actions to the reducer, which in turn triggers state updates.
- **Actions**: Actions are plain JavaScript objects that describe the type of state transition that should occur. These actions are dispatched to the reducer, which then determines how to update the state based on the action type and optional payload.

### Importance of useReducer:

- **State management**: It provides a powerful mechanism for managing state in React applications, especially when dealing with complex state logic or multiple interdependent state variables.
- **Predictable state updates**: By following a strict pattern of state transitions, useReducer ensures predictable and manageable updates to the state.
- **Scalability**: As state logic grows more complex, useReducer helps maintain code organization and scalability by keeping state transitions centralized within the reducer function.
- **Performance optimization**: In some cases, useReducer can lead to better performance optimizations compared to using multiple useState calls, especially when dealing with deeply nested state or frequent state updates.

In summary, useReducer is a crucial tool in React development for managing complex state logic, providing predictability, scalability, and potential performance benefits.

### Differences between useReducer and useState

- **Complexity**: useReducer is more suitable for managing complex state logic, while useState is simpler and more straightforward for basic state management.
- **Centralization**: useReducer centralizes state logic within a single reducer function, while useState distributes state logic across multiple setter functions.
- **State Structure**: With useState, each state variable can be managed independently, while useReducer manages a single state object, allowing for a more structured state.
- **Predictability**: useReducer offers a more predictable pattern for state updates, especially in larger applications with complex state transitions.
- **Performance**: In some cases, useReducer might offer better performance optimizations compared to multiple useState calls, especially for deeply nested state or frequent state updates.

In summary, `useState` is simpler and more suitable for basic state management, while `useReducer` is more powerful and suited for managing complex state logic and transitions. The choice between them depends on the specific requirements and complexity of the state management within your React components.

### Here's how useReducer and Redux follow similar pattern

`useReducer` does follow a similar pattern to Redux. Both `useReducer` and Redux are based on the same fundamental concept of reducers, actions, and a single centralized state.

- **Reducers**: In both useReducer and Redux, reducers are functions responsible for determining how the application's state changes in response to actions. Reducers take the current state and an action, and return the new state based on the action type.

- **Actions**: Actions in both useReducer and Redux are plain JavaScript objects that describe the type of state transition that should occur. Actions typically have a type property that describes the action type and may include additional data (payload) as needed.

- **Single centralized state**: Both useReducer and Redux manage a single centralized state object. This state represents the entire state of the application and is modified by dispatching actions to reducers.

- **Dispatching actions**: Actions are dispatched to reducers in both useReducer and Redux to trigger state updates. In useReducer, the dispatch function is obtained from the useReducer Hook, while in Redux, actions are dispatched using the dispatch function provided by the Redux store.

While useReducer provides a similar pattern to Redux, there are some key differences:

- **Redux is external**: Redux is a separate library that provides a centralized state management solution for React and other JavaScript applications. It's often used in larger applications where managing state becomes more complex.

- **Middleware**: Redux provides middleware functionality that allows developers to intercept and augment actions and state updates. useReducer does not include middleware functionality by default, although it can be augmented with custom middleware if needed.

- **DevTools**: Redux offers powerful developer tools (Redux DevTools) that provide insights into the application's state changes and facilitate debugging. While useReducer can be used with browser developer tools for inspecting state, it doesn't have dedicated tools like Redux DevTools.

In summary, while `useReducer` follows a pattern similar to Redux, Redux offers additional features and tools for managing state in larger, more complex applications. `useReducer` is more lightweight and built into React, making it suitable for managing local component state or smaller-scale state management needs.

### Example

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  const { type } = action;

  switch (type) {
    case "increment":
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum count reached" : null,
      };
    case "decrement":
      const newCount1 = state.count - 1;
      const hasError1 = newCount1 < 0;
      return {
        ...state,
        count: hasError1 ? state.count : newCount1,
        error: hasError1 ? "Minimum count reached" : null,
      };
    default:
      return state;
  }
}

export const Home = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div>
      <h1>useReducer Hook</h1>
      <div>Count: {state.count}</div>
      {state.error && <div style={{ color: "red" }}>{state.error}</div>}

      <button onClick={() => dispatch({ type: "increment" })}>
        Incremdent
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};
```

This code demonstrates the usage of the `useReducer` hook in a React functional component. Let's break it down step by step:

**Importing `useReducer`**:

```jsx
import { useReducer } from "react";
```

This line imports the `useReducer` hook from the React library.

**Defining the Reducer Function**:

```jsx
function reducer(state, action) {
  const { type } = action;

  switch (type) {
    case "increment":
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum count reached" : null,
      };
    case "decrement":
      const newCount1 = state.count - 1;
      const hasError1 = newCount1 < 0;
      return {
        ...state,
        count: hasError1 ? state.count : newCount1,
        error: hasError1 ? "Minimum count reached" : null,
      };
    default:
      return state;
  }
}
```

This is the reducer function. It takes two parameters: `state` and `action`. It evaluates the `type` property of the action object to determine which state transition to perform. In this case:

- For the "increment" action, it increments the `count` property of the state by 1. If the new count exceeds 5, it sets an error message indicating that the maximum count has been reached.
- For the "decrement" action, it decrements the `count` property of the state by 1. If the new count becomes less than 0, it sets an error message indicating that the minimum count has been reached.
- If the action type doesn't match any of the cases, it returns the current state unchanged.

**Defining the Component**:

```jsx
export const Home = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div>
      <h1>useReducer Hook</h1>
      <div>Count: {state.count}</div>
      {state.error && <div style={{ color: "red" }}>{state.error}</div>}

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};
```

- Inside the `Home` functional component, `useReducer` is called with the `reducer` function and an initial state object `{ count: 0, error: null }`. This initializes the state with a count of 0 and no errors.
- The current state and the `dispatch` function are obtained from the `useReducer` hook. The `dispatch` function is used to dispatch actions to the reducer. The component renders:
  - A heading "useReducer Hook".
  - The current count value from the state.
  - If there's an error (either "Maximum count reached" or "Minimum count reached"), it renders the error message in red.
  - Two buttons: one for incrementing the count and one for decrementing it. When clicked, they dispatch respective actions to the reducer.

This code demonstrates how to use `useReducer` to manage state in a React component, performing state transitions based on dispatched actions. It showcases how state updates can be centralized and managed using a reducer function, providing a predictable and scalable approach to state management.

## Day 5.3: [Passing Values from Child to Parent Components via useImperativeHandle](https://github.com/Chathuraje/react-tutorial/tree/4a93f3dea1f858cd3d7c7f185e26efdd70c9ff42) [⬆️](#table-of-contents)

`useImperativeHandle` is a React Hook used to customize the instance value that is exposed to parent components when using `ref`. It allows you to control what methods and properties are accessible to the parent component when it interacts with the child component's ref.

Here's how it works:

1. **Customizing the exposed instance**: When you use `useImperativeHandle`, you can specify which functions or values from the component's internal instance you want to expose to the parent component via `ref`.

2. **Fine-grained control**: This hook allows you to fine-tune the interface between parent and child components. Instead of exposing the entire component instance, you can selectively expose only the necessary methods or properties.

3. **Optimization**: It can be used to optimize performance by preventing unnecessary re-renders in certain cases. By exposing only the required methods or properties, you can avoid re-renders triggered by changes to irrelevant state or props.

4. **Encapsulation**: `useImperativeHandle` promotes encapsulation by controlling the interface between parent and child components. This makes it easier to maintain and reason about the codebase, as it clarifies which parts of the component are intended for external use.

5. **Avoiding anti-patterns**: In some cases, directly accessing and manipulating child component instances via `ref` can lead to anti-patterns like tight coupling between components. `useImperativeHandle` provides a cleaner and safer way to expose functionality from child to parent components when necessary.

Here's an example of how you might use `useImperativeHandle`:

Certainly! Let's break down the code:

### Parent Component - Home.jsx

```jsx
import { useRef } from "react";
import Counter from "../components/Counter";

export const Home = () => {
  const CounterRef = useRef(null);

  return (
    <div>
      <h1>useImperativeHandle Hook</h1>
      <Counter ref={CounterRef} />

      <button onClick={() => CounterRef.current?.reset()}>
        Reset From Parent
      </button>
    </div>
  );
};
```

- In the `Home` component, a reference (`CounterRef`) is created using the `useRef` hook. This reference will be used to access the methods of the child component `Counter`.
- The `Counter` component is imported and rendered. The `Counter` component is provided with the `CounterRef` reference via the `ref` prop.
- A button is rendered with an `onClick` handler that calls the `reset` method of the `Counter` component through the reference.

### Child Component - Counter.jsx

```jsx
import { forwardRef, useImperativeHandle, useState } from "react";

const Counter = (props, ref) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  useImperativeHandle(ref, () => ({
    reset,
  }));

  return (
    <div>
      <div>Count: {count}</div>

      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
};
export default forwardRef(Counter);
```

```jsx
useImperativeHandle(ref, () => ({
  reset,
}));
```

useImperativeHandle allows you to customize what the parent component can access via ref

- In the `Counter` component, state is managed using the `useState` hook. It maintains the `count` state.
- Three methods are defined: `increment`, `decrement`, and `reset`, which respectively increase, decrease, and reset the count.
- The `useImperativeHandle` hook allows specifying what part of the component's instance should be exposed to the parent component via `ref`. In this case, only the `reset` method is exposed.
- The `forwardRef` function is used to forward the `ref` passed to `Counter` to the inner component, allowing the parent to access the methods specified using `useImperativeHandle`.

In summary, this code demonstrates how to use `useImperativeHandle` to selectively expose methods from a child component to its parent component, allowing for controlled interaction between the components. In this specific case, the parent component can call the `reset` method of the child component to reset its state.

## Day 5.4: [Add transition to UI element using useTransition](https://github.com/Chathuraje/react-tutorial/tree/cfa985147dd55141b6343dec68add7fb67c003d0) [⬆️](#table-of-contents)

`useTransition` is a React Hook provided by React's concurrent mode API. It is used to add transitions to UI elements, particularly when those elements are being mounted or unmounted. It allows for smoother user experiences by providing a way to animate changes in the UI.

The primary reason for using `useTransition` is to manage the visual presentation of elements that are being added or removed from the DOM. Without transitions, these changes can be abrupt and jarring to the user. By adding animations, you can make these transitions more visually pleasing and improve the overall user experience.

Some features and reasons to use `useTransition` include:

1. **Smooth UI Transitions**: `useTransition` enables you to smoothly transition UI elements in and out of the DOM, making the user interface feel more polished and responsive.

2. **Better User Experience**: Animations provided by `useTransition` can enhance the user experience by providing visual cues for changes happening on the screen, helping users understand what is occurring within the interface.

3. **Controlled Animations**: `useTransition` allows you to control the timing, duration, and appearance of transitions, giving you fine-grained control over the animation effects.

4. **Concurrency Support**: It is designed to work well with React's concurrent mode, which helps in creating responsive and performant user interfaces, especially in scenarios where multiple UI updates might be happening simultaneously.

5. **Hook-based API**: Being a React Hook, `useTransition` integrates seamlessly with functional components, making it easy to implement and maintain.

Overall, `useTransition` is a powerful tool for creating visually appealing and responsive user interfaces in React applications by adding smooth transitions to UI elements.

### Sampale Code: Without Transitions

#### App.jsx:

```jsx
import AboutTab from "./pages/AboutTab";
import ContactTab from "./pages/ContactTab";
import PostsTab from "./pages/PostsTab";
import { useState } from "react";

const App = () => {
  const [tab, setTab] = useState("about");

  const selectTab = (tab) => {
    setTab(tab);
  };

  return (
    <div>
      <button onClick={() => selectTab("about")}>About</button>
      <button onClick={() => selectTab("posts")}>Posts</button>
      <button onClick={() => selectTab("contact")}>Contact</button>

      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </div>
  );
};

export default App;
```

- This component represents the main entry point of the application.
- It renders buttons for navigating between different tabs (About, Posts, Contact).
- Depending on the selected tab, it renders the corresponding tab component (AboutTab, PostsTab, ContactTab).

#### PostsTab.jsx:

```jsx
import { memo } from "react";

const PostsTab = () => {
  console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");

  let items = [];
  for (let i = 0; i < 2500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul className="items">{items}</ul>;
};

const SlowPost = ({ index }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Post #{index + 1}</li>;
};

export default memo(PostsTab);
```

- This component represents the "Posts" tab in the application.
- It renders a list of 2500 `<SlowPost />` components.
- Each `<SlowPost />` component simulates slow rendering by delaying for 1 millisecond, artificially slowing down the rendering process.

#### ContactTab.jsx:

```jsx
const ContactTab = () => {
  return <p>Welcome to my profile!</p>;
};

export default ContactTab;
```

- This component represents the "Contact" tab in the application.
- It simply renders a paragraph welcoming the user to the profile.

#### AboutTab.jsx:

```jsx
const AboutTab = () => {
  return (
    <div>
      <p>You can find me online here:</p>
    </div>
  );
};

export default AboutTab;
```

- This component represents the "About" tab in the application.
- It renders a paragraph with information about where to find the user online.

To summarize, the Posts tab loads slowly due to intentional delays introduced in rendering individual post components. While `useTransition` can enhance the user experience by adding transitions between tabs, it won't directly address the slow loading issue caused by the artificial delay in rendering posts.

### Using `useTransition`

#### App.jsx

```jsx
import React, { useState, useTransition } from "react";
import AboutTab from "./pages/AboutTab";
import ContactTab from "./pages/ContactTab";
import Loading from "./pages/Loading";
import PostsTab from "./pages/PostsTab";

const App = () => {
  const [tab, setTab] = useState("about");
  const [isPending, startTransition] = useTransition();

  const selectTab = (tabName) => {
    startTransition(() => {
      setTab(tabName);
    });
  };

  return (
    <div>
      <button onClick={() => selectTab("about")}>About</button>
      <button onClick={() => selectTab("posts")}>Posts</button>
      <button onClick={() => selectTab("contact")}>Contact</button>

      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
      {isPending && <Loading />}
    </div>
  );
};

export default App;
```

#### Loading.jsxx

```jsx
function Loading() {
  return <div>Loading...</div>;
}
export default Loading;
```

Let's break down the functionality of the code:

1. **Imports**:

   - The code imports necessary modules from React, including `useState` for managing state and `useTransition` for managing transitions.
   - Additionally, it imports components for different tabs (`AboutTab`, `PostsTab`, `ContactTab`) and a loading indicator (`Loading`).

2. **State Initialization**:

   - The `App` component initializes two state variables using the `useState` hook:
     - `tab`: Represents the currently selected tab. It initially defaults to "about".
     - `isPending`: Represents whether a transition is pending or not. It is managed by the `useTransition` hook.

3. **Tab Selection Function** (`selectTab`):

   - This function is called when a tab button is clicked.
   - It initiates a transition using the `startTransition` function provided by the `useTransition` hook.
   - Inside the transition callback, it updates the `tab` state with the selected tab name (`tabName`).

4. **Rendering**:

   - The `return` statement renders the JSX elements based on the current state.
   - It renders buttons for each tab, each associated with an `onClick` handler that calls the `selectTab` function with the respective tab name.
   - Conditional rendering is used to display the content of the selected tab:
     - If `tab` is "about", the `AboutTab` component is rendered.
     - If `tab` is "posts", the `PostsTab` component is rendered.
     - If `tab` is "contact", the `ContactTab` component is rendered.
   - Additionally, if `isPending` is true (indicating a pending transition), the `Loading` component is rendered.

5. **Loading Indicator**:
   - The `Loading` component is conditionally rendered based on the `isPending` state.
   - It typically displays a loading animation or message to indicate to the user that a transition is in progress.

In summary, this code creates a simple tabbed interface where users can switch between different tabs (About, Posts, Contact). Transitions between tabs are managed using the `useTransition` hook to ensure a smoother user experience. Additionally, a loading indicator is displayed during tab transitions.

## Day 5.5: [Manage asynchronous updates in concurrent React mode using useDeferredValue](https://github.com/Chathuraje/react-tutorial/tree/9f0e0b890ef3bdd0a14fcb6ef57cfcba8c374d64) [⬆️](#table-of-contents)

"useDeferredValue" is a React hook introduced in React 18. It is designed to help manage asynchronous updates in concurrent React mode.

In React, concurrent mode is an experimental feature that allows React to work on rendering multiple components simultaneously, potentially improving performance and user experience. However, managing state updates in concurrent mode can be challenging, especially when dealing with asynchronous data fetching or other asynchronous operations.

The purpose of "useDeferredValue" is to defer updates to a value until a specified threshold is met. This can be particularly useful when dealing with rapidly changing values, such as those fetched asynchronously from a server, to prevent unnecessary renders and improve performance.

Here's how "useDeferredValue" works:

1. You provide the hook with a value and a delay threshold.
2. The hook returns a deferred value that React will not immediately use for rendering.
3. React waits until the specified delay threshold is reached before using the deferred value for rendering.

By deferring the use of the value until it's stable for a certain period, "useDeferredValue" helps prevent unnecessary renders and optimizations, improving the overall performance of your React application.

Key features of "useDeferredValue" include:

1. **Asynchronous Updates:** It handles asynchronous updates gracefully, allowing React to defer rendering until the value stabilizes.
2. **Performance Optimization:** By deferring renders, it helps to optimize the performance of React applications, especially in concurrent mode where multiple components may be rendering simultaneously.
3. **Threshold Configuration:** Developers can specify a threshold or delay after which the deferred value becomes stable and can be safely used for rendering.

Overall, "useDeferredValue" is a powerful tool for managing asynchronous updates and optimizing performance in React applications, particularly in the context of concurrent mode.

### Example Code - Without useDeferredValue

#### Home.jsx

```jsx
import { useState } from "react";
import { SlowList } from "../components/SlowList";

export const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h1>useDeferredValue</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />

      <SlowList text={query} />
    </div>
  );
};
```

This component renders a header, an input field for searching, and a SlowList component. The input field is controlled by a state variable query, which updates as the user types in the input.

#### SlowList.jsx

```jsx
import { memo } from "react";

export const SlowList = memo(({ text }) => {
  const items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

const SlowItem = ({ text }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Text: {text}</li>;
};
```

SlowList.jsx: This component is memoized using memo. It renders a list of SlowItem components. Each SlowItem component emulates slow rendering by looping for 1 millisecond before rendering, simulating an expensive operation.

In summary, the Home component manages a search query state and passes it as a prop to the SlowList component. The SlowList component renders a list of items, each of which simulates slow rendering.

### With useDeferredValue - Prioritizing Input and Rendering Later

```jsx
import { useDeferredValue, useState } from "react";
import { SlowList } from "../components/SlowList";

export const Home = () => {
  const [query, setQuery] = useState("");
  const defeeredQuery = useDeferredValue(query);

  return (
    <div>
      <h1>useDeferredValue</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />

      <SlowList text={defeeredQuery} />
    </div>
  );
};
```

- The key concept here is that the input field updates immediately when the user types because it directly relies on the "query" state.
- However, the rendering of the "SlowList" component, which consumes the deferred value "defeeredQuery", is delayed.
- React prioritizes the input responsiveness by immediately updating the input field based on user input. Meanwhile, it defers the rendering of the "SlowList" component until the value stabilizes.
- This prioritization ensures a smoother user experience, where the input responsiveness is not affected by potentially slow or asynchronous rendering processes of other components.

In summary, "useDeferredValue" allows React to prioritize the responsiveness of user inputs while delaying the rendering of components that consume deferred values, thus optimizing the user experience in scenarios where there might be performance bottlenecks or asynchronous data fetching involved.

### Passing a Object or Array to `useDeferredValue`

Passing an object or array directly to `useDeferredValue` can be an issue because it may lead to unexpected behavior or errors, as the `useDeferredValue` hook is designed to handle primitive values like strings, numbers, or booleans. There are a few reasons why passing an object or array can cause problems:

1. **Referential Equality Check:** `useDeferredValue` internally uses referential equality checks to determine whether the value has changed. When you pass an object or array, the referential equality check doesn't compare the contents of the object or array but rather their memory references. As a result, even if the content of the object or array changes, it may not trigger a re-render if the memory reference remains the same.

2. **Performance Implications:** Passing a complex object or array to `useDeferredValue` can have performance implications, especially if the object or array is large or frequently updated. React needs to perform deep comparisons to determine if the value has changed, which can be computationally expensive.

3. **Unexpected Behavior:** Even if the object or array is small, unexpected behavior may occur if you're mutating the object or array directly. React relies on immutability to detect changes in state and trigger re-renders. If you mutate the object or array in place, React may not detect the change, leading to inconsistencies in your application's state.

To avoid these issues, it's best to pass primitive values (e.g., strings, numbers, booleans) directly to `useDeferredValue`. If you need to work with complex data structures like objects or arrays, consider breaking them down into smaller, primitive values or using memoization techniques to ensure stable references.

## Day 5.6: [Synchronous Execution with useLayoutEffect](https://github.com/Chathuraje/react-tutorial/tree/ec10cf1ffe450e960a6c533f5375e899273789ef) [⬆️](#table-of-contents)

`useLayoutEffect` is a React Hook that performs side effects in a React component. It's similar to `useEffect`, but it runs synchronously after all DOM mutations. This means it allows you to read from the DOM and immediately perform other imperative actions.

### Why use `useLayoutEffect`?

1. **Synchronous Execution**: Unlike `useEffect`, which runs asynchronously after the browser has painted, `useLayoutEffect` runs synchronously after all DOM mutations. This makes it suitable for tasks that require DOM measurements or immediate DOM manipulation before the browser paints.

2. **Avoiding Flickering**: If you're updating the DOM in response to user interactions or state changes, using `useLayoutEffect` can prevent flickering or visual glitches because it runs before the browser has had a chance to paint the changes.

3. **Accurate Measurements**: Since `useLayoutEffect` runs before the browser paints, it provides a more accurate snapshot of the DOM, making it suitable for tasks like measuring DOM elements' dimensions or positions.

### Importance:

The importance of `useLayoutEffect` lies in its ability to ensure that certain imperative actions are performed synchronously after all DOM mutations. This is crucial for tasks that require accurate DOM measurements or immediate DOM manipulation before the browser paints, helping to prevent visual glitches and provide a smoother user experience.

### Features:

1. **Synchronous Execution**: `useLayoutEffect` runs synchronously after all DOM mutations, ensuring that imperative actions are performed immediately.

2. **Accurate DOM Measurements**: It provides an accurate snapshot of the DOM, making it suitable for tasks like measuring dimensions or positions of DOM elements.

3. **Preventing Flickering**: By running before the browser paints, it helps prevent flickering or visual glitches caused by asynchronous updates to the DOM.

4. **Similar Syntax to `useEffect`**: `useLayoutEffect` has a similar syntax to `useEffect`, making it easy to use for developers familiar with React Hooks. However, it should be used with caution due to its synchronous nature, as it can potentially cause performance issues if used incorrectly.

In summary, `useLayoutEffect` is a valuable tool in a React developer's toolkit, particularly for tasks that require accurate DOM measurements or immediate DOM manipulation. However, it should be used judiciously, as its synchronous nature can impact performance if misused.

#### Example: useEffect

```jsx
import { useEffect, useState } from "react";

const userIds = [1, 2];

export const Home = () => {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(true);

  // This artifically slows down rendering
  let now = performance.now();
  while (performance.now() - now < 200) {
    // Do nothing for bit
  }

  useEffect(() => {
    setIsAdmin(userId === userIds[0]);
  }, [userId]);

  const handleChange = () => {
    const otherId = userIds.find((id) => id !== userId);
    setUserId(otherId);
  };

  return (
    <div>
      <h1>UserID: {userId}</h1>
      <h3>Admin: {isAdmin ? "true" : "false"}</h3>

      <button onClick={handleChange}>Change User</button>
    </div>
  );
};
```

This code defines a React functional component called `Home`. It imports `useEffect` and `useState` hooks from React.

Inside the component, it initializes two state variables: `userId` and `isAdmin`, using the `useState` hook. `userId` is initially set to the first element of the array `userIds`, and `isAdmin` is initially set to `true`.

Then, there's a block of code that artificially slows down rendering by running a while loop for a specified duration.

The `useEffect` hook is used to update the `isAdmin` state based on the `userId` state. It checks if the `userId` matches the first element of the `userIds` array and sets `isAdmin` accordingly.

A `handleChange` function is defined, which toggles the `userId` state between the two elements of the `userIds` array.

In the return statement, the component renders an `<h1>` tag displaying the current `userId`, an `<h3>` tag displaying whether the user is an admin or not based on the `isAdmin` state, and a button that triggers the `handleChange` function.

Overall, this component demonstrates state management using React hooks (`useState`) and side effects handling using the `useEffect` hook. It also simulates a slow rendering process to illustrate the importance of understanding how rendering can impact the user experience.

#### Examle: useLayoutEffect

```jsx
import { useLayoutEffect, useState } from "react";

useLayoutEffect(() => {
  setIsAdmin(userId === userIds[0]);
}, [userId]);
```

This will render both values at the same time but has delay.

Here's a comparison table describing the differences between `useEffect` and `useLayoutEffect`:

| Feature               | useEffect                                                                  | useLayoutEffect                                                                          |
| --------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Synchronous Execution | Asynchronous after browser paint.                                          | Synchronous before browser paint.                                                        |
| Timing                | Runs after React has committed changes to the DOM.                         | Runs synchronously after all DOM mutations.                                              |
| DOM Read/Write        | DOM reads and writes are safe.                                             | DOM reads and writes can cause layout thrashing.                                         |
| Performance Impact    | Minimal performance impact as it runs after browser paint.                 | Potential for performance impact due to synchronous execution. Use with caution.         |
| Use Cases             | Suitable for most side effects that don't require synchronous DOM updates. | Suitable for tasks requiring synchronous DOM measurements or immediate DOM manipulation. |
| Compatibility         | Suitable for most use cases and should be preferred in general.            | Use sparingly and only when necessary due to potential performance implications.         |
| Syntax                | `javascript useEffect(() => { /* side effect */ }, [dependencies]); `      | `javascript useLayoutEffect(() => { /* side effect */ }, [dependencies]); `              |

In summary, `useEffect` is generally preferred for most use cases as it runs asynchronously after React has committed changes to the DOM, minimizing potential performance impact. On the other hand, `useLayoutEffect` should be used sparingly and only when synchronous DOM updates are necessary, as its synchronous execution can potentially impact performance and cause layout thrashing.

## Day 5.7: [Integrating Material-UI (MUI) with React](https://github.com/Chathuraje/react-tutorial/tree/b150fb95976566365af6adf671c68ea79c58dd13) [⬆️](#table-of-contents)

Material-UI provides a comprehensive set of React components, styled with Material Design aesthetics, allowing developers to quickly build elegant and consistent user interfaces. Whether you're developing a simple website or a complex web application, Material-UI simplifies the implementation of UI elements such as buttons, navigation bars, input fields, and more.

### Key Features of Material-UI:

1. **Reusable Components**: Material-UI offers a rich collection of reusable and customizable React components, enabling developers to create complex UI layouts with ease.

2. **Theming Support**: With Material-UI's theming capabilities, developers can effortlessly customize the appearance of their applications to match branding or design requirements.

3. **Accessibility**: Material-UI prioritizes accessibility by adhering to accessibility guidelines, ensuring that applications built with Material-UI are usable by individuals with disabilities.

4. **Responsive Design**: Material-UI components are designed to be responsive out-of-the-box, making it simple to create applications that adapt seamlessly to various screen sizes and devices.

### Getting Started with Material-UI in React:

Integrating Material-UI into a React project is straightforward. Here's a basic guide to get you started:

#### Step 1: Install Material-UI

```bash
npm install @mui/material @emotion/react @emotion/styled
```

#### Step 2: Set Up Theme Provider

Wrap your application with the Material-UI ThemeProvider to apply custom themes and styles:

```jsx
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your application components */}
    </ThemeProvider>
  );
}

export default App;
```

#### Step 3: Start Using Material-UI Components

Begin utilizing Material-UI components within your React application. For example:

```jsx
import { Button, TextField, AppBar, Toolbar, Typography } from "@mui/material";

function MyApp() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <TextField label="Enter your name" />
    </div>
  );
}

export default MyApp;
```

#### Step 4: Explore Documentation and Examples

Material-UI provides extensive documentation and a wealth of examples to help you leverage its components effectively. Explore the official documentation and experiment with different components and configurations to suit your project requirements.

Documentation: [Material UI Official Documentation](https://mui.com/material-ui/getting-started/)

### Conclusion

Incorporating Material-UI into your React applications empowers you to create visually appealing and user-friendly interfaces with minimal effort. By leveraging Material-UI's extensive collection of components and styles, you can streamline the UI development process and focus on delivering an exceptional user experience. Stay tuned for more in-depth tutorials and best practices on utilizing Material-UI in your React projects!

## Day 5.7: [Migration to TypeScript] [⬆️](#table-of-contents)

In React, TypeScript is used as a programming language to write React applications with static typing. React itself is a JavaScript library for building user interfaces, but by integrating TypeScript into a React project, developers can benefit from enhanced code quality, better tooling support, and improved developer experience.

Here's how TypeScript is typically used in React development:

1. **Static Typing**: TypeScript allows developers to define types for props, state, and other variables used in React components. This helps catch type-related errors early in the development process, reducing bugs and improving code maintainability.

2. **Type Inference**: TypeScript can infer types based on how variables and components are used in the code, reducing the need for explicit type annotations in many cases. This can lead to more concise and readable code.

3. **Interfaces and Types**: TypeScript supports interfaces and types, which can be used to define the shape of data objects passed between components or fetched from APIs. This helps enforce contracts and ensure data consistency throughout the application.

4. **IDE Support**: IDEs and code editors that support TypeScript provide advanced features such as auto-completion, type checking, and refactoring tools. This can significantly improve developer productivity and make it easier to work with large React codebases.

5. **Improved Collaboration**: TypeScript's static typing can improve collaboration among team members by making code more self-documenting and reducing the need for extensive comments or documentation.

6. **Type Safety**: By using TypeScript with React, developers can catch type errors at compile time rather than discovering them at runtime. This leads to more robust and reliable React applications.

Overall, TypeScript enhances the development experience when building React applications by providing static typing, improved tooling support, and better code quality assurance. While it adds an initial overhead in terms of learning and setup, many developers find that the benefits outweigh the costs, especially in larger or more complex projects.



## Contributing

If you have any suggestions, corrections, or improvements to make to my code or documentation, feel free to open an issue or submit a pull request. Your contributions are highly appreciated!

## Resources

Here are some helpful resources I've found useful during my learning journey:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [React Router Documentation](https://reactrouter.com/)
- [Redux Documentation](https://redux.js.org/)
- [Material UI Official Documentation](https://mui.com/material-ui/getting-started/)

## License

This project is licensed under the [MIT License](LICENSE).
