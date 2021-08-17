import Express from "express";
import routers from "./routers/routers";
import users from "./routers/users";
import dotenv from "dotenv";

const app = Express();

dotenv.config();

app.listen(process.env.PORT);
app.use("/", routers);
app.use("/users/", users);