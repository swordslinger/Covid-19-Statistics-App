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
                console.log("If this message is displaying, then the json covid19 object is read in correctly ");
                console.log("Home button was selected you are now at the home page ");
            }
            )
            .catch((error) => {
                console.log(error)
                console.log("If this message is displaying, then the json covid19 object is not read in correctly ");
            });
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "red" }} >This is a quick brake down of the synptoms of Covid-19</h1>
                <Covid19 covid19={this.state.covid19}></Covid19>
            </div>
        );//pass data from home component to covid19 component
    }
}