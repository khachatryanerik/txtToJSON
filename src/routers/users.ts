import express from "express";
import { getUsers, getUser, postUser, deleteUser, modifyUser } from "../controllers/users"

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);

router.post("/", postUser);

router.delete("/:id", deleteUser);

router.patch("/:id", modifyUser);

export default router;