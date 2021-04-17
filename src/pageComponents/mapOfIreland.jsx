// imports
import React from 'react';
import { MapContainer, GeoJSON, Marker, Popup, TileLayer,} from "react-leaflet"
import { L, layer } from "leaflet" 
import towns from '../data/towns.json'
import "leaflet-css"
import "./mapOfIreland.css"
import { map, popup } from 'leaflet-css';

  
export class MapOfIreland extends React.Component {

   position = [54, -8]

  
   

    //state object too save the coordinate points too use for popups on map and cases too display in popups 
    state = {}
    fid
    
    // aysnchrounus hook that gets invoked after first render
   async componentDidMount(){
    console.log(towns.features)
        //URL for api
        const url = "https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=Date,ConfirmedCovidCases,TotalConfirmedCovidCases,ConfirmedCovidDeaths,TotalCovidDeaths,CovidCasesConfirmed,StatisticsProfileDate&outSR=4326&f=json"
        //response from api
        const response = await fetch(url)
        //data from response convereted into a json object
        const data = await response.json()
        this.state = data
        this.fid = data.features.length - 1
        
       
        console.log(data.features[this.fid].attributes.ConfirmedCovidCases)
        console.log(data)
       
        
        //testing too see if covid cases for two areas can be added together
            //console.log(data.features[0].attributes.ConfirmedCovidCases + data.features[1].attributes.ConfirmedCovidCases)

        //testing to ensure coordinates are accesible 
           // console.log(data.features[0].geometry.x)

        //coordinates and cases for one area
        
  
    }

   

    

    //{towns.map(town =>
      //  <Marker>
        //    key = {town.FID}
            
        //</Marker>
    //)}

    
    //<Marker position={[this.position[0],this.position[1]]}>
    //<Popup>dis is a popup kid</Popup>
    //</Marker>

    //renders elements on screen
    render() {
        
    console.log(this.state)

        return (
            
            
        <div id="map">
            {/*Manul test to let user know if they are on the map of ireland page*/}
                <h1 style={{ color: "red", textAlign: "center" }}>This is a Test for Map of Ireland link</h1>
                <h1 style = {{ textAlign: "center"}}></h1>
                {/*creates an instance of a leaflet map*/}
            

                <MapContainer style = {{height:"90vh"}} zoom = {3} center={[0, 0]}>

                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {/*draws on the leaflet map with the json data from counties.json */}
                <GeoJSON  data = {towns.features} />
                <Marker position = {[1,1]}>
                    <Popup>
                    <h1>{this.position[1]}</h1>
                    </Popup>
                </Marker>
                
              

            </MapContainer>
        </div>
      
            
        )
    }
}