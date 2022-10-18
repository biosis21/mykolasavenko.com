import React from "react";

const TimeRange = ({ from, to }) => {
    if (!from) return null;

    return (
        <small>
            {from} - {to || "Present"}
        </small>
    );
};

export default React.memo(TimeRange);