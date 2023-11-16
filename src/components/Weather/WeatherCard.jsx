import React, { useState } from 'react';
import {
    Box, Container, Icon, Text, List, ListItem, Image, Grid, GridItem, SimpleGrid, Heading,
    Avatar,
    Center,
    Flex,
    Stack,
    Button,
    useColorModeValue,
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

    const date = new Date();
    const today = date.getDate();
    const month = date.getMonth();

    return (
        <Container
            as={SimpleGrid}
            maxW={'7xl'}
            columns={{ base: 1, md: 1 }}
        >
            <InputBusca onSubmit={WeatherSearch} />

            {data && (
                <Center py={6}>
                    <Box
                        maxW={'100%'}
                        w={'full'}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        overflow={'hidden'}>

                        <Flex justify={'center'}>
                            <Avatar
                                size={'2xl'}
                                src={
                                    "https://openweathermap.org/img/wn/" + data.icon + "@2x.png"}
                            />
                        </Flex>

                        <Box>
                            <Stack spacing={0} align={'center'} mb={1}>
                                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                {data.temperature}°C
                                </Heading>
                                <Text color={'gray.500'}>{data.weatherDescription}</Text>
                                <Text fontSize={'sm'} color={'gray.500'}> <Icon as={WiWindy} />{data.wind}</Text>
                            </Stack>

                            <Stack direction={'row'} justify={'center'} spacing={6}>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600}>{data.min}</Text>
                                    <Text fontSize={'sm'} color={'gray.500'}>
                                        {today}/{month}
                                    </Text>
                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600}>{data.max}</Text>
                                    <Text fontSize={'sm'} color={'gray.500'}>
                                       {today+1}/{month}
                                    </Text>
                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600}>{data.max}</Text>
                                    <Text fontSize={'sm'} color={'gray.500'}>
                                    {today+2}/{month}
                                    </Text>
                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600}>{data.max}</Text>
                                    <Text fontSize={'sm'} color={'gray.500'}>
                                    {today+3}/{month}
                                    </Text>
                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600}>{data.max}</Text>
                                    <Text fontSize={'sm'} color={'gray.500'}>
                                    {today+4}/{month}
                                    </Text>
                                </Stack>
                            </Stack>
                            
                        </Box>
                    </Box>
                </Center>
            )}
        </Container>
    );
}

export default WeatherCard;
