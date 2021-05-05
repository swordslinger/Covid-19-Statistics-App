// Imports
import React from 'react';
import axios from 'axios'

// Class declartion
export class SearchAPI extends React.Component {
    // Constructor
    constructor() {
        super()
        // Ensures methods always refer too instace they are being called on
        this.searchAPI.bind(this)
        this.enterFID.bind(this)
        this.unixToDDMMTT.bind(this)
        // State for holding data returned from API call
        this.state = {
            results: {},
        }
    }

    // Handler for inputting FID
    enterFID = (e) => {
        // Prevents auto submission 
        e.preventDefault();
        // State for retriving user input
        this.setState({
            fid: e.target.value
        })
    }

    // Searchs API
    searchAPI = (e) => {
        // Fetches response from API based on the FID user inputted
        fetch("https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=FID%20%3E%3D%20" + this.state.fid + "%20AND%20FID%20%3C%3D%20" + this.state.fid + "&outFields=Date,ConfirmedCovidCases,TotalConfirmedCovidCases,ConfirmedCovidDeaths,TotalCovidDeaths,FID,CovidCasesConfirmed&outSR=4326&f=json")
            // Converts response too json
            .then((response) => response.json())
            // sets results object equal to the json data returned
            .then((data) => this.setState({ results: data }))

        // Was to ensure program was working as intended
        // console.log(this.state.results)
    }

    // Method for displaying alert with the data retrived from the FID inputed,returns the total number of cases,covid cases and covid deaths for the FID and the date they occured
    showData = () => {
        //calls method too convert date attribute returned from unix to en-GB fromat
        var date = this.unixToDDMMTT(this.state.results.features[0].attributes.Date)
        alert(' Accumlative covid cases for inputed FID:  ' + this.state.results.features[0].attributes.CovidCasesConfirmed + "\n" +
            ' Covid cases for inputed FID: ' + this.state.results.features[0].attributes.ConfirmedCovidCases + "\n" +
            ' Covid deaths for inputed fid: ' + this.state.results.features[0].attributes.ConfirmedCovidDeaths + "\n" +
            ' Date of occurance ' + date)

    }

    // Method that takes in a unix tiem and converts it too en-gb format.
    unixToDDMMTT(unixTime) {
        var date = new Intl.DateTimeFormat("en-GB").format(unixTime)

        return date
    }


    // Renders view for user
    render() {

        return (
            <div className='App'>
                {/* submit form that takes in an fid and passes it to the search API method*/}
                <form onSubmit={this.searchAPI}>
                    <div className="form-group">
                        <label>Add Fid: </label>
                        <h1>{this.state.fid}</h1>
                        {/*Input of type text,minimum length is one,maximum is 3,stores value in states input is handled by the find FID method*/}
                        <input type='text' className='form-control' minlength="1" maxlength="3"
                            value={this.state.fid}
                            onChange={this.enterFID}>
                        </input>
                    </div>
                </form>
                {/*Populates the state*/}
                <button onClick={this.searchAPI}>SearchAPI</button>
                {/*displays attribute of the results object in state*/}
                <button onClick={this.showData}>ShowData</button>

            </div>


        )
    }

}

//'https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=FID%20%3E%3D%20405%20AND%20FID%20%3C%3D%20405&outFields=CovidCasesConfirmed,FID,ConfirmedCovidCases,ConfirmedCovidDeaths&outSR=4326&f=json')//asynchronous by using a promise //now gets data from new api
