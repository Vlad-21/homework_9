import React, {useEffect, useState} from "react";

import {getUsers} from "../../http/httpUser";
import {IUser} from "../../interfaces/userInterface";

import UserElement from "../../components/UserElement/UserElement";
import Loader from "../../components/Loader/Loader";

import './UsersListPage.css';


const UsersListPage: React.FC = () => {
    const [users, setUsers] = useState<Array<IUser>>([]);
    const [showLoader, setShowLoader] = useState<boolean>(false);
    useEffect(() => {
        setShowLoader(true);
        getUsers().then((response: Array<IUser>) => {
            setUsers(response);
            setShowLoader(false);
        }).catch((e) => {
            console.log(e);
        })
    }, []);

    return (
        <div className="p-user-list-container">
            {users.map((item) => (
                <UserElement key={item.id} id={item.id} user={item}/>
            ))}
            {showLoader && <Loader />}
        </div>
    );
};
export default UsersListPage;