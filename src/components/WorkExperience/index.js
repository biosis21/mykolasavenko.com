import React from "react";

import Section from "../Section";
import WorkExperienceItem from "../WorkExperienceItem";
import {workExperience} from "../../services";

const WorkExperience = () => {
    return (
        <Section title="Work Experience">
            {workExperience.map((job) => {
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