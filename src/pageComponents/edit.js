import React from 'react';
import axios from 'axios';

export class Edit extends React.Component {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeGmail = this.onChangeGmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            Gmail: '',
            Password: ''
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);//logs id to console

        axios.get('http://localhost:4000/users/' + this.props.match.params.id)//asynchronious call to server
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Gmail: response.data.gmail,//lower case on the server
                    Password: response.data.password//locally uppercase
                })//this will invoke get request in server.js
            })
            .catch((error) => {// if there is an error put out to console
                console.log(error);
            });
    }

    onChangeGmail(e) {
        this.setState({
            Gmail: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            Password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();//prevent from being called multiple times
        alert("Account email: " + this.state.Gmail + " Password: " + this.state.Password);//shows if button works

        const newAccount = {
            gmail: this.state.Gmail,
            password: this.state.Password,
            _id: this.state._id
        }//passing objects up as lowercase because server.js is looking for them in that case

        axios.put('http://localhost:4000/users/' + this.state._id, newAccount)//calls url and asks what data should be passed up
            .then(res => {
                console.log(res.data)
            })
            .catch();
    }

    render() {
        //first div = //input control
        //last div = //button
        return (
            <div className='App'>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add gmail: </label>
                        <input type='text' className='form-control'
                            value={this.state.Gmail}
                            onChange={this.onChangeGmail}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label>Add password: </label>
                        <input type='text' className='form-control'
                            value={this.state.Password}
                            onChange={this.onChangePassword}>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Edit User'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>//when button is pressed will execute on submit method
        );
    }
}