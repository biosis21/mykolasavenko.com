import React from "react";

import "./styles.scss";

import Location from "../Location";
import TimeRange from "../TimeRange";
import {Col, Row} from "reactstrap";

const EducationItem = ({item}) => {

    return (
        <Row className="education-item align-items-center">
            <Col xs="2">
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="education-item__image"
                        src={`/images/icons/${item.logo}`}
                        alt={item.company}
                    />
                </a>
            </Col>
            <Col>
                <h3>{item.name}</h3>
                <h4>{item.degree}</h4>
                <div>{item.fieldOfStudy}</div>
                <Location locations={item.locations} />
                <TimeRange
                    from={item.from}
                    to={item.to}
                />
            </Col>
        </Row>
    );
};

export default EducationItem;