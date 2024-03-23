# React Tutorial Repository

Welcome to my React tutorial repository! Here, I document my journey of learning React through various video series. Each time I push to this repository, I'll update the progress I've made.

## Current Progress

- 📝 **Title**: Day 1.12 Event Handling In React
- 📝 **Topics Covered**: This content provides an explanation of event handling in React, focusing on click events. It includes the provided example with an explanation of the syntax and best practices for handling events in React components.
- 📝 **Date**: 2024-03-23

## Previous Progress
- ✅ **Title**: Day 1.11 Conditionally Rendering List Items in React
- ✅ **Topics Covered**: Focused on conditionally rendering list items in React, showcasing its importance through a practical example. Using a Fruit component, the tutorial demonstrated how to dynamically display each fruit based on its stock availability. By emphasizing clean markup with fragments, the tutorial highlighted the significance of this approach in creating responsive and user-friendly interfaces.
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

If you prefer using Vite as a build tool for your React projects, you can create a new React app using Vite. Here's how:

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
    - ```? Project name: » <project-name>```
    - ```? Select a framework: » React```
    - ``` Select a variant: » JavaScript```

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

2. **Create a New File**: Inside the "components" folder of your React project, create a new file for the component. Ensure that the file name starts with a capital letter and has a .jsx extension.

3. **Define the Component**: In the newly created file, define the component as a JavaScript function. This function should return JSX, a syntax similar to HTML but with the power of JavaScript. Structure the JSX to represent the desired UI elements and their interactions.

4. **Export the Component**: To make the component accessible to other parts of the application, export it using the `export default` syntax followed by the component name.
    ```jsx
    function Hello() {
        return <h1>This is a Component!</h1>;
    }
  
    export default Hello
    ```

5. **Integrate the Component**: Import the newly created component into the main component or any other component where it is required. Use the component as you would any HTML tag, passing props as necessary.
    ```jsx
    import Hello from './components/Hello';

    function App() {
        return (
            <div className="App">
                <Hello />
                <Hello></Hello>
            </div>
        );
    }

    export default App
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
  return <h1>Hello, {props.name}! --> {props.age}</h1>;
}

export default Hello;
```

```jsx
// Using the Hello component
function App() {
  return <Hello name="Chathura" age="26"/>;
}

export default App;
```
### Destructuring Props
Destructuring allows you to extract values from objects or arrays and assign them to variables. It's commonly used to simplify access to props within functional components.
```jsx
// Hello component
function Hello({ name, age }) {
  return <h1>Hello, {name}! --> {age}</h1>;
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
        <h1>Hello, {name}! --> {age}</h1>
        <p>Seat Numbers: {seatNumbers} </p>
    </div>
  );
}

export default Hello;
```

```jsx
// Using the Hello component
const seatNumbers = [1, 2, 3, 4, 5]

function App() {
  return <Hello name="Chathura" age="26" seatNumbers={seatNumbers}/>;
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
Today's focus is on rendering arrays of lists and objects in React. We'll explore how to efficiently render dynamic content using the map() method in React components.

#### Usage of Array
```javascript
  const prices = [10, 20, 30, 40, 50];
  const discount = prices.map((prices) => prices * 0.9);
  console.log(discount);
```

### Rendering Arrays of Lists
When dealing with arrays of lists in React, the map() method comes in handy for iterating over each item in the array and rendering it as a list item in the UI.

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
Rendering arrays of objects in React involves using the map() method similarly to rendering arrays of primitive values. However, we need to ensure each list item has a unique key prop to help React efficiently update the UI.
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
By leveraging the map() method, we can dynamically render arrays of lists and objects in React components, making our UIs more flexible and responsive to data changes.

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
In the Fruits component, we have an array of fruits, each containing properties like name, price, and emoji. We utilize the map() method to iterate over this array and dynamically render the Fruit component for each fruit in the list. The key prop is provided to each Fruit component to ensure React can efficiently update the UI.

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
In this example, the ConditionalComponents function conditionally assigns either the Profile component or the Welcome component to the element variable based on the displayProfile condition. Then, it renders the element variable within the JSX, resulting in either the Profile or Welcome component being rendered.


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
In this alternative approach, the ternary operator is used directly within the JSX. If displayProfile is true, the Profile component is rendered; otherwise, the Welcome component is rendered.

## Day 1.11: [Conditionally Rendering List Items in React](https://github.com/Chathuraje/react-tutorial/tree/c9d7fb3acfaa75b184247335c0d2013b2c4ed5b2)

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

## Day 1.12: [Event Handling In React]
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
In this example, the handleClick function is defined to log a message to the console when the button is clicked. The onClick attribute in the button element is set to {handleClick}, indicating that the handleClick function should be called when the button is clicked.

### Understanding Event Handling Syntax
When setting up event handlers in React, you pass a function reference (not a function call) as the event handler. This ensures that the function is executed only when the event occurs, not immediately when the component renders.
If you use parentheses () when passing the function as a callback, the function will be called immediately when the component renders. This is not the desired behavior for event handlers, so make sure to omit the parentheses.

By effectively handling events in React components, you can create responsive and interactive user interfaces that enhance the overall user experience.

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
