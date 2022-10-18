import React from "react";
import "./styles.scss";

const RightBlock = ({children}) => {
    return (
        <div className="flex-even">
            <div className="right-block">
                {children}
            </div>
        </div>
    );
};

export default RightBlock;
