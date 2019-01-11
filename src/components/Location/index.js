import React from "react";

const Location = ({locations}) => {

    const renderLocations = locations.map((location, i) => (
        <span key={i}> {i ? '&' : ''} {location.city}, {location.country}</span>
    ));

    return (
        <div>
            {renderLocations}
        </div>
    );
};

export default Location;