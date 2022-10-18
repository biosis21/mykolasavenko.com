import React from "react";
import {Col, Row} from "reactstrap";

import "./styles.scss";

import Section from "../Section";
import {certifications} from "../../services";

const Certifications = () => {
    return (
        <Section
            className="certifications"
            title="Certifications"
        >
            <Row>
                {certifications.map((certificate) => (
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
                ))}
            </Row>
        </Section>
    );
};

export default Certifications;
