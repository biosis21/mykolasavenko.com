import React from "react";

const WorkExperienceItem = ({job}) => {

    const renderedLocations = job.locations.map((location, i) => (
        <span key={i}>{location.city}, {location.country}</span>
    ));

    const renderedDescriptions = job.descriptions.map((desc, i) => (<li key={i}>{desc}</li>));

    return (
        <div>
            <h3>{job.position}</h3>
            <h4>{job.company}</h4>
            <div>
                {renderedLocations}
            </div>
            <small>{job.from} - {job.to || "Present"}</small>
            <ul>
                {renderedDescriptions}
            </ul>
        </div>
    );
};

export default WorkExperienceItem;