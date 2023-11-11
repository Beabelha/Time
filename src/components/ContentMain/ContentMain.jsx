import React from "react";
import './ContentMain.css';
import Search from '../Search/Search';
import Weather from '../Weather/WeatherCard'
import WeatherCard from '../Weather/WeatherCard';



function ContentMain() {
    return (
        <div class="content">
            <ul>
                <li><Search /></li>
                <li><WeatherCard /></li>
            </ul>
        </div>
    );
}

export default ContentMain;
