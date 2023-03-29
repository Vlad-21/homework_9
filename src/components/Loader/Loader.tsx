import React from "react";
import './Loader.css';

const Loader: React.FC = () => {
    return (
        <div className="c-loader-container">
            <div className="c-loader-load">
                <div className="c-loader-circle"></div>
            </div>
        </div>
    );
}

export default Loader;