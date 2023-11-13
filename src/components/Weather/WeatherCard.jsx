import React, { useState, useEffect } from 'react';
import {
    Box, Container, Icon, Input, IconButton, Heading, Text, List, ListItem, Image
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { WiWindy } from 'react-icons/wi';

function WeatherCard() {
    const apiKey = "43729f79ad7fd24966a569aa1925d571";

    const [localizacao, setLocalizacao] = useState('');
    const [data, setData] = useState(null);

    let img = "";

    useEffect(() => {
        // Defina a localização padrão aqui, por exemplo, 'Brasilia'
        const localizacaoPadrao = 'Brasilia';
        WeatherSearch(localizacaoPadrao);
    }, []);

    useEffect(() => {
        WeatherSearch(localizacao);
    }, [localizacao]);


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

            fetch("")
    };


  
   
    return (

        

        <Container maxW='container.sm'>
            <Box p={4}>
                <Input
                    value={localizacao}
                    onChange={(e) => setLocalizacao(e.target.value)}
                    placeholder="Digite a cidade"
                />

                <IconButton
                    colorScheme='white'
                    aria-label='Search database'
                    onClick={WeatherSearch(localizacao)}
                    icon={<FaSearch />}
                />

                {data && (

                    <Box mt={4}>
                        {console.log(data.icon)}

                        <Heading w="100%">{localizacao}  - </Heading>  <Image src={"https://openweathermap.org/img/wn/" + data.icon + "@2x.png"} boxSize='50px'
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
            </Box>
        </Container>
    );
}

export default WeatherCard;
