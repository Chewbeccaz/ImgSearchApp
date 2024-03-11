const express = require("express");
// const fs = require("fs").promises;
const { readFile, writeFile } = require("fs").promises;

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

//Funktion för att hämta listan för användaren.
const getFavorites = async () => {
  const data = await readFile("users.json", "utf8");
  console.log(JSON.parse(data));
};

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
