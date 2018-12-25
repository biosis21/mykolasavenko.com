import React, {useEffect, useState} from "react";

import Section from "../Section";
import WorkExperienceItem from "../WorkExperienceItem";
import {getJobs} from "../../services/WorkExperienceService";

const WorkExperience = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setJobs(getJobs());
    });

    const renderedList = jobs.map((job) => {
        return (
            <WorkExperienceItem
                key={job.id}
                job={job}
            />
        );
    });

    return (
        <Section title="Work Experience">
            {renderedList}
        </Section>
    );
};

export default WorkExperience;