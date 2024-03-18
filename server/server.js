const express = require("express");
// const fs = require("fs").promises;
const { readFile, writeFile } = require("fs").promises;

const app = express();
const cors = require("cors");
const { SaveUserSchema } = require("./schemas/user.schema");

app.use(cors());
app.use(express.json());

//Funktion för att hämta listan för användaren.

//Fastanar i req.param och ej body. + find.
//JOI
//Se till att det matchar med url här och i klienten.------------------------------

// const getFavorites = async (userId) => {
//   try {
//     const data = await readFile("users.json", "utf8");
//     const users = JSON.parse(data);
//     const currentUser = users.find((user) => user.id === userId);
//     return currentUser ? currentUser.favoriteImage : [];
//   } catch (error) {
//     console.error("Error fetching users favorites", error);
//     return [];
//   }
// };

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
    // const userId = req.query.userId;
    // const favorites = await getFavorites(userId);
    // res.status(200).json(favorites);
  } catch (error) {
    console.error("Error fetching tuser favorites", error);
    res.status(500).send("Serverfel vid hämtning av favoriter");
  }
});

//Joi för att validera req.body så att det ska se ut som det ska. steg 1.
//se till att användare inte blir flera
//Find för att kolla om anv finns i listan
//OM finns, skicka in i dens array.
//Om inte, skapa en ny array oc ny användare.
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

    //Lägg till if-sats
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

app.listen(3000, () => console.log("server is up"));
