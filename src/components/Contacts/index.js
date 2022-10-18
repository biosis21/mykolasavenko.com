import React from "react";

import Section from "../Section";
import { contacts } from "../../services";

const Contacts = () => {
    return (
        <Section title="Contacts">
            <address>
                <strong>Email</strong>
                <br />
                <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </address>
        </Section>
    );
};

export default Contacts;