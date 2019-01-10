import React from "react";

const TimeRange = ({from, to}) => {

    return (
        <small>{from} - {to || "Present"}</small>
    );
};

export default TimeRange;