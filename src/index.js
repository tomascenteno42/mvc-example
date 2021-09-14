
const path = require('path');

const express = require("express");

const { PrismaClient } = require('@prisma/client')


const app = express()

/* START SERVER CONFIG */

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

/* START SERVER CONFIG */

const prisma = new PrismaClient()

app.get("/posts", async (req, res) => {

  // const posts = await prisma.post.findMany({
  //   where: { published: true },
  //   include: { author: true },
  // })

  res.render("pages/index")
});

app.post("/post", async (req, res) => {

});

app.patch("/post/:id", async (req, res) => {

});

app.delete("/post/:id", async (req, res) => {

});

const server = app.listen(3000, ()=>{
  console.log("Listening on port 3000");
})
