import React from "react";

import Section from "../Section";
import {useContacts} from "../../services/ProfileService";

const Contacts = () => {

    const {email} = useContacts();

    return (
        <Section title="Contacts">

            <address>
                <strong>Email</strong>
                <br />
                <a href={`mailto:${email}`}>{email}</a>
            </address>

        </Section>
    );
};

export default Contacts;