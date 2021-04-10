import React from 'react';
import { Covid19Item } from './covid19Item';
//export class so it can be used in different locations
export class Covid19 extends React.Component {

    render() {
        return this.props.covid19.map((covid) => {
            return <Covid19Item covid={covid}></Covid19Item>
        })
    }
}
