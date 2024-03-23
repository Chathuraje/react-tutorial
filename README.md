# React Tutorial Repository

Welcome to my React tutorial repository! Here, I document my journey of learning React through various video series. Each time I push to this repository, I'll update the progress I've made.

## Current Progress

- [ ] **Title**: Day 1.5: Create a React Component
- [ ] **Topics Covered**: Focused on understanding the core concepts of creating React components. It emphasized their pivotal role in building user interfaces efficiently. The session outlined practical steps for creating a React component, including identifying its purpose, defining it as a JavaScript function returning JSX, exporting the component, and integrating it into the main component. This foundational knowledge enables learners to enhance the functionality and aesthetics of their React projects effectively.
- [ ] **Date**: 2024-03-23

## Previous Progress
- [x] **Title**: Day 1.4: Cleaning up the project
- [x] **Topics Covered**: Delete unnecessary files and directories from the project.
- [x] **Date**: 2024-03-23

## Day 1.1: [Introduction to the React](https://github.com/Chathuraje/react-tutorial/tree/a6b8718a6d4869872272c9906a7c01c3e54001b9)

React is a JavaScript library for building user interfaces. It was developed by Facebook and is widely used for building modern web applications. Some key features of React include:

- **Component-Based Architecture**: React follows a component-based architecture, where the UI is broken down into reusable components. Each component manages its own state, making it easier to build and maintain complex user interfaces. Components can be composed together to create larger, more complex UIs, resulting in a modular and scalable codebase.
- **Declarative Syntax**: React uses a declarative syntax, allowing developers to describe how the UI should look at any given point in time. This makes the code more readable and easier to understand, as developers can focus on what the UI should look like rather than how to manipulate the DOM to achieve it. Declarative programming also leads to more predictable code behavior and fewer bugs.
- **Virtual DOM**: React utilizes a virtual DOM to efficiently update the UI. Instead of directly manipulating the browser's DOM, React creates a lightweight virtual representation of the DOM in memory. When changes are made to the UI, React compares the virtual DOM with the real DOM and only applies the necessary updates, minimizing DOM manipulation and improving performance.
- **One-Way Data Binding**: React implements one-way data binding, also known as unidirectional data flow. Data flows from parent components to child components via props, ensuring that changes in the parent component automatically propagate down to its children. This simplifies data management and reduces the likelihood of unexpected side effects, making the codebase more maintainable and easier to reason about.
- **Rich Ecosystem and Community Support**: React has a vibrant ecosystem with a wide range of libraries, tools, and resources available to developers. This includes libraries for state management (e.g., Redux, MobX), routing (e.g., React Router), form handling (e.g., Formik), and much more. Additionally, React has a large and active community of developers who contribute to its ongoing development, provide support, and share knowledge through forums, tutorials, and conferences.

## Day 1.2: [Tools that Required to Development](https://github.com/Chathuraje/react-tutorial/tree/9e484e6c0d370a26eb301feb070e011f063719e6)

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

## Day 1.3: [Create React App Using Vite](https://github.com/Chathuraje/react-tutorial/tree/330064cf153d64c3b9faed969946174f9bc20470)

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

## Day 1.4: [Cleaning up the project](https://github.com/Chathuraje/react-tutorial/tree/e257e70759a860e4bd7d25daf0cd41cb08a9a895)

Today's focus is on streamlining our project by removing unnecessary files and directories. This step is crucial for maintaining a clean and organized codebase, which ultimately contributes to better development efficiency and code readability. By cleaning up the project, we aim to create a more focused and efficient development environment, allowing us to better focus on implementing new features and improving existing ones.

## Day 1.5: [Create a React Component]
Today, I delved into the fundamental concept of creating React components. I gained insights into how components are structured and utilized to construct user interfaces efficiently.

### Steps to Create a React Component:

1. **Identify Component Purpose**: Determine the purpose of the component and its role within the application's UI.

2. **Create a New File**: Inside the "components" folder of your React project, create a new file for the component. Ensure that the file name starts with a capital letter and has a .jsx extension.

3. **Define the Component**: In the newly created file, define the component as a JavaScript function. This function should return JSX, a syntax similar to HTML but with the power of JavaScript. Structure the JSX to represent the desired UI elements and their interactions.

4. **Export the Component**: To make the component accessible to other parts of the application, export it using the `export default` syntax followed by the component name.
    ```
    function Hello() {
        return <h1>This is a Component!</h1>;
    }
  
    export default Hello
  
    ```

5. **Integrate the Component**: Import the newly created component into the main component or any other component where it is required. Use the component as you would any HTML tag, passing props as necessary.
    ```
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
