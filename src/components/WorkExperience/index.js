import React, {useEffect, useState} from "react";
import {Col, Row} from "reactstrap";

import SectionHeader from "../SectionHeader";
import WorkExperienceItem from "../WorkExperienceItem";
import {getJobs} from "../../services/WorkExperienceService";

const WorkExperience = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setJobs(getJobs());
    });

    const renderedList = jobs.map((job) => {
        return (
            <Col
                key={job.id}
                xs="12"
            >
                <WorkExperienceItem job={job} />
            </Col>
        );
    });

    return (
        <section>
            <Row>
                <Col xs="12">
                    <SectionHeader title="Work Experience" />
                </Col>
                {renderedList}
            </Row>
        </section>
    );
};

export default WorkExperience;