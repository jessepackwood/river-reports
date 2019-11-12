import React, { Component } from 'react';
import { fetchWeather, fetchRiver } from '../../services';
import RiverCard from '../../components/RiverCard/RiverCard';
import './RiverContainer.scss';

export default class RiverContainer extends Component {
    constructor() {
        super()

        this.state= {
            rivers:  [
                {   name: 'South Boulder Creek',
                    abbrev : 'BOCBGRCO',
                    zip: 80303,
                    flows: null,
                    idealFlow: {low: 20, perfect: 100, high: 500},
                    weather: '',
                    wind: null,
                    high: null,
                    low: null
                },

                {   name: 'Cheesman Canyon',
                    abbrev : 'PLACHECO',
                    zip: 80135,
                    flows: null,
                    idealFlow: {low: 80, perfect: 300, high: 500},
                    weather: '',
                    wind: null,
                    high: null,
                    low: null
                },
                {
                    name: 'Dream Stream',
                    abbrev: 'PLAHARCO',
                    zip: 80827,
                    flows: null,
                    idealFlow: {low: 80, perfect: 300, high: 500},
                    weather: '',
                    wind: null,
                    high: null,
                    low: null
                },
                {   name: 'Arkansas River',
                    abbrev : 'ARKSALCO',
                    zip: 80461,
                    flows: null,
                    idealFlow: {low: 80, perfect: 200, high: 500},
                    weather: '',
                    wind: null,
                    high: null,
                    low: null
                }
            ]
        }
    }




    async componentDidMount() {
        fetchRiver(this.state.rivers)
        .then(a => Promise.all(a))
        .then( updatedRivers => {
            console.log('updatedRivers', updatedRivers)
            this.setState({rivers: updatedRivers})
            return updatedRivers
        })
        .then((updatedRivers) => fetchWeather(updatedRivers))
        .then((a) => Promise.all(a))
        .then(updatedRivers => { 
            this.setState({rivers: updatedRivers})
            localStorage.setItem('rivers', JSON.stringify(updatedRivers))
        }) 
        this.setState({rivers: JSON.parse(localStorage.getItem('rivers'))})
    }


    render() {
        return (
            <div id="river-container">
                <RiverCard rivers = {this.state.rivers} />
            </div>
        )
    }
}

// //                {   name: 'Clear Creek',
// abbrev : 'CLEGOLCO',
// zip: 80401,
// flows: null,
// weather: null,
// wind: null,
// high: null,
// low: null
// },


// {   name: 'Colorado River (Pumphouse)',
// abbrev : 'COLKRECO',
// zip: 80459,
// flows: null,
// weather: null,
// wind: null,
// high: null,
// low: null
// },

// {   name: 'Blue River (Green Mountain)',
// abbrev : 'BLUGRECO',
// zip: 80459,
// flows: '',
// weather: null,
// wind: null,
// high: null,
// low: null
// }

// {   name: 'Blue River (Silverthorne)',
// abbrev : 'BLUDILCO',
// zip: 80498,
// flows: null,
// weather: null,
// wind: null,
// high: null,
// low: null
// },