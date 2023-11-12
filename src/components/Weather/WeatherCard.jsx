import React, { useState, useEffect } from 'react';
import App from "../../App";

//Componentes visuais chackra
import {
    Grid, GridItem, Text, Container, Icon, Input, IconButton, Stack
} from '@chakra-ui/react'
//Icones
import { FaCloudRain, FaCloud, FaCloudMoon, FaSearch} from 'react-icons/fa';



function WeatherCard() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://goweather.herokuapp.com/weather/Cariacica')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);


    return (
        <>
            <Container maxW='container.sm'>

                <Stack direction='row' spacing={4}>
                    <Input placeholder='Digite a localização' variant='flushed' focusBorderColor="purple.500" />
                    <IconButton aria-label='Procurar localidade' icon={<FaSearch />} />
                </Stack>

                <Grid
                    h='400px'
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={1}
                >

                    <GridItem rowSpan={2} colSpan={1}><Icon as={FaCloudRain} boxSize={10} m="6" /></GridItem>

                    <GridItem colSpan={5} > <Text fontSize='5xl'>{data.temperature}</Text> </GridItem>

                </Grid>
            </Container>

        </>
    )
}

export default WeatherCard;