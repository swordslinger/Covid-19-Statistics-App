// imports
import React from 'react';
import { MapContainer, GeoJSON, Marker, Popup, TileLayer, } from "react-leaflet"
import towns from '../data/towns.json'
import "leaflet-css"
import "./mapOfIreland.css"

// Class declaration
export class MapOfIreland extends React.Component {

    // Constructor for class
    constructor() {
        super()
        // Binds method too current instance
        this.getData.bind(this)
        // State for holding data returned from API call
        this.state = {
            apiData: {},
            fid: "",
            dailyCovidCase: ""
        }
    }


    // aysnchrounus hook that gets invoked after first render
    componentDidMount() {
        // Render runs once then this calls the getData() method
        this.getData()


    }

    //Method for retriving data from api
    async getData() {
        console.log(towns.features)
        // URL for api
        const url = "https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=Date,ConfirmedCovidCases,TotalConfirmedCovidCases,ConfirmedCovidDeaths,TotalCovidDeaths,CovidCasesConfirmed,StatisticsProfileDate&outSR=4326&f=json"
        //  response from api
        const response = await fetch(url)
        // data from response convereted into a json object
        const data = await response.json()
        // Stores json data into apiData object in state
        // The most recent entry in the data.features is always 1 less then the length,so by subtracting one of the length we get the most recent entry
        this.setState({ apiData: data, fid: data.features.length - 1 })
        // We set dailyCoivdcases = to the daily  coivd cases returned from the api
        this.setState({ dailyCovidCase: data.features[this.state.fid].attributes.ConfirmedCovidCases })

        //<!== Ensuring certain data was reachable and werent empty ==!>
        //console.log(this.state.dailyCovidCase)
        //console.log(data.features[this.state.fid])
        //console.log(data)
        //console.log(this.state.apiData.features[this.state.fid].attributes.Date)


        //testing too see if covid cases for two areas can be added together
        //console.log(data.features[0].attributes.ConfirmedCovidCases + data.features[1].attributes.ConfirmedCovidCases)

        //testing to ensure coordinates are accesible 
        // console.log(data.features[0].geometry.x)

    }

    // Renders view
    render() {

        return (
            <div id="map">
                {/*Displays FID of most recent entry*/}
                <h1>{this.state.fid}</h1>
                {/*If you see Map of Ireland linx at the top of the map,page has loaded sucesfully */}
                <h1 style={{ color: "red", textAlign: "center" }}> Map of Ireland link</h1>
                <h1 style={{ textAlign: "center" }}></h1>
                {/*creates an instance of a leaflet map*/}
                <MapContainer style={{ height: "90vh" }} zoom={3} center={[0, 0]}>
                    {/*Add a tileLayer to the  map*/}
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {/*draws polygons  on the leaflet map with the json data from counties.json */}
                    <GeoJSON data={towns.features} />
                    {/*Marker with hard coordinate cooridnates for appearing on Ireland*/}
                    <Marker position={[53, -8]}>
                        <Popup>
                            {/*When clicked displays the daily covid cases*/}
                            <h1>{this.state.dailyCovidCase}</h1>
                        </Popup>
                    </Marker>



                </MapContainer>
            </div>


        )

    }
}