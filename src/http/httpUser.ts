import {IUser} from "../interfaces/userInterface";

export function getUsers (): Promise<Array<IUser>> {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => {
            response.json().then((data) => {
                resolve(data);
            }).catch((e) => {
                reject(e);
            })
        }).catch((e) => {
            reject(e);
        });
    });
}

export function getUser (id: number): Promise<IUser> {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
            response.json().then((data) => {
                resolve(data);
            }).catch((e) => {
                reject(e);
            })
        }).catch((e) => {
            reject(e);
        });
    });
}