import React from 'react';
import { Covid19Item } from './covid19Item';
//export class so it can be used in different locations
export class Covid19 extends React.Component {

    //Splits array into pieces and passes each piece too covid19.item
    render() {
        return this.props.covid19.map((covid) => {
            return <Covid19Item covid={covid}></Covid19Item>
        })
    }
}
