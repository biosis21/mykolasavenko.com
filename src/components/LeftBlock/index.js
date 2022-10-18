import React from "react";
import "./styles.scss";

const LeftBlock = ({ children }) => {
    return (
        <div className="flex-even">
            <div className="left-block">
                <div className="profile-image"></div>
                <div className="content text-center profile-desc">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LeftBlock;