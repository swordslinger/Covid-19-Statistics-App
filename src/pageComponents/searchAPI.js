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

    componentDidMount(){
        axios.get('https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=FID%20%3E%3D%20405%20AND%20FID%20%3C%3D%20405&outFields=CovidCasesConfirmed,FID,ConfirmedCovidCases,ConfirmedCovidDeaths&outSR=4326&f=json')//asynchronous by using a promise //now gets data from new api
        .then(
            (response) => {
            this.setState({ results: response.data })//data coming back as from the response of the web server
            }//response method
        )
        .catch((error) => {
        console.log(error)//logs error to console
        });//if things dont work catch method
    }

    searchAPI = (e) => {
        this.setState({
            fid: e.target.value
        })
 
    }

    

    render (){
        return(
            <div className='App'>

                <div className="form-group">
                    <label>Add Fid: </label>
                    <h1>{this.state.results.fields.name}</h1>
                    <input type='text' className='form-control'  minlength="1" maxlength="3"
                        value={this.state.fid}//requires user to add @ and . com to input otherwise a warning popup will appear
                        onChange={this.searchAPI}>
                    </input>
                </div>
        </div>
        )
    }

}
