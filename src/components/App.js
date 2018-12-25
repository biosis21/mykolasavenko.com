import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import RightBlock from './RightBlock';
import LeftBlock from './LeftBlock';

const App = () => {
    return (
        <Container fluid={true}>
            <Row noGutters={true} style={{'height': '100vh'}}>
                <Col>
                    <LeftBlock />
                </Col>
                <Col>
                    <RightBlock />
                </Col>
            </Row>
        </Container>

    );
};

export default App;