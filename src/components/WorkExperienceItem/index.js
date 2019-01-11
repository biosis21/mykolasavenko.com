import React, {useState} from "react";
import {Col, Row} from "reactstrap";

import "./styles.scss";

import Location from "../Location";
import TimeRange from "../TimeRange";
import ExperienceDescription from "../ExperienceDescription";
import CollapseContext from "../../contexts/CollapseContext";

const WorkExperienceItem = ({job}) => {

    const [collapse, setCollapse] = useState(false);

    return (
        <Row className="work-experience-item align-items-center">
            <Col xs="2">
                <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="work-experience-item__image"
                        src={`/images/icons/${job.logo}`}
                        alt={job.company}
                    />
                </a>
            </Col>
            <Col>
                <h3
                    className="work-experience-item__title"
                    onClick={() => setCollapse(!collapse)}
                >
                    {job.title}
                </h3>
                <h4>{job.company}</h4>
                <Location locations={job.locations} />
                <TimeRange
                    from={job.from}
                    to={job.to}
                />

                <CollapseContext.Provider value={collapse}>
                    <ExperienceDescription descriptions={job.descriptions} />
                </CollapseContext.Provider>
            </Col>
        </Row>
    );
};

export default WorkExperienceItem;