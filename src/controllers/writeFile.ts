import { Request, Response } from "express";
import writeFile from "../services/writeFile";

export default function(req: Request, res: Response) {
    writeFile(req, res);
}