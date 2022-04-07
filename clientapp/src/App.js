import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './Components/NavBar/NavBar';
import './Styles/app.css';
import FileDropzone from './Components/Dropzone/Dropzone';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <FileDropzone />
    </ChakraProvider>
  );
}

export default App;
