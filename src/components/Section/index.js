import React from "react";
import {Col, Row} from "reactstrap";

import "./styles.scss";
import SectionHeader from "../SectionHeader";

const Section = ({title, children}) => {

    return (
        <section className="section">
            <Row>
                <Col xs="12">
                    <SectionHeader title={title} />
                </Col>
                <Col xs="12">
                    {children}
                </Col>
            </Row>
        </section>
    );
};

export default Section;