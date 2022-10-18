import React from 'react';
import './styles.scss';

const SectionHeader = ({title}) => {
    return (
        <h2 className="section-header">{title}</h2>
    );
};

export default SectionHeader;