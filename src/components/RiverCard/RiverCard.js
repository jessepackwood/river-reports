import React from 'react'
import './RiverCard.scss'

const RiverCard = (props) => {

    const mapRivers = props.rivers.map( (river, index) => {
            return (
                <div className="river-card" key={index}>
                    <h2>{river.name}</h2>
                    <h2>Flow{river.flows}</h2>
                    <h2>Weather {river.weather}{'\u00b0'}F</h2>
                    <p>HIGH{river.high} {'\u00b0'}F</p>
                    <p>Low: {river.low} {'\u00b0'}F</p>
                    <p>Wind: {river.wind}mph</p>
                    <p>Sunrise: {river.sunrise}</p>
                    <p>Sunset: {river.sunset}</p>

                </div>
            )
        })

    return (
        <div>
            {mapRivers}
        </div>
    )
}

export default RiverCard;