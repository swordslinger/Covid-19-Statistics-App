import React from 'react';
import Card from 'react-bootstrap/Card';
//export class so it can be used in different locations
export class UsersItem extends React.Component {   

    render() {
        return (
            <div>
                <Card border="success"  style={{flex:1, backgroundColor:'#aab0a8'}}>
                    <Card.Header >Accounts In database</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        {this.props.users2.gmail}<br></br><br></br>{/* reads in data fron database and passes it to users to be mapped */}
                      
                        {this.props.users2.password}<br></br><br></br>
                        </blockquote>
                        
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

