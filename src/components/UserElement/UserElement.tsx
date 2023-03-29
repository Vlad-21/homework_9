import React from "react";
import {IUserElementProps} from "./UserElement.interface";
import './UserElement.css';
import {useNavigate} from "react-router-dom";

const UserElement: React.FC<IUserElementProps> = ({id, user}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/users/${id}`)} className="c-user-element-container">
            <h1 className="c-user-element-name">{user.name}</h1>
            <h2 className="c-user-element-company">Company: {user.company.name}</h2>
        </div>
    );
}

export default UserElement;