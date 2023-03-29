import React from "react";
import {HomeDescription} from "./HomeModel";
import './HomePage.css';

interface IHomeText {
    title: string,
    description: string
}

const HomePage: React.FC = () => {
    const homeText: IHomeText = HomeDescription;
    return (
        <div className="c-home-container">
            <h1 className="c-home-title">{homeText.title}</h1>
            <p className="c-home-text">{homeText.description}</p>
        </div>
    );
};

export default HomePage;