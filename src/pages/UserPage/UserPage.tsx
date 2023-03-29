import React, {useEffect, useState} from "react";
import './UserPage.css';
import {useLocation} from "react-router-dom";
import {getUser} from "../../http/httpUser";
import {IUser} from "../../interfaces/userInterface";
import Loader from "../../components/Loader/Loader";

const UserPage: React.FC = () => {
    const [user, setUser] = useState<IUser>();
    const [showLoader, setShowLoader] = useState<boolean>(false);
    const location = useLocation();
    const id:number = +location.pathname.split("/")[location.pathname.split("/").length - 1];
    useEffect(() => {
        setShowLoader(true);
        getUser(id).then((data) => {
            setUser(data);
            setShowLoader(false);
        }).catch((e) => {
            console.log(e);
        });
    }, [])
    return (
        <div className="p-user-container">
            <h1 className="p-user-username">{user?.name}</h1>
            <h2 className="p-user-text">{user?.username}</h2>
            <h2 className="p-user-text">{user?.company.name}</h2>
            <h2 className="p-user-text">{user?.phone}</h2>
            <h2 className="p-user-text">City: {user?.address.city}; Street: {user?.address.street}; Zipcode:{user?.address.zipcode};</h2>
            {showLoader && <Loader />}
        </div>
    )
}
export default UserPage;