import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//export class so it can be used in different locations
export class Bot extends React.Component {

    render() {
        return (
            <div>

                {/**  <Container>
                    <Row>
                        <Col md={{ span: 12, offset: 8 }}><h2>The time is {new Date().toLocaleTimeString()}</h2></Col>
                        <Col md={{ span: 12, offset: 8 }}><h2>The current date is {new Date().toLocaleDateString()}</h2></Col>
                    </Row>
               </Container>**/}

                <Card style={{ width: '18rem' }} border="warning">

                    <Card.Body>
                        <Card.Title>Currently it is</Card.Title>
                        <Card.Text>
                            The time is {new Date().toLocaleTimeString()}<br></br>
                            The current date is {new Date().toLocaleDateString()}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div >
        );
    }

}