import React from "react";

import Location from "../Location";
import TimeRange from "../TimeRange";
import ExperienceDescription from "../ExperienceDescription";

const WorkExperienceItem = ({job}) => {

    return (
        <div>
            <h3>{job.position}</h3>
            <h4>{job.company}</h4>
            <Location locations={job.locations} />
            <TimeRange
                from={job.from}
                to={job.to}
            />
            <ExperienceDescription descriptions={job.descriptions} />
        </div>
    );
};

export default WorkExperienceItem;