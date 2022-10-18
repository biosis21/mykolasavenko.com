import React from "react";
import {Col, Row} from "reactstrap";

import "./styles.scss";

import Section from "../Section";
import { awards } from "../../services";

const Awards = () => {

    return (
        <Section
            className="awards"
            title="Awards"
        >
            <Row className="awards__row">
                {awards.map((award) => (
                    <Col
                        key={award.id}
                        xs="3"
                    >
                        <a
                            className="awards__item"
                            href={award.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="awards__image"
                                src={award.image}
                                alt={award.title}
                                title={award.title}
                            />
                            <div className="awards__overlay">{award.title}</div>
                        </a>
                    </Col>
                ))}
            </Row>
        </Section>
    );
};

export default Awards;
