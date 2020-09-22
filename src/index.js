"use strict";

const { join } = require("path");
const express = require("express");
const { TwingEnvironment, TwingLoaderFilesystem } = require("twing");

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
const app = express();

app.use("/static", express.static(join(process.cwd(), "public")));

let loader = new TwingLoaderFilesystem(join(__dirname, "views"));
let twing = new TwingEnvironment(loader);

app.get("/", (req, res) => {
    twing.render("index.twig").then((output) => res.end(output));
});

app.listen(port, host, () =>
    console.log(`App iniciada en http://${host}:${port}`)
);
