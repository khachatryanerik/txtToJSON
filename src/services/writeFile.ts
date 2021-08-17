import fs from "fs";
import { Request, Response } from "express";
import converter from "../services/converter";

export default function(req: Request, res: Response) {
    let result = "";
    const rs = fs.createReadStream("./base.txt");

    rs.on("data", (chunk) => {
        result += chunk.toString();
    })

    rs.on("close", () => {
        let textInRows = result.split("\r\n");
        let tempObj: any = {};

        for(let each of textInRows) {
            let tempArr = each.split("=");

            tempObj[tempArr[0]] = tempArr[1];
        }

        let jsonString = JSON.stringify(converter(tempObj));

        fs.writeFile("./result.json", jsonString, () => res.send("Json file created in your directory."));
    })
}