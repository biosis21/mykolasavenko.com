import React, {useEffect, useState} from "react";

import {getEducation} from "../../services/WorkExperienceService";
import Section from "../Section";

const Education = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setJobs(getEducation());
    });

    // const renderedList = jobs.map((job) => {
    //     return (
    //             <WorkExperienceItem job={job} />
    //     );
    // });

    return (
        <Section title="Education">

        </Section>
    );
};

export default Education;