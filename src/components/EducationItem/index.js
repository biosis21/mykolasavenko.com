import React from "react";
import Location from "../Location";

const EducationItem = ({item}) => {

    return (
        <div>
            <h3>{item.name}</h3>
            <small>{item.from} - {item.to || "Present"}</small>
            <h4>{item.degree}</h4>
            <div>{item.fieldOfStudy}</div>
            <Location locations={item.locations} />
        </div>
    );
};

export default EducationItem;