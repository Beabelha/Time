import * as React from "react";
import './Search.css';
//Componentes visuais chackra
import { Input, IconButton, Stack } from '@chakra-ui/react'
//Icones
import { FaSearch } from 'react-icons/fa';


function Search() {
    return (
        <div>            
            <Stack direction='row' spacing={4}>
                <Input placeholder='Digite a localização' variant='flushed' focusBorderColor="purple.500"/>
                 <IconButton aria-label='Procurar localidade' icon={<FaSearch />}/>
            </Stack>
        </div >
    )
}

export default Search;