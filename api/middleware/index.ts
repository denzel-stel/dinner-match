import cookieParser from "cookie-parser";
import { expressApp } from "../api.js";
import express from "express"
import checkAuthenticated from "./authentication.js";
import cors from "cors";

// Parse json and urlencoded bodies
// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads
expressApp.use(express.json());

expressApp.use(cors())
expressApp.use(cookieParser());
expressApp.use('/auth', checkAuthenticated);
