import { useState } from 'react'
//-----------------------------
import MainPageContainer from './components/pages/mainPage/mainPageContainer'
//-----------------------------
import SecondPageContianer from './components/pages/secondPage/secondPageContianer'
//-----------------------------
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//-----------------------------
import './App.css'



function App() {
  
  return (
    <>
      

      <BrowserRouter>
        <Routes>
          <Route path='/enCode' element={<MainPageContainer/>} />
          <Route path='/deCode' element={<SecondPageContianer/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
