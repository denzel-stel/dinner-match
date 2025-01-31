import {expressApp} from "../api";
import "./recipes";
console.log("index.ts");
expressApp.get("/", (req, res) => {
    res.send("Welcome to the Dinner Match API!");
});