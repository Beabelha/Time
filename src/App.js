import './App.css';
import ContentMain from './components/ContentMain/ContentMain';
import { ChakraProvider } from '@chakra-ui/react'

function App() {


  return (
    <div className='container'>
      <ChakraProvider>
        <ContentMain />
      </ChakraProvider>
    </div>
  );
}

export default App;
