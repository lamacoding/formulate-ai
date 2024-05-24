#!/usr/bin/env node
import express from "express";
import cors from "cors";
import {callOpenAI} from "./ai.js";

const app = express();
const PORT = 3003;

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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
