import { useState, useEffect } from 'react'
//-----------------------------
import MainPageContainer from './components/pages/mainPage/mainPageContainer'
//-----------------------------
import SecondPageContianer from './components/pages/secondPage/secondPageContianer'
//-----------------------------
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
//-----------------------------
import './App.css'

const Layout = () => {
  const loc = useLocation()
  const [link, setLink] = useState('deCode')

  useEffect(() => {
    if (loc.pathname === '/') {
      setLink('de Code page')
    } else if (loc.pathname === '/deCode') {
      setLink('Main page')
    }
  }, [loc])

  return (
    <nav>
      <Link className='ChangePage' to={loc.pathname === '/' ? '/deCode' : '/'}>{link}</Link>
    </nav>
  )
}

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPageContainer />} />
          <Route path='/deCode' element={<SecondPageContianer />} />
        </Routes>
        <Layout />
      </BrowserRouter>

    </>
  )
}

export default App
