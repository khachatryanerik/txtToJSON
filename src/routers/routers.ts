import express from "express";
import readFile from "../controllers/readFile";
import writeFile from "../controllers/writeFile";


const router = express.Router();

router.get("/read-file", readFile);
router.get("/write-file", writeFile);

export default router;