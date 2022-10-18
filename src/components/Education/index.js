import React from "react";

import Section from "../Section";
import EducationItem from "../EducationItem";
import { education } from "../../services";

const Education = () => {
    return (
        <Section title="Education">
            {education.map((ed) => {
                return (
                    <EducationItem
                        key={ed.id}
                        item={ed}
                    />
                );
            })}
        </Section>
    );
};

export default Education;