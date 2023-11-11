import React from "react";
import './ContentMain.css';
import Search from '../Search/Search';
import Weather from '../Weather/WeatherCard'
import WeatherCard from '../Weather/WeatherCard';

import { Divider } from '@chakra-ui/react'


function ContentMain() {
    return (
        <div className="container">
            <ul>
                <li><Search /></li>
                <li><Divider /></li>
                <li><WeatherCard /></li>
            </ul>
        </div>
    );
}

export default ContentMain;
