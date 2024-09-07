import React, { useState } from 'react'
import Input from '../../../components/enCode/input'
import Result from '../../../components/enCode/result'

const mainPageContainer = () => {
    const [value, setValue] = useState('')
    return (
        <>
            <div className='enCode'>
                <Input value={value} setValue={setValue} />
                <Result value={value} />
            </div>
        </>
    )
}

export default mainPageContainer