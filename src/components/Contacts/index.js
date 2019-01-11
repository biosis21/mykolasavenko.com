import React from "react";

import Section from "../Section";
import {useContacts} from "../../services/ProfileService";

const Contacts = () => {

    const {phoneNumber, email} = useContacts();

    return (
        <Section title="Contacts">
            <address>
                <strong>Phone Number</strong>
                <br />
                {phoneNumber}
            </address>

            <address>
                <strong>Email</strong>
                <br />
                <a href={`mailto:${email}`}>{email}</a>
            </address>
        </Section>
    );
};

export default Contacts;