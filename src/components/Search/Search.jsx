import React, { useRef, useState } from "react";
import { Input, IconButton, Box, Containe, Grid, GridItem, Container, Text } from "@chakra-ui/react";
import { FaSearch } from 'react-icons/fa';


export default function InputBusca({ onSubmit }) {

    const [search, setSearch] = useState('');
    const inputRef = useRef(null)

    const handleInputChange = (e) => setSearch(e.target.value)

    return (
        <Container maxW='container.sm'>
            <Box p={4}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit(inputRef.current.value)
                }}>

                    <Grid templateColumns='repeat(2, 1fr)' gap={1}>
                        <GridItem colSpan={3} h='10'>
                            <Text>Teste</Text>
                            <Input
                                type="text"
                                value={search}
                                onChange={handleInputChange}
                                ref={inputRef}
                            />
                        </GridItem>
                        <GridItem colStart={4} colEnd={6} h='10'>
                            <IconButton
                                colorScheme='white'
                                aria-label='Search database'
                                icon={<FaSearch />}
                                type="submit"
                            /> </GridItem>
                    </Grid>
                </form>
            </Box>
        </Container>
    )
}