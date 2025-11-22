import express from "express";
import { randomUUID } from "node:crypto";

const app = express();
const port = 3001;

app.use(express.json());

let boardGamesStorage = [
  {
    id: "3xAM1e5tR1ngI0",
    title: "Betrayal at House on the Hill",
    price: "$50-$65",
    tags: ["Co-op", "Horror", "Dice-rolling", "Modular Board"],
    description:
      "You and a group of friends all go to the spooky house on the hill, but secretly, one of you wants to make sure no one makes it out alive.",
  },
  {
    id: "an0tH3reX8m9lE",
    title: "Munchkin",
    price: "$10-$25",
    tags: ["Card Game", "Fantasy", "Humor", "Competative"],
    description:
      "The dungeon awaits for you to find treasure, glory, and laywers?! First one to loot their way to level 10 wins!",
  },
];

const sampleGame = {
  id: "3xAM1e5tR1ngI0",
  title: "Betrayal at House on the Hill",
  price: "$50-$65",
  tags: ["Co-op", "Horror", "Dice-rolling", "Modular Board"],
  description:
    "You and a group of friends all go to the spooky house on the hill, but secretly, one of you wants to make sure no one makes it out alive.",
};

console.log("Seeded Games:", boardGamesStorage);

app.get("/", (req, res) => {
  res.send("Hello World!!");
  console.log("Worked");
});

app.get("/boardgames", (req, res) => {
  res.status(200).json(boardGamesStorage);
  console.log("GET /boardgames");
});

app.get("/boardgames/:id", (req, res) => {
  const id = req.params.id;
  const searchedItem = boardGamesStorage.find((entry) => entry.id === id);
  console.log("GET /boardgames by id");

  if (!searchedItem) return res.status(404).json({ error: "Item not found" });

  res.status(200).json(searchedItem);
});

app.post("/boardgames", (req, res) => {
  const newItem = { id: null, ...req.body, id: randomUUID() };
  console.log("POST /games");

  if (!req.body?.title) {
    return res.status(400).json({ error: "Title is required" });
  } else if (!req.body?.price) {
    return res.status(400).json({ error: "Price is required" });
  } else if (!req.body?.tags) {
    return res.status(400).json({ error: "Tags are required" });
  } else if (!req.body?.description) {
    return res.status(400).json({ error: "Description is required" });
  } else {
    boardGamesStorage.push(newItem);
    res.status(201).json(newItem);
  }
});

app.delete("/boardgames/:id", (req, res) => {
  const id = req.params.id;
  const removedItem = boardGamesStorage.find((entry) => entry.id === id);
  console.log("DELETE /boardgames by id");

  if (!removedItem) return res.status(404).json({ error: "Item not found" });

  boardGamesStorage = boardGamesStorage.filter((entry) => entry.id !== id);
  res.status(200).json({ message: "Item removed successfully" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
