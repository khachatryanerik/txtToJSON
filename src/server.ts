import Express from "express";
import routers from "./routers/routers";
import users from "./routers/users";

const app = Express();

app.listen(3311);
app.use("/", routers);
app.use("/users/", users);