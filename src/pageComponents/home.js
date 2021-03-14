import React from 'react';
import { Covid19 } from './covid19';
import axios from 'axios';
//export class so it can be used in different locations
export class Home extends React.Component {

    state = {
        covid19: []
    };

    componentDidMount() {//component life cycle hook
        axios.get('https://jsonblob.com/api/b51e4a4e-84da-11eb-bc67-c93c7a334112')
            .then((response) => {
                this.setState({ covid19: response.data.covid19 })
                console.log(response.data.covid19)
            }
            )
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "red" }} >This is a quick brake down of the synptoms of Covid-19</h1>
                <Covid19 covid19={this.state.covid19}></Covid19>
            </div>
        );//pass data from page1 component to covid component
    }
}