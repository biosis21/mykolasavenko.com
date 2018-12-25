import React, {useEffect, useState} from "react";
import {Col, Row} from "reactstrap";

import SectionHeader from "../SectionHeader";
import {getContacts} from "../../services/WorkExperienceService";

const Contacts = () => {

    const [contacts, setJobs] = useState([]);

    useEffect(() => {
        setJobs(getContacts());
    });

    return (
        <section>
            <Row>
                <Col xs="12">
                    <SectionHeader title="Contacts" />
                </Col>

                <Col xs="6">

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

                </Col>

            </Row>
        </section>
    );
};

export default Contacts;