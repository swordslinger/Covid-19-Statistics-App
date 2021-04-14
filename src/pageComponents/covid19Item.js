import React from 'react';
import Card from 'react-bootstrap/Card';
//export class so it can be used in different locations
export class Covid19Item extends React.Component {

    render() {
        return (
            <div>
                <Card border="success" style={{ flex: 1, backgroundColor: '#aab0a8' }}>
                    <Card.Title ><br></br>{this.props.covid.Transmission}</Card.Title>
                    <Card.Header ><img src={this.props.covid.Image} width="400" height="200"></img></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {this.props.covid.Symptoms}<br></br><br></br>
                            {this.props.covid.LessCommonSymptoms}<br></br><br></br>
                            {this.props.covid.SeriousSymptoms}<br></br><br></br>
                            {this.props.covid.Prevention}<br></br><br></br>
                            {this.props.covid.Treatment}<br></br><br></br>
                            <img src={this.props.covid.RiskOfAge} width="800" height="350"></img>
                            <footer className="blockquote-footer">
                                {this.props.covid.Footer}<br></br><br></br>
                            </footer>
                        </blockquote>

                    </Card.Body>
                </Card>
            </div>
        );
    }

}

