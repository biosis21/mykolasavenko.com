import React from "react";
import {Container} from "reactstrap";
import './styles.scss';

import AboutMe from "../AboutMe";
import Contacts from "../Contacts";
import Education from "../Education";
import WorkExperience from "../WorkExperience";

const RightBlock = () => {

    return (
        <Container
            fluid={true}
            className="right-block"
        >
            <AboutMe />
            <WorkExperience />
            <Education />
            <Contacts />

        </Container>
    );
};

export default RightBlock;