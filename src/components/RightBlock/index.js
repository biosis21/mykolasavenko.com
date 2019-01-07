import React from "react";
import "./styles.scss";

import AboutMe from "../AboutMe";
import Contacts from "../Contacts";
import Education from "../Education";
import WorkExperience from "../WorkExperience";

const RightBlock = () => {

    return (
        <div className="right-block">
            <AboutMe />
            <WorkExperience />
            <Education />
            <Contacts />
        </div>
    );
};

export default RightBlock;