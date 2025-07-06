import {expressApp} from "../api.js";
import "./recipes";
import "./users";
import "./sessions";

expressApp.get("/", (req, res) => {
    res.send("Welcome to the Dinner Match API!");
});