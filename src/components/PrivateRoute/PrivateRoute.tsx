import React, {ReactElement} from "react";
import {Navigate} from "react-router-dom";
import {IPrivateProps} from "./Interfaces";

const ProtectedRoute = ({ user, children }: IPrivateProps): ReactElement => {
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;