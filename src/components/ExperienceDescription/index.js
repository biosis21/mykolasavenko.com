import React from "react";
import {Collapse} from "reactstrap";

import './styles.scss';

import CollapseContext from "../../contexts/CollapseContext";

const ExperienceDescription = ({descriptions}) => {
    return (
        <CollapseContext.Consumer>
            {(collapse) => (
                <Collapse isOpen={collapse}>
                    <ul className="experience-description">
                        {descriptions.map((desc, i) => (<li key={i} dangerouslySetInnerHTML={{__html: desc}}></li>))}
                    </ul>
                </Collapse>
            )}
        </CollapseContext.Consumer>
    );
};

export default ExperienceDescription;