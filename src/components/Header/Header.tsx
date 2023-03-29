import React from "react";
import './Header.css';
import {useNavigate} from "react-router-dom";
import {logout} from "../../services/AuthService";
import {IHeaderProps} from "./HeaderInterfaces";



const Header: React.FC<IHeaderProps> = ({changeLogin}) => {
    const navigate = useNavigate();
    const handleLogoutClick = ():void => {
        logout();
        changeLogin(false);
    }
    return (
        <div className='c-header-container'>
            <h1 onClick={() => navigate('/')} className="c-header-logo">Logo</h1>
            <div className="c-header-page-container">
                <div onClick={() => navigate('/')} className="page-button">Home</div>
                <div onClick={() => navigate('/users')} className="page-button">Users</div>
                <div onClick={() => navigate('/posts')} className="page-button">Posts</div>
            </div>
            <div className="c-header-logout-container">
                <div onClick={handleLogoutClick} className="c-header-logout">Logout</div>
            </div>
        </div>
    )
};

export default Header;