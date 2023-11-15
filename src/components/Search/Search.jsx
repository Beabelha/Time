import React, { useRef, useState} from "react";
import { Input , IconButton, Box, Container} from "@chakra-ui/react";
import { FaSearch } from 'react-icons/fa';


export default function InputBusca ({ onSubmit }) {

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
                    <Input
                        type="text"
                        value={search}
                        onChange={handleInputChange}
                        ref={inputRef}
                    />
                    <IconButton
                            colorScheme='white'
                            aria-label='Search database'
                            icon={<FaSearch />}
                            type="submit"
                        />
                </form>
            </Box>
        </Container>
    )
}