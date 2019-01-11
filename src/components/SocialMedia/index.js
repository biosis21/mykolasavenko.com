import React from "react";

import "./styles.scss";

import {useSocialMediaList} from "../../services/ProfileService";

const SocialMedia = () => {

    const socialMediaList = useSocialMediaList();

    const renderSocialMediaItems = socialMediaList.map(({title, icon, link}) => {
        return (
            <li
                key={title}
                className="social-media__item"
            >
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                    title={title}
                    className={`fa fa-${icon}`}
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