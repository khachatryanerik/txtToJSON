import Express from "express";
import routers from "./routers/routers";

const app = Express();

app.listen(3311);
app.use("/", routers);