# My Reads

A bookshelf app that allows to select and categorize books read, are currently reading, or want to read. The project is built using React and provides an API server and client library to interact with the application.

# App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

![Alt text](images/react-project1-a.png?raw=true "Image 1")

The main page also has a link to /search, a search page that allows to find books to add to library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

![Alt text](images/react-project1-b.png?raw=true "Image 2")

When a book is on a bookshelf, it has the same state on both the main application page and the search page.

![Alt text](images/correct-use-of-state.gif?raw=true "Image 3")

The search page also has a link to / (the root URL), which leads back to the main page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all project dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

# Resources

- Compose me That: Function Composition in JavaScript - https://www.linkedin.com/pulse/compose-me-function-composition-javascript-kevin-greene/
- Functional JavaScript: Function Composition For Every Day Use. - https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10
- Imperative vs Declarative Programming - https://tylermcginnis.com/imperative-vs-declarative-programming/
- Difference between declarative and imperative in React.js - https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js
- Avoid Reconciliation - https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation
- The Diffing Algorithm - https://reactjs.org/docs/reconciliation.html#the-diffing-algorithm
- How Virtual-DOM and diffing works in React- https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e
- Components and Props - https://reactjs.org/docs/components-and-props.html
- Rendering Elements - https://reactjs.org/docs/rendering-elements.html
- Create Apps with No Configuration - https://reactjs.org/blog/2016/07/22/create-apps-with-no-configuration.html
- What's New in Create React App - https://reactjs.org/blog/2017/05/18/whats-new-in-create-react-app.html
- Functional Components vs. Stateless Functional Components vs. Stateless Components - https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/
- You’re Missing the Point of React - https://medium.com/@dan_abramov/youre-missing-the-point-of-react-a20e34a51e1a
- React "Aha" Moments - https://tylermcginnis.com/react-aha-moments/
- 9 things every React.js beginner should know - https://camjackson.net/post/9-things-every-reactjs-beginner-should-know
- React Elements vs React Components - https://tylermcginnis.com/react-elements-vs-react-components/
