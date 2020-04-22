import React from "react";
import {Collapse} from "reactstrap";

import './styles.scss';

import CollapseContext from "../../contexts/CollapseContext";

const ExperienceDescription = ({descriptions}) => {

    const renderDescriptions = descriptions.map((desc, i) => (<li key={i} dangerouslySetInnerHTML={{__html: desc}}></li>));

    return (
        <CollapseContext.Consumer>
            {(collapse) => (
                <Collapse isOpen={collapse}>
                    <ul className="experience-description">
                        {renderDescriptions}
                    </ul>
                </Collapse>
            )}
        </CollapseContext.Consumer>
    );
};

export default ExperienceDescription;