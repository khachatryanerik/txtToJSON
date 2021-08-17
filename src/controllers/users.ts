import services from "../services/users";
import { Request, Response } from "express";

function getUsers(req: Request, res: Response) {
    res.send(services.getUsers(req, res));
}

function getUser(req: Request, res: Response) {
    res.send(services.getUser(req, res));
}

function postUser(req: Request, res: Response) {
    res.send(services.postUser(req, res));
}

function deleteUser(req: Request, res: Response) {
    res.send(services.deleteUser(req, res));
}

function modifyUser(req: Request, res: Response) {
    res.send(services.modifyUser(req, res));
}

export { getUsers, getUser, postUser, deleteUser, modifyUser };