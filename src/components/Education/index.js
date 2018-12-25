import React, {useEffect, useState} from "react";
import {Col, Row} from "reactstrap";

import SectionHeader from "../SectionHeader";
import {getEducation} from "../../services/WorkExperienceService";

const Education = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setJobs(getEducation());
    });

    // const renderedList = jobs.map((job) => {
    //     return (
    //         <Col
    //             key={job.id}
    //             xs="12"
    //         >
    //             <WorkExperienceItem job={job} />
    //         </Col>
    //     );
    // });

    return (
        <section>
            <Row>
                <Col xs="12">
                    <SectionHeader title="Education" />
                </Col>
                {/*{renderedList}*/}
            </Row>
        </section>
    );
};

export default Education;