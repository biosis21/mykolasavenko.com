import React from "react";

import Section from "../Section";
import WorkExperienceItem from "../WorkExperienceItem";
import {useJobs} from "../../services/WorkExperienceService";

const WorkExperience = () => {

    const jobs = useJobs();

    const renderList = jobs.map((job) => {
        return (
            <WorkExperienceItem
                key={job.id}
                job={job}
            />
        );
    });

    return (
        <Section title="Work Experience">
            {renderList}
        </Section>
    );
};

export default WorkExperience;