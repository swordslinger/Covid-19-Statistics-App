import React from 'react';
import Card from 'react-bootstrap/Card';
//export class so it can be used in different locations
export class UsersItem extends React.Component {   

    render() {
        return (
            <div>
                <Card border="success"  style={{flex:1, backgroundColor:'#aab0a8'}}>
                    <Card.Header><h2 style={{ color: "red" }}>Accounts In database</h2></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <h3 style={{ color: "yellow" }}>Email</h3>
                        {this.props.users2.gmail}<br></br><br></br>{/* reads in data fron database and passes it to users to be mapped */}
                        <h3 style={{ color: "white" }}>Password</h3>
                        {this.props.users2.password}<br></br><br></br>
                        </blockquote>
                        
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

