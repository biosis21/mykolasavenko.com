import React from "react";

import "./styles.scss";
import {socialMedia} from "../../services";

const SocialMedia = () => {
    return (
        <ul className="social-media">
            {socialMedia.map(({title, icon, link}) => {
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
            })}
        </ul>
    );
};

export default SocialMedia;