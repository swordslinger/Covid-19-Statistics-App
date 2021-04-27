// imports
import React from 'react';
import { MapContainer, GeoJSON, Marker, Popup, TileLayer,} from "react-leaflet"
import { L, layer } from "leaflet" 
import towns from '../data/towns.json'
import "leaflet-css"
import "./mapOfIreland.css"
import { bind, map, popup } from 'leaflet-css';

  
export class MapOfIreland extends React.Component {

    constructor (props){
        super(props)
        this.getData.bind(this)
        this.state = {
            apiData:{},
            fid:"",
            dailyCovidCase:""
        }
    }

  
   

    //state object too save the coordinate points too use for popups on map and cases too display in popups 

    
    
    // aysnchrounus hook that gets invoked after first render
    componentDidMount(){
  
        this.getData()
        
  
    }

    async getData(){
        console.log(towns.features)
        //URL for api
        const url = "https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=Date,ConfirmedCovidCases,TotalConfirmedCovidCases,ConfirmedCovidDeaths,TotalCovidDeaths,CovidCasesConfirmed,StatisticsProfileDate&outSR=4326&f=json"
        //response from api
        const response = await fetch(url)
        //data from response convereted into a json object
        const data = await response.json()
        this.setState({ apiData:data, fid:data.features.length - 1})
        this.setState({dailyCovidCase : data.features[this.state.fid].attributes.ConfirmedCovidCases})
        console.log(this.state.dailyCovidCase)
        console.log(data.features[this.state.fid])
        console.log(data)
        console.log(this.state.apiData.features[this.state.fid].attributes.Date)
       
        
        //testing too see if covid cases for two areas can be added together
            //console.log(data.features[0].attributes.ConfirmedCovidCases + data.features[1].attributes.ConfirmedCovidCases)

        //testing to ensure coordinates are accesible 
           // console.log(data.features[0].geometry.x)

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
    if(!this.state.apiData  && !this.state.fid ){
        return null
    }
    else
    (
        console.log("ok")
    )
    

        
        return (    
        <div id="map">

         <h1>{this.state.fid}</h1>
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
                <Marker position = {[53,-8]}>
                    <Popup>
                    <h1>{this.state.dailyCovidCase}</h1>
                    </Popup>
                </Marker>
                
              

            </MapContainer>
        </div>
      
            
        )
    
    }
}