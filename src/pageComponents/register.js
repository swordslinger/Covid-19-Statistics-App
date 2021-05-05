import React from 'react';
import axios from 'axios';
import './registerStyle.css';

export class Register extends React.Component {
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
            password: this.state.Password
        }//passing objects up as lowercase because server.js is looking for them in that case
        axios.post('http://localhost:4000/Users', newAccount)//talks in http to send data to the server//returns promise asyncronisly
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        //first div = //input control
        //last div = //button
        return (
            <div className='App'>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add gmail: </label>
                        <input type='email' className='form-control' title="Must contain @ and .com" minlength="4" maxlength="64" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            value={this.state.Gmail}//requires user to add @ and . com to input otherwise a warning popup will appear
                            onChange={this.onChangeGmail}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label>Add password: </label>
                        <input type='password' className='form-control' minlength="4" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                            value={this.state.Password}//requires user to add atleast 4 character and 1 uppercase 1 lowercase and 1 number to there password
                            onChange={this.onChangePassword}>
                        </input>
                        {/* <label for="showPassword" class="field__toggle"></label>
                        Show password<input type="checkbox" id="show-password" class="field__toggle-input"></input> tried to show password or hide it*/ }
                    </div>
                    <div className="form-group">
                        <input type='submit'
                            value='Add User'
                            className='btn btn-primary'></input>
                    </div>
                </form>

            </div>//when button is pressed will execute on submit method

        );

    }
}