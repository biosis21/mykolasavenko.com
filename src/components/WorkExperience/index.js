import React from "react";

import Section from "../Section";
import WorkExperienceItem from "../WorkExperienceItem";
import {useJobs} from "../../services/ProfileService";

const WorkExperience = () => {

    const list = useJobs();

    const renderList = list.map((job) => {
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