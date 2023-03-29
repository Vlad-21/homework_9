import React from "react";
import './ErrorPage.css';

const ErrorPage: React.FC = () => {
    return (
        <div className="p-error-container">
            <h1 className="p-error-404">404</h1>
            <h2 className="p-error-title">Page Not Found</h2>
            <h2 className="p-error-title">Please follow the link:</h2>
            <a className="p-error-link" href="/">Home</a>
            <a className="p-error-link" href="/users">Users</a>
            <a className="p-error-link" href="/posts">Posts</a>
        </div>
    )
}

export default ErrorPage;