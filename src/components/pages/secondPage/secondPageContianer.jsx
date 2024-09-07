import React, { useState } from 'react'
import DeCodeInput from '../../../components/deCode/deCodeInput'
import DeCodeResult from '../../../components/deCode/deCodeResult'
import './secondPage.css'

const secondPageContianer = () => {
    const [DeCodeValue, setDeCodeValue] = useState('')
    return (<>
        <div className='deCode'>
            <DeCodeInput value={DeCodeValue} setValue={setDeCodeValue} />
            <DeCodeResult value={DeCodeValue} />
        </div>
    </>)
}

export default secondPageContianer