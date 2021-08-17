import fs from "fs";
import { Request, Response } from "express";

export default function(req: Request, res: Response) {
    const rs = fs.createReadStream("./base.txt");

    rs.pipe(res);
};