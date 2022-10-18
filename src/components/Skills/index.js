import React from "react";
import {Col, Row} from "reactstrap";

import "./styles.scss";

import Section from "../Section";
import {skills} from "../../services";

const Skills = () => {
    return (
        <Section
            className="skills"
            title="Skills"
        >
            <Row>
                <Col>
                    {skills.map((skill) => skill.name).join(', ')}
                </Col>
            </Row>
        </Section>
    );
};

export default Skills;
