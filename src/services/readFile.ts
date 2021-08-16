import fs from "fs";

export default function rf() {
    const rs = fs.createReadStream("./base.txt");

    rs.on("data", (chunk) => {
        console.log(chunk);
    })

    return rs;
};