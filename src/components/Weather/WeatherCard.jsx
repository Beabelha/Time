import React, { useState, useEffect } from 'react';
import App from "../../App";

//Componentes visuais chackra
import {
    Grid, GridItem, Text, Container, Icon, Input, IconButton, Stack
} from '@chakra-ui/react'
//Icones
import { FaSearch } from 'react-icons/fa';
import { WiDayCloudy, WiDayRain, WiDaySunny, WiWindy } from "react-icons/wi";
import styled from '@emotion/styled';




function WeatherCard() {

    const [localizacao, setLocalizacao] = useState('');

    const [data, setData] = useState([]);

    useEffect(() => {
        WeatherSearch(localizacao);
    }, [localizacao]);

    const WeatherSearch = (localizacao) => {
        fetch("https://goweather.herokuapp.com/weather/" + localizacao)
            .then(response => response.json())
            .then(data => setData(data));
    };

    console.log(data);


    return (
        <>
            <Container maxW='container.sm'>
          
                <Stack direction='row' spacing={4}>
                    <Input placeholder='Digite a localização' value={localizacao} variant='flushed' focusBorderColor="purple.500" onChange={(e) => setLocalizacao(e.target.value)} />
                    <IconButton onSubmit={WeatherSearch} type='submit' aria-label='Procurar localidade' icon={<FaSearch />} />
                </Stack>

                <Grid
                    h='400px'
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={1}
                >

                    <GridItem rowSpan={1} colSpan={1}>
                        {data.description === 'Sunny' && <Icon as={WiDaySunny} boxSize={10} m="6" />}
                        {data.description === 'Rain' && <Icon as={WiDayRain} boxSize={10} m="6" />}
                        {data.description === 'Partly cloudy' && <Icon as={WiDayCloudy} boxSize={10} m="6" />}
                        {/* Adicionar mais condições conforme necessário */}

                    </GridItem>

                    <GridItem colSpan={5} >
                        <Text fontSize='5xl'>{data.temperature}</Text>
                        <Text fontSize='2xl'>{data.description}</Text>
                    </GridItem>

                    <GridItem colSpan={5} >
                        <Text fontSize='3xl'>
                            <Icon as={WiWindy} /> {data.wind} </Text>
                    </GridItem>


                </Grid>
            </Container>

        </>
    )
}

export default WeatherCard;