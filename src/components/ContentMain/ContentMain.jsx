import React from "react";
import './ContentMain.css';

//Componentes
import Search from '../Search/Search';
import WeatherCard from '../Weather/WeatherCard';

//Chakra
import { Divider, Grid, GridItem} from '@chakra-ui/react'


function ContentMain() {
    return (
       
            <Grid m="5" templateColumns='repeat(1, 1fr)' gap={1}>
                <GridItem w='100%'> <Search /> </GridItem><br/>
                <GridItem w='100%'> <WeatherCard /> </GridItem>
            </Grid>
    
    );
}

export default ContentMain;
