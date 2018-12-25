import React from 'react';
import {Col, Row} from "reactstrap";
import SectionHeader from "../SectionHeader";

const AboutMe = () => {

    return (
        <section>
            <Row>
                <Col xs="12">
                    <SectionHeader title="Who I am" />
                </Col>
                <Col xs="12">
                    <p>
                        Energetic and skilled Technical and Team Leader has a keen ability for software development
                        and
                        supervision with 8+ years of experience. Highly organized and motivated with excellent
                        architectural, analytical and problem-solving skills. Exceptional at breaking down
                        engineering
                        initiatives into tactical plans processes to release successful innovation solutions and
                        achieve
                        project goals. Strong mentor and coach, skilled in inspiring confidence and leading by
                        example.
                    </p>
                </Col>
            </Row>
        </section>
    );
};

export default AboutMe;