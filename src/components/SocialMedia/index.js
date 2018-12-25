import React, {useEffect, useState} from "react";
import "./styles.scss";

import {getSocialMedia} from "../../services/WorkExperienceService";

const SocialMedia = () => {
    const [socialMedia, setSocialMedia] = useState([]);

    useEffect(() => {
        setSocialMedia(getSocialMedia());
    });

    const renderedSocialMediaItems = socialMedia.map((social) => {
        return (
            <li
                key={social.name}
                className="social-media__item"
            >
                <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                    title={social.name}
                    className={`fa fa-${social.name}`}
                >&nbsp;</a>
            </li>
        );
    });

    return (
        <ul className="social-media">
            {renderedSocialMediaItems}
        </ul>
    );
};

export default SocialMedia;