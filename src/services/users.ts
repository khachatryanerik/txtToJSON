import users from "../../databases/db";
import { Request, Response } from "express";

function getUsers(req: Request, res: Response) {
    let result = 0 != users.length ? users : "Nothing to show";

    return result;
}

function getUser(req: Request, res: Response) {
    let result;

    for(let i = 0; i < users.length; i++) {
        if(users[i].id == req.params.id) {
            result = users[i];

            break;
        }
    }

    result = result ?? "There is no such user";

    return result;
}

function postUser(req: Request, res: Response) {
    const query = req.query;
    const receivedJSON = {
        "firstName": query.firstName,
        "lastName": query.lastName,
        "proffesion": query.profession,
        "id": users.length
    };

    users.push(receivedJSON);

    return "Sent";
}

function deleteUser(req: Request, res: Response) {
    for(let i = 0; i < users.length; i++) {
        if(users[i].id == req.params.id) {
            users.splice(i, 1);

            break;
        }
    }

    for(let i = 0; i < users.length; i++) {
        users[i].id = i;
    }

    return "Deleted";
}

function modifyUser(req: Request, res: Response) {
    const query = req.query;
    const receivedJSON = {
        "firstName": query.firstName,
        "lastName": query.lastName,
        "profession": query.profession,
    };

    for(let i = 0; i < users.length; i++) {
        if(users[i].id == req.params.id) {
            users.splice(i, 1, receivedJSON);
            users[i].id = i;

            break;
        }
    }

    return "Modified";
}

export default { getUser, getUsers, postUser, deleteUser, modifyUser };