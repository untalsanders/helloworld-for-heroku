"use strict";

const { join } = require("path");
const express = require("express");
const { TwingEnvironment, TwingLoaderFilesystem } = require("twing");

const port = process.env.NODE_PORT || 3000;
const app = express();
app.use("/static", express.static(join(process.cwd(), "public")));

let loader = new TwingLoaderFilesystem(join(__dirname, "views"));
let twing = new TwingEnvironment(loader);

app.get("/", (req, res) => {
    twing.render("index.twig").then((output) => res.end(output));
});

app.listen(port, () => console.log(`App iniciada en http://localhost:${port}`));
