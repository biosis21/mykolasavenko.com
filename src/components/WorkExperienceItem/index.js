import React from "react";

import Location from "../Location";

const WorkExperienceItem = ({job}) => {

    const renderedDescriptions = job.descriptions.map((desc, i) => (<li key={i}>{desc}</li>));

    return (
        <div>
            <h3>{job.position}</h3>
            <h4>{job.company}</h4>
            <Location locations={job.locations} />
            <small>{job.from} - {job.to || "Present"}</small>
            <ul>
                {renderedDescriptions}
            </ul>
        </div>
    );
};

export default WorkExperienceItem;