import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';//changes url of application and passes id
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import e from 'cors';
//export class so it can be used in different locations
export class UsersItem extends React.Component {

    constructor() {
        super();
        //button needs a constructoir to bind to
        this.DeleteAccount = this.DeleteAccount.bind(this);
    }

    DeleteAccount(e) {
        e.preventDefault();//makes it canceable so it doesnt allways happen when the page is opened, so wont delete accidentally
        console.log("Delete: " + this.props.users2._id);
        //calls localhost:4000 url
        axios.delete("http://localhost:4000/users/" + this.props.users2._id)//passes up id
            .then(() => {
                this.props.ReloadData();//will call users.js//this will then call reload data on login.js and then update the list
            })
            .catch();
    }


    render() {
        return (
            <div>
                <Card border="success" style={{ flex: 1, backgroundColor: '#aab0a8' }}>
                    <Card.Header><h2 style={{ color: "red" }}>Accounts In database</h2></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <h3 style={{ color: "yellow" }}>Email</h3>
                            {this.props.users2.gmail}<br></br><br></br>{/* reads in data fron database and passes it to users to be mapped */}
                            <h3 style={{ color: "white" }}>Password</h3>
                            {this.props.users2.password}<br></br><br></br>
                        </blockquote>

                    </Card.Body>
                    <Link to={"/edit/" + this.props.users2._id} className="btn btn-primary">Edit</Link>{/* change url to specific id */}

                    <Button variant="danger" onClick={this.DeleteAccount}>Delete</Button>
                </Card>
            </div>
        );
    }
}