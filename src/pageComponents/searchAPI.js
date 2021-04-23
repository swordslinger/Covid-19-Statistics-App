import React from 'react';
import axios from 'axios'

export class SearchAPI extends React.Component {
    constructor (){
        super()
        this.searchAPI.bind(this)
        this.state = {
            fid:"",
            results:{}
        }
    }

    enterFID = (e) => {
        e.preventDefault();
        this.setState({
            fid: e.target.value
        })
        
        
    }

    searchAPI = (e) => {
        e.preventDefault();
        axios.get("https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=FID%20%3E%3D%20405%20AND%20FID%20%3C%3D%20405&outFields=CovidCasesConfirmed,FID,ConfirmedCovidCases,ConfirmedCovidDeaths&outSR=4326&f=json")
        .then(res =>{
            this.state.results = res
        }.catch(error)
        {

        })

    }

    

    render (){
        console.log(this.state.fid)
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
        </div>

        
        )
    }

}

//'https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=FID%20%3E%3D%20405%20AND%20FID%20%3C%3D%20405&outFields=CovidCasesConfirmed,FID,ConfirmedCovidCases,ConfirmedCovidDeaths&outSR=4326&f=json')//asynchronous by using a promise //now gets data from new api
