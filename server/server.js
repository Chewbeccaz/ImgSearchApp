const express = require("express");
// const fs = require("fs").promises;
const { readFile, writeFile } = require("fs").promises;

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

//Funktion för att hämta listan för användaren.

//Fastanar i req.param och ej body. + find.
//JOI
//Se till att det matchar med url här och i klienten.

const getFavorites = async (userId) => {
  try {
    const data = await readFile("users.json", "utf8");
    const users = JSON.parse(data);
    const currentUser = users.find((user) => user.id === userId);
    return currentUser ? currentUser.favoriteImage : [];
  } catch (error) {
    console.error("Error fetching users favorites", error);
    return [];
  }
};

app.get("/users/:userId/favorites", async (req, res) => {
  try {
    const userId = req.query.userId;
    const favorites = await getFavorites(userId);
    res.status(200).json(favorites);
  } catch (error) {
    console.error("Error fetching the user", error);
    res.status(500).send("Error fetching user");
  }
});
//Joi för att validera req.body så att det ska se ut som det ska. steg 1.
//se till att användare inte blir flera
//Find för att kolla om anv finns i listan
//OM finns, skicka in i dens array.
//Om inte, skapa en ny array oc ny användare.
app.post("/test", async (req, res) => {
  try {
    console.log("userdata", req.body);

    const data = await readFile("users.json", "utf8");

    const users = JSON.parse(data);

    users.push(req.body);

    await writeFile("users.json", JSON.stringify(users));

    res.status(201).send("användare är sparad");
  } catch (error) {
    console.log("fel vid sparande av användare", error);
    res.status(500).send("fel vid sparande av användare 2");
  }
});

app.listen(3000, () => console.log("server is up"));
