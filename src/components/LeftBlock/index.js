import React from "react";
import "./styles.scss";

import SocialMedia from "../SocialMedia";

const LeftBlock = () => {

    return (
        <div className="left-block">
            <div className="profile-image"></div>

            <div className="content text-center profile-desc">
                <h1>Hi, I am Mykola Savenko</h1>

                <SocialMedia />
            </div>

        </div>
    );
};

export default LeftBlock;