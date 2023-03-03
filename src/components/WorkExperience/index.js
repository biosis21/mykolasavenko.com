import React from "react";

import Section from "../Section";
import WorkExperienceItem from "../WorkExperienceItem";
import {professionalExperience} from "../../services";

const WorkExperience = () => {
    return (
        <Section title="Professional Experience">
            {professionalExperience.map((job) => {
                return (
                    <WorkExperienceItem
                        key={job.id}
                        job={job}
                    />
                );
            })}
        </Section>
    );
};

export default WorkExperience;