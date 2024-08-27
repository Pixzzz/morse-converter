import { useState } from 'react'
//-----------------------------
import mainPageContainer from './components/pages/mainPage/mainPageContainer'
//-----------------------------
import secondPageContianer from './components/pages/secondPage/secondPageContianer'
//-----------------------------
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//-----------------------------
import './App.css'



function App() {
  const [value, setValue] = useState('')
  const [DeCodeValue, setDeCodeValue] = useState('')

  return (
    <>
      

      <BrowserRouter>
        <Routes>
          <Route path='/enCode' element={mainPageContainer} />
          <Route path='/deCode' element={secondPageContianer} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
