import React from "react";
import Location from "../Location";
import TimeRange from "../TimeRange";

const EducationItem = ({item}) => {

    return (
        <div>
            <h3>{item.name}</h3>
            <TimeRange
                from={item.from}
                to={item.to}
            />
            <div>{item.degree}</div>
            <div>{item.fieldOfStudy}</div>
            <Location locations={item.locations} />
        </div>
    );
};

export default EducationItem;