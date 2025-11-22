import express from "express";

const app = express();
const port = 3000;

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
export default boardGamesStorage;





app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
