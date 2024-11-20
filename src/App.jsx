import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Box from '@mui/material/Box';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

import './App.css'


function App() {

  return (
    <>
      <Box width="400px" sx={{width:{xl: '1488px',}}} m="auto">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/exercise/:id' element={<ExerciseDetail/>}></Route>
        
        </Routes>
        <Footer/> 
      </Box>     
    </>
  )
}

export default App


