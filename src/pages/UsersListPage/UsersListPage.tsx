import React, {useEffect} from "react";
import {getUsers} from "../../http/httpUser";
const UserListPage: React.FC = () => {
    useEffect(() => {
        getUsers().then((response) => {
            console.log("Response =>", response);
        })
    }, []);
    return (
        <h1>User List Page</h1>
    );
};
export default UserListPage;