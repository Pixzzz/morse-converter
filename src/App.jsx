import { useState } from 'react'
//-----------------------------
import Input from './components/enCode/input'
import Result from './components/enCode/result'
//-----------------------------
import DeCodeInput from './components/deCode/deCodeInput'
import DeCodeResult from './components/deCode/deCodeResult'
//-----------------------------
import './App.css'



function App() {
  const [value, setValue] = useState('')
  const [DeCodeValue, setDeCodeValue] = useState('')

  return (
    <>
      <div className='enCode'>
        <Input value={value} setValue={setValue} />
        <Result value={value} />
      </div>

      <div className='deCode'>
        <DeCodeInput value={DeCodeValue} setValue={setDeCodeValue} />
        <DeCodeResult value={DeCodeValue} />
      </div>
    </>
  )
}

export default App
