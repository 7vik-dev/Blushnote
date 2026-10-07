const fs = require("fs");
const path = require("path");

const source = path.resolve(__dirname, "..", "assets");
const destination = path.resolve(__dirname, "..", "dist", "assets");

fs.cpSync(source, destination, { recursive: true });
