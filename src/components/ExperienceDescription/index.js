import React from "react";

const ExperienceDescription = ({descriptions}) => {

    const renderedDescriptions = descriptions.map((desc, i) => (<li key={i}>{desc}</li>));

    return (
        <ul>
            {renderedDescriptions}
        </ul>
    );
};

export default ExperienceDescription;