import React from "react";
import ChangeName from "../change-name";

const AppHeader = ({ userName, changeName }) => {
    return (
        <div className="app-header d-flex justify-content-start">
            <h1>{userName}</h1>
            <ChangeName change={changeName} />
        </div>
    );
};

export default AppHeader;
