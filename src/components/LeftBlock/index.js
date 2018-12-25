import React from "react";
import "./styles.scss";

import SocialMedia from "../SocialMedia";

const LeftBlock = () => {

    return (

        <div style={{height: "100%", background: "gray", position: "relative"}}>
            <div className="profile-image"></div>

            <div className="content text-center profile-desc">
                <h1>Hi, I am Mykola Savenko</h1>

                <br />

                <span>Lead Software Engineer</span>

                <SocialMedia />
            </div>

        </div>

    );
};

export default LeftBlock;