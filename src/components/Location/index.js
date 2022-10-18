import React from "react";

const Location = ({locations}) => {
    return (
        <div>
            {locations.map((location, i) => (
                <span key={i}> {i ? '&' : ''} {location.city}, {location.country}</span>
            ))}
        </div>
    );
};

export default Location;