import React from "react";
import {Col, Row} from "reactstrap";

import "./styles.scss";

import Section from "../Section";
import {useCertifications} from "../../services/ProfileService";

const Certifications = () => {

    const certifications = useCertifications();

    const renderedList = certifications.map((certificate) => (
        <Col
            key={certificate.id}
            xs="3"
        >
            <a
                className="certifications__item"
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="certifications__image"
                    src={certificate.image}
                    alt={certificate.title}
                    title={certificate.title}
                />
                <div className="certifications__overlay">{certificate.title}</div>
            </a>
        </Col>
    ));

    return (
        <Section
            className="certifications"
            title="Certifications"
        >

            <Row>
                {renderedList}
            </Row>

        </Section>
    );
};

export default Certifications;
