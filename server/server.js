const express = require("express");
const { readFile, writeFile } = require("fs").promises;

const app = express();
const cors = require("cors");
const { SaveUserSchema } = require("./schemas/user.schema");

app.use(cors());
app.use(express.json());

app.get("/users/:userId/favorites", async (req, res) => {
  const { userId } = req.params;
  console.log(`Hämtar ${userId} s favoritbilder:`);
  try {
    const userData = await readFile("users.json", "utf-8");
    const users = JSON.parse(userData);
    const userFavorites = users.find(
      (user) => user.userId === userId
    )?.favorites;

    if (!userFavorites) {
      return res.status(404).send("Användaren har inga favoriter");
    }
    res.json(userFavorites);
  } catch (error) {
    console.error("Error fetching tuser favorites", error);
    res.status(500).send("Serverfel vid hämtning av favoriter");
  }
});

app.post("/users", async (req, res) => {
  const { error } = SaveUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error);
  }
  try {
    const { id: userId, favoriteImage } = req.body;
    console.log("userdata", req.body);

    const data = await readFile("users.json", "utf8");
    let users = JSON.parse(data);

    let userIndex = users.findIndex((user) => user.userId === userId);
    if (userIndex === -1) {
      console.log(`Lägger till en ny användare med userId: ${userId}`);
      users.push({ userId, favorites: [favoriteImage] });
    } else {
      console.log(
        `Uppdaterar den befintliga listan med favoriter för userId: ${userId}`
      );
      users[userIndex].favorites.push(favoriteImage);
    }
    console.log("Uppdaterar users.json med den nya informationen...");

    await writeFile("users.json", JSON.stringify(users, null, 2));
    res.status(201).send("Din favoritbild är sparad");
  } catch (error) {
    console.log("fel vid sparande av favoritbild", error);
    res.status(500).send("fel vid sparande av användare 2");
  }
});

//Delete

app.delete("/users/:userId/favorites/:imageId", async (req, res) => {
  const { userId, imageId } = req.params;
  console.log(
    `Tar bort bild ${imageId} från favoriter för användare ${userId}`
  );
  try {
    const data = await readFile("users.json", "utf8");
    let users = JSON.parse(data);

    const userIndex = users.findIndex((user) => user.userId === userId);
    if (userIndex === -1) {
      return res.status(404).send("Användaren hittades inte");
    }

    const user = users[userIndex];
    const filteredFavorites = user.favorites.filter(
      (favorite) => favorite !== imageId
    );
    user.favorites = filteredFavorites;

    await writeFile("users.json", JSON.stringify(users, null, 2));
    res
      .status(200)
      .send(
        `Bilden med ID ${imageId} har tagits bort från användarens favoriter`
      );
  } catch (error) {
    console.error("Fel vid borttagning av favoritbild", error);
    res.status(500).send("Serverfel vid borttagning av favoritbild");
  }
});

app.listen(3000, () => console.log("server is up"));
