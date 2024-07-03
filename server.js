#!/usr/bin/env node
import express from "express";
import cors from "cors";
import { callOpenAI } from "./ai.js";
import https from "https";
import fs from "fs";

const app = express();
const PORT = 8443;

// Load SSL certificates
const options = {
    key: fs.readFileSync("/etc/letsencrypt/live/y3hqfr.myvserver.online/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/y3hqfr.myvserver.online/fullchain.pem")
};

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("API online...");
});

app.post("/api/ai", async (req, res) => {
    if (!req.body.prompt) {
        res.sendStatus(400);
    }
    console.log(req.body.prompt);

    const result = await callOpenAI(req.body.prompt);
    res.status(200).send(result);
});

// Create HTTPS server
https.createServer(options, app).listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`);
});
