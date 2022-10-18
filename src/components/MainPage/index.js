import React from "react";

import './styles.scss';

import RightBlock from "../RightBlock";
import LeftBlock from "../LeftBlock";
import SocialMedia from "../SocialMedia";
import Skills from "../Skills";
import Awards from "../Awards";
import AboutMe from "../AboutMe";
import Contacts from "../Contacts";
import Education from "../Education";
import WorkExperience from "../WorkExperience";
import Certifications from "../Certifications";

const MainPage = () => {
    return (
        <div className="d-flex align-items-stretch main-page">
            <LeftBlock>
                <h1>Hi, I am Mykola Savenko</h1>
                <SocialMedia />
            </LeftBlock>
            <RightBlock>
                <AboutMe />
                <Skills />
                <WorkExperience />
                <Education />
                <Awards />
                <Certifications />
                <Contacts />
            </RightBlock>
        </div>
    );
};

export default MainPage;