import express from "express";
import morgan from "morgan";
import axios from "axios";

const app = express();
const port = 3000;
const baseURL = "https://v2.jokeapi.dev";

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}/joke/Any`);

    const randomJoke = response.data;
    // console.log(randomJoke);

    res.render("index.ejs", {
      data: randomJoke,
      error: null,
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);

    res.render("index.ejs", {
      data: null,
      error: "Unable to fetch a joke. Please try again.",
    });
  }
});

app.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    const { category, blacklistFlags, type } = req.body;

    // Normalize categories and flags into arrays
    const categories = Array.isArray(category)
      ? category
      : category
        ? [category]
        : [];

    const flags = Array.isArray(blacklistFlags)
      ? blacklistFlags
      : blacklistFlags
        ? [blacklistFlags]
        : [];

    // Build category endpoint
    const selectedCategories = categories.length ? categories.join(",") : "Any";

    // Build query parameters
    const params = new URLSearchParams();

    if (flags.length) {
      params.set("blacklistFlags", flags.join(","));
    }

    if (type) {
      params.set("type", type);
    }

    // Construct final URL
    const url = `${baseURL}/joke/${selectedCategories}?${params.toString()}`;

    console.log("Requesting:", url);

    // Fetch joke
    const response = await axios.get(url);

    const randomJoke = response.data;

    if (randomJoke.error) {
      throw new Error(randomJoke.message || "JokeAPI returned an error");
    }

    res.render("index.ejs", {
      data: randomJoke,
      error: null,
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);

    res.render("index.ejs", {
      data: null,
      error: "Unable to fetch a joke. Please try again.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
