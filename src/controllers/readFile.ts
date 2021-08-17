import readFile from "../services/readFile";
import { Request, Response } from "express";

export default function(req: Request, res: Response) {
    return readFile(req, res);
};