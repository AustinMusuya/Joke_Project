# JokeLab 2.0 --- Modernisation Roadmap

## Why modernise?

JokeLab began as a server-rendered application built with Node.js,
Express and EJS. That approach is perfectly reasonable for a small
application, but the current implementation is becoming restrictive as
the interface becomes more interactive.

### Current limitations

-   **Full-page reloads:** Submitting joke preferences triggers a
    complete page refresh, interrupting the user experience.
-   **Lost user preferences:** Selected categories, content restrictions
    and joke formats are not preserved after form submissions.
-   **Limited state management:** There is no centralised way to manage
    preferences, joke results, loading indicators and errors.
-   **Tight frontend/backend coupling:** Express renders EJS templates
    directly, combining presentation responsibilities with backend
    request handling.
-   **Manual DOM manipulation:** Adding asynchronous interactions
    requires manually updating HTML elements, which becomes harder to
    maintain as the interface grows.
-   **Increasing frontend complexity:** Features such as favourites,
    joke history and sharing will be more cumbersome to implement with
    the current approach.

EJS is not inherently a problem. The limitation is that the current
server-rendered approach is less suited to the richer, stateful
interface planned for JokeLab.

## Proposed direction

JokeLab will gradually transition to a React frontend backed by an
Express REST API.

The existing Express application and JokeAPI integration will be
retained where practical. The main change is to separate frontend
presentation and state management from backend responsibilities.

### Proposed technology stack

  Technology   Responsibility
  ------------ -----------------------------------------------
  React        Interactive frontend and component-based UI
  Vite         Frontend development server and build tooling
  Node.js      JavaScript runtime
  Express.js   Backend REST API
  Axios        Requests from the backend to JokeAPI
  JokeAPI      External joke data provider
  CSS3         Styling and responsive design

React and Express will initially live in one repository as separate
applications. This keeps development straightforward while maintaining a
clear boundary between client and server.

## Planned architecture

``` text
jokelab/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── index.js
│   └── package.json
│
├── README.md
└── .gitignore
```

This is a proposed structure; it can be adjusted as the application
develops.

## Modernisation plan

### 1. Separate the frontend and backend

-   [ ] Introduce a React + Vite frontend in `client/`.
-   [ ] Keep the existing Express application in `server/`.
-   [ ] Configure the development environment so the frontend can
    communicate with the backend.

### 2. Convert Express into a JSON API

-   [ ] Replace page-rendering responses in the joke-fetching route with
    JSON responses.
-   [ ] Keep JokeAPI requests on the backend.
-   [ ] Separate API routes, controllers and service logic.
-   [ ] Add request validation and consistent error responses.

### 3. Build the React interface

-   [ ] Replace EJS templates with React components.
-   [ ] Create reusable components such as `Navbar`, `Hero`,
    `PreferencesForm`, `CategorySelector`, `BlacklistSelector`,
    `JokeCard` and `Footer`.
-   [ ] Preserve the existing visual identity and responsive design.
-   [ ] Keep frontend API communication in a dedicated service module.

### 4. Introduce application state management

Start with React's built-in state tools rather than adding a
state-management library prematurely.

-   [ ] Use `useState` for straightforward component state.
-   [ ] Use `useReducer` where several related state transitions need to
    be managed together.
-   [ ] Preserve selected categories, blacklist flags and joke format
    between requests.
-   [ ] Manage the current joke, loading status and error messages.
-   [ ] Evaluate Context or a library such as Zustand only if shared
    state becomes difficult to manage.

### 5. Improve the user experience

-   [ ] Fetch jokes without full-page reloads.
-   [ ] Add a loading state while a joke is being fetched.
-   [ ] Display useful error messages without clearing user preferences.
-   [ ] Add a button to fetch another joke using the current
    preferences.
-   [ ] Ensure the results area updates without disrupting the rest of
    the interface.

### 6. Add new features

-   [ ] Add copy-to-clipboard functionality.
-   [ ] Add the ability to share jokes with friends.
-   [ ] Introduce a favourites collection.
-   [ ] Add joke history.
-   [ ] Implement dark mode.
-   [ ] Add polished loading animations.

## Development principles

-   **Incremental migration:** Modernise the application in manageable
    stages rather than rewriting everything at once.
-   **Separation of concerns:** React handles the interface; Express
    handles backend routes and integrations.
-   **Keep dependencies purposeful:** Use React's built-in state
    management first. Add libraries only when they solve a demonstrated
    problem.
-   **Preserve working functionality:** Retain the existing JokeAPI
    integration and backend logic where practical.
-   **Learn the fundamentals:** Understand components, hooks, state,
    HTTP requests and API boundaries instead of relying on abstractions
    without understanding them.

## Definition of success

The modernised JokeLab should allow users to change preferences and
request jokes without reloading the page. Their selected preferences
should remain intact between requests, and loading, success and error
states should be handled clearly.

The frontend and backend should have distinct responsibilities, making
it easier to maintain the application and introduce features such as
favourites and joke history.

------------------------------------------------------------------------

*JokeLab 2.0: better architecture, better interactions, and the same
questionable humour.*
