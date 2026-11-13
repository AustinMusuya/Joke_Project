# 🤡 JokeLab

### Life is short. Laugh a little.

Welcome to **JokeLab**, your personal laboratory for questionable
humour, terrible puns, and jokes that are so bad they're actually good.

Feeling bored? Having a bad day? Need a joke to annoy your friends?

You've come to the right place.

JokeLab lets you choose your preferred humour, set your content
boundaries, and fetch a random joke from the internet.

**Warning:** Side effects may include uncontrollable laughter, dramatic
eye-rolling, and the occasional disappointed sigh.

---

## 🎭 What is JokeLab?

JokeLab is a simple joke-finder web application built with **Node.js and
Express**.

It uses the [JokeAPI](https://v2.jokeapi.dev/) to fetch random jokes
based on user preferences.

Instead of receiving whatever joke the internet throws at you, you get
to customise your experience.

Because even comedy needs boundaries.

## ✨ Features

- **Multiple joke categories:** Choose from Programming,
  Miscellaneous, Dark, Pun, Spooky, and Christmas.
- **Content preferences:** Exclude NSFW, religious, political, racist,
  sexist, and explicit content.
- **Joke formats:** Choose between one-liners, two-part jokes, or let
  JokeLab surprise you.
- **Dynamic joke results:** Display single jokes and two-part jokes
  using EJS.
- **Responsive interface:** Enjoy the experience on desktops, tablets,
  and mobile devices.
- **Simple API integration:** Fetch jokes from JokeAPI using Axios.

## 🛠️ Built With

Technology Purpose

---

Node.js JavaScript runtime
Express.js Backend web framework
EJS Server-side HTML templating
Axios HTTP requests to JokeAPI
HTML5 Page structure
CSS3 Styling and responsive design
JokeAPI The actual source of questionable humour

## 🚀 Getting Started

Want to run JokeLab locally? Excellent. Your journey into professional
nonsense begins here.

### Prerequisites

You'll need:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- An internet connection (the jokes aren't stored in your basement).

### 1. Clone the repository

```bash
git clone git@github.com:AustinMusuya/Joke_Project.git
```

### 2. Navigate into the project

```bash
cd Joke_Project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

Use the start command configured in your `package.json`.

For example:

```bash
node server.js
```

### 5. Open your browser

Visit:

```text
http://localhost:3000
```

And just like that, you're officially in the business of making people
laugh.

## ⚙️ How It Works

JokeLab follows a simple request-response flow:

1.  A user visits the homepage.
2.  The EJS form collects their joke preferences.
3.  The browser submits those preferences to the Express backend using
    HTTP POST.
4.  Express processes the submitted form data.
5.  Axios sends a GET request to JokeAPI with the selected categories
    and query parameters.
6.  JokeAPI returns a JSON response.
7.  Express passes the joke data to the EJS template.
8.  EJS renders the joke and sends the resulting HTML to the browser.

### A peek at the API

JokeLab communicates with:

<https://v2.jokeapi.dev>

For example, this endpoint requests a programming joke:

```text
https://v2.jokeapi.dev/joke/Programming
```

You can also combine categories and add filters:

```text
https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious&type=twopart
```

The API handles the joke generation. JokeLab handles the preferences and
presentation.

A beautiful partnership. Almost like a comedy duo.

## 📁 Project Structure

A typical project layout looks something like this:

```text
jokelab/
│
├── public/
│   └── styles/
│       └── main.css
│
├── views/
│   └── index.ejs
│
├── node_modules/
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

Your actual entry-point filename may differ.

## 🧠 What This Project Demonstrates

JokeLab is a small project, but it provides practical experience with
several important web development concepts:

- Building server-side applications with Express.
- Handling HTML form submissions using POST requests.
- Understanding `req.body` and Express middleware.
- Working with asynchronous JavaScript using `async` and `await`.
- Making HTTP requests using Axios.
- Constructing query strings with `URLSearchParams`.
- Integrating third-party REST APIs.
- Rendering dynamic content using EJS.
- Handling API errors with `try/catch`.
- Building responsive interfaces using CSS.

Sometimes the best way to learn backend development is to build
something simple, make it work, and then make it unnecessarily
entertaining.

## 🔮 Future Improvements

JokeLab has plenty of room to grow. Some ideas for future releases:

- [ ] Add a button to fetch another joke without returning to the top.
- [ ] Add a copy-to-clipboard feature.
- [ ] Add the ability to share jokes with friends.
- [ ] Add a favourite jokes collection.
- [ ] Add loading animations while fetching jokes.
- [ ] Add dark mode for people who prefer their humour and their
      screens dark.
- [ ] Add joke history.

## 🙌 Credits

- **JokeAPI:** For supplying the jokes and occasionally testing our
  patience.
- **Express.js:** For keeping the backend together.
- **EJS:** For making dynamic HTML possible.
- **Axios:** For doing the travelling between JokeLab and the API.

## 📜 License

This project is open-source and available under the MIT License, unless
otherwise specified in the repository.

---

<br/>

<p align="center">
  <strong>Made with ❤️, JavaScript, and a questionable sense of humour.</strong>
  <br />
  🤡 JokeLab — Because laughter is cheaper than therapy.
</p>
