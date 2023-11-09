import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
const port = 3000;

// get user
app.get("/user", async (req, res) => {
  try {
    const user = await prisma.user.findMany();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
});

// create user
app.post("/user", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: "rejaul@gmail.com",
        name: "rejaul",
      },
    });
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
});

// delete user
app.delete("/user", async (req, res) => {
  try {
    const user = await prisma.user.deleteMany();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
});

// update user
app.put("/user", async (req, res) => {
  try {
    const user = await prisma.user.updateMany({
      where: {
        name: "rejaul",
      },
      data: {
        name: "kamal",
      },
    });
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
