import React from "react";

import "./styles.scss";

import {useSocialMediaList} from "../../services/ProfileService";

const SocialMedia = () => {

    const socialMediaList = useSocialMediaList();

    const renderSocialMediaItems = socialMediaList.map(({name, link}) => {
        return (
            <li
                key={name}
                className="social-media__item"
            >
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                    title={name}
                    className={`fa fa-${name}`}
                >&nbsp;</a>
            </li>
        );
    });

    return (
        <ul className="social-media">
            {renderSocialMediaItems}
        </ul>
    );
};

export default SocialMedia;