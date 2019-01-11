import React from "react";

import Section from "../Section";
import EducationItem from "../EducationItem";
import {useEducationList} from "../../services/ProfileService";

const Education = () => {

    const list = useEducationList();

    const renderList = list.map((ed) => {
        return (
            <EducationItem
                key={ed.id}
                item={ed}
            />
        );
    });

    return (
        <Section title="Education">
            {renderList}
        </Section>
    );
};

export default Education;