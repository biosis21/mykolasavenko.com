import React, {useEffect, useState} from "react";

import {getEducation} from "../../services/WorkExperienceService";
import Section from "../Section";
import EducationItem from "../EducationItem";

const Education = () => {

    const [education, setEducation] = useState([]);

    useEffect(() => {
        setEducation(getEducation());
    });

    const renderedList = education.map((ed) => <EducationItem key={ed.id} item={ed} />);

    return (
        <Section title="Education">
            {renderedList}
        </Section>
    )
};

export default Education;