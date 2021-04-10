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
                        <input type='text' className='form-control'
                            value={this.state.Gmail}
                            onChange={this.onChangeGmail}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label>Add password: </label>
                        <input type='password' className='form-control' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                            value={this.state.Password}
                            onChange={this.onChangePassword}>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add User'
                            className='btn btn-primary'></input>
                    </div>
                   
                </form>
                <div id="message">
                        <h3>Password must contain the following:</h3>
                        <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
                        <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                        <p id="number" class="invalid">A <b>number</b></p>
                        <p id="length" class="invalid">Minimum <b>8 characters</b></p>
                    </div>
                    
            </div>//when button is pressed will execute on submit method
            
        );
        
    }
}