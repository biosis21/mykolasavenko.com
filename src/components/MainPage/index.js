import React from "react";

import './styles.scss';

import RightBlock from "../RightBlock";
import LeftBlock from "../LeftBlock";

const MainPage = () => {
    return (
        <div className="d-flex align-items-stretch main-page">
            <div className="flex-even">
                <LeftBlock />
            </div>
            <div className="flex-even">
                <RightBlock />
            </div>
        </div>
    );
};

export default MainPage;