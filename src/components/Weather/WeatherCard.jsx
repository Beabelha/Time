import * as React from "react";

//Componentes visuais chackra
import {
    Grid, GridItem, Text, Container, List, ListItem,
    ListIcon, Icon, Divider
} from '@chakra-ui/react'
//Icones
import { FaCloudRain, FaCloud, FaCloudMoon, } from 'react-icons/fa';


function WeatherCard() {


    return (
        <>
            <Container maxW='container.sm'>
                <Grid
                    h='400px'
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={1}
                >
                    <GridItem rowSpan={2} colSpan={1}><Icon as={FaCloudRain} boxSize={10} m="6" /></GridItem>
                    <GridItem colSpan={5} > <Text fontSize='5xl'>17°C - Localização</Text> </GridItem>
                    <GridItem colSpan={1} >
                        <List spacing={3}>
                            <ListItem>
                            <Text fontSize='xs'>12/11</Text>
                                <ListIcon as={FaCloudRain} color='white.500' />
                                17°C
                            </ListItem>
                        </List>
                    </GridItem>

                    <GridItem colSpan={1} >
                        <List spacing={3}>
                            <ListItem>
                            <Text fontSize='xs'>13/11</Text>
                                <ListIcon as={FaCloud} color='white.500' />
                                15°C
                            </ListItem>
                        </List>
                    </GridItem>

                    <GridItem colSpan={1} >
                        <List spacing={3}>
                            <ListItem>
                            <Text fontSize='xs'>14/11</Text>
                                <ListIcon as={FaCloudMoon} color='white.500' />
                                16°C
                            </ListItem>
                        </List>
                    </GridItem>

                    <GridItem colSpan={1} >
                        <List spacing={3}>
                            <ListItem>
                            <Text fontSize='xs'>15/11</Text>
                                <ListIcon as={FaCloudMoon} color='white.500' />
                                16°C
                            </ListItem>
                        </List>
                    </GridItem>

                    <GridItem colSpan={1} >
                        <List spacing={3}>
                            <ListItem>
                            <Text fontSize='xs'>16/11</Text>
                                <ListIcon as={FaCloud} color='white.500' />
                                16°C
                            </ListItem>
                        </List>
                    </GridItem>

                </Grid>
            </Container>

        </>
    )
}

export default WeatherCard;