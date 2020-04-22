import React from "react";
import {Col, Row} from "reactstrap";

import "./styles.scss";

import Section from "../Section";
import {useSkills} from "../../services/ProfileService";

const Skills = () => {

    const skills = useSkills();

    const renderedList = skills.map((skill) => (
        <Row>
            <Col>
                {skill.name}
            </Col>
            <Col>
                {(new Date()).getFullYear() - skill.from}
            </Col>
        </Row>
    ));

    return (
        <Section
            className="skills"
            title="Skills"
        >
            <Row>
                <Col>
                    
                </Col>
                <Col title="Years">
                    Y.
                </Col>
            </Row>

            {renderedList}

        </Section>
    );
};

export default Skills;
