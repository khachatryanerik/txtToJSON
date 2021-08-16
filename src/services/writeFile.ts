import fs from "fs";
import readfile from "../controllers/readFile";

export default function wf() {
    readfile().pipe(fs.createWriteStream("./final.json"));
}