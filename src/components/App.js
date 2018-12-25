import React from 'react';
import {Col, Row} from 'reactstrap';
import RightBlock from './RightBlock/RightBlock';

const App = () => {
    return (

        <Row style={{"height": "100vh"}}>
            <Col>My photo</Col>
            <Col>
                <RightBlock/>
            </Col>
        </Row>

    );
};

export default App;