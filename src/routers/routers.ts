import express from "express";
import rf from "../controllers/readFile";
import wf from "../controllers/writeFile"

const router = express.Router();

router.get("/read-file", (req, res) => {
    rf();
    res.send("Reading started");
})

router.get("/write-file", (req, res) => {
    wf();
    res.send("Writing started");
})

export default router;