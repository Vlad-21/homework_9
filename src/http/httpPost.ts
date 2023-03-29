import {IPost} from "../interfaces/postInterface";

export function getPosts (): Promise<Array<IPost>> {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
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

export function getPost (id: number): Promise<IPost> {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
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