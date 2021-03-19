// imports
import React from 'react';
import { MapContainer, GeoJSON } from "react-leaflet"
import counties from '../data/counties.json'
import "leaflet-css"
import "./mapOfIreland.css"



export class MapOfIreland extends React.Component {

    //state object too save the coordinate points too use for popups on map and cases too display in popups 
    state = {
        coordinates: [],
        cases: []
    }

 

    // aysnchrounus hook that gets invoked after first render
   async componentDidMount(){
        //URL for api
        const url = "https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
        //response from api
        const response = await fetch(url)
        //data from response convereted into a json object
        const data = await response.json()
        
        //testing too see if covid cases for two areas can be added together
            //console.log(data.features[0].attributes.ConfirmedCovidCases + data.features[1].attributes.ConfirmedCovidCases)

        //testing to ensure coordinates are accesible 
           // console.log(data.features[0].geometry.x)
       
        this.setState({ coordinates: data.features[0].geometry, cases: data.features[0].attributes.ConfirmedCovidCases})
        console.log(this.state)

    }


    //renders elements on screen
    render() {
        return (
            <div>
            {/*Manul test to let user know if they are on the map of ireland page*/}
                <h1 style={{ color: "red", textAlign: "center" }}>This is a Test for Map of Ireland link</h1>
                <h1 style = {{ textAlign: "center"}}>Map of Ireland</h1>
                {/*creates an instance of a leaflet map*/}
                <MapContainer style = {{height:"100vh"}} zoom = {2} center={[20, 20]}>
                        {/*draws on the leaflet map with the json data from counties.json */}
                        <GeoJSON data = {counties.features} />
                </MapContainer>

                

                
            </div>
        );
    }
}