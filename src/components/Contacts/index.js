import React, {useEffect, useState} from "react";

import {getContacts} from "../../services/WorkExperienceService";
import Section from "../Section";

const Contacts = () => {

    const [contacts, setJobs] = useState([]);

    useEffect(() => {
        setJobs(getContacts());
    });

    return (
        <Section title="Contacts">
            <address>
                <strong>Address</strong>
                <br />
                {contacts.address}
            </address>

            <address>
                <strong>Phone Number</strong>
                <br />
                {contacts.phoneNumber}
            </address>

            <address>
                <strong>Email</strong>
                <br />
                <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </address>
        </Section>
    );
};

export default Contacts;