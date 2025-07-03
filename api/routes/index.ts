import {expressApp} from "../api";
import "./recipes";
import "./users";
import "./sessions";

expressApp.get("/", (req, res) => {
    res.send("Welcome to the Dinner Match API!");
});