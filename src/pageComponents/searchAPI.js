import React from 'react';
import axios from 'axios'


export class SearchAPI extends React.Component {
    constructor (){
        super()
        this.searchAPI.bind(this)
        this.enterFID.bind(this)
        this.unixToDDMMTT.bind(this)
        this.state = {
            results:{},
        }
    }

    enterFID = (e) => {
        e.preventDefault();
        this.setState({
            fid: e.target.value
        })      
    }

    //"+this.state.fid+"
    searchAPI = (e) => {
        this.setState(null)
        https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=FID%20%3E%3D%20406%20AND%20FID%20%3C%3D%20406&outFields=Date,ConfirmedCovidCases,TotalConfirmedCovidCases,ConfirmedCovidDeaths,TotalCovidDeaths,FID,CovidCasesConfirmed&outSR=4326&f=json
        fetch("https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=FID%20%3E%3D%20"+this.state.fid+"%20AND%20FID%20%3C%3D%20"+this.state.fid+"&outFields=Date,ConfirmedCovidCases,TotalConfirmedCovidCases,ConfirmedCovidDeaths,TotalCovidDeaths,FID,CovidCasesConfirmed&outSR=4326&f=json")
        .then((response)=> response.json())
        .then((data)=> this.setState({ results:data})) //console.log(data.features[0].attributes.ConfirmedCovidCases))
        console.log(this.state.results)
    }

    showData = () => {
       var date = this.unixToDDMMTT(this.state.results.features[0].attributes.Date)
        alert(' Accumlative covid cases for inputed FID:  ' + this.state.results.features[0].attributes.CovidCasesConfirmed + "\n" +
            ' Covid cases for inputed FID: '  + this.state.results.features[0].attributes.ConfirmedCovidCases + "\n" +
            ' Covid deaths for inputed fid: ' + this.state.results.features[0].attributes.ConfirmedCovidDeaths + "\n" +
            ' Date of occurance ' + date)

    }

    unixToDDMMTT (unixTime) {
        var date = new Intl.DateTimeFormat("en-GB").format(unixTime)

       return date
    }
    

    render (){

        return(
            <div className='App'>
                <form onSubmit={this.searchAPI}>
                <div className="form-group">
                    <label>Add Fid: </label>
                    <h1>{this.state.fid}</h1>
                    <input type='text' className='form-control'  minlength="1" maxlength="3"
                        value={this.state.fid}//requires user to add @ and . com to input otherwise a warning popup will appear
                        onChange={this.enterFID}>
                    </input>
                </div>
                </form>
                <button onClick={this.searchAPI}></button>
                <button onClick={this.showData}></button>
                
        </div>

        
        )
    }

}

//'https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=FID%20%3E%3D%20405%20AND%20FID%20%3C%3D%20405&outFields=CovidCasesConfirmed,FID,ConfirmedCovidCases,ConfirmedCovidDeaths&outSR=4326&f=json')//asynchronous by using a promise //now gets data from new api
