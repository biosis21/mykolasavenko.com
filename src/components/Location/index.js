import React from "react";

const Location = ({locations}) => {

    const renderedLocations = locations.map((location, i) => (
        <span key={i}>{location.city}, {location.country}</span>
    ));

    return (
        <div>
            {renderedLocations}
        </div>
    );
};

export default Location;