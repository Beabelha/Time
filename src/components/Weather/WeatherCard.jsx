import React, { useState } from 'react';
import {
    Box, Container, Icon, Text, List, ListItem, Image
} from '@chakra-ui/react';
import { WiWindy } from 'react-icons/wi';
import InputBusca from '../Search/Search';

function WeatherCard() {
    const apiKey = "43729f79ad7fd24966a569aa1925d571";
    const [data, setData] = useState(null);

    const WeatherSearch = (localizacao) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=${apiKey}&lang=pt_br&units=metric`)
            .then(response => response.json())
            .then(weatherData => {
                // Atualize o estado 'data' com as informações recebidas
                setData({
                    temperature: weatherData.main.temp,
                    icon: weatherData.weather[0].icon,
                    min: weatherData.main.temp_min,
                    max: weatherData.main.temp_max,
                    feels: weatherData.main.feels_like,
                    weatherDescription: weatherData.weather[0].description,
                    wind: weatherData.wind.speed,
                    forecast: [],  
                });
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });

    };

    return (
        <Container maxW='container.sm'>
            <InputBusca onSubmit={WeatherSearch}/>
                {data && (
                    <Box mt={4}>
                          <Image src={"https://openweathermap.org/img/wn/" + data.icon + "@2x.png"} boxSize='50px'
                            objectFit='cover' />
                        <Text>Temperatura: {data.temperature}°C - {data.weatherDescription}</Text>
                        <Text>Min: {data.min} | Max: {data.max}</Text>
                        <Text>Sensação térmica: {data.feels}</Text>
                        <Text>Vento: <Icon as={WiWindy} />{data.wind}</Text>
                        <Box mt={4}>
                            <Text>Próximos 3 dias:</Text>
                            <List>
                                {data.forecast.map((temp, index) => (
                                    <ListItem key={index}>{temp.temperature}</ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                )}
        </Container>
    );
}

export default WeatherCard;
