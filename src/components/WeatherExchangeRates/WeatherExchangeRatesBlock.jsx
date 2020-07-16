import React, { useState, useEffect } from 'react';
import './WeatherExchangeRatesBlock.scss'

export const WeatherExchangeRatesBlock = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('https://yuri-pashkevich.github.io/news/weather.json')
        .then(response => response.json())
        .then(json => setData(json))
    }, []);
    
    const weatherItems = data.map(item => {
        return (
            <div className="weather-exchange-items" key={item.id}>
                <img src={item.image} alt="img"></img>
                <span>{item.value}</span>
            </div>    
        )
    });
    return (
        <div className="weather-exchange-wrapper">
            {weatherItems}
        </div>
    )
}
