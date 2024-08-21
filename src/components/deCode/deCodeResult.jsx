import React from "react";
import { decode } from 'morsee'
import './decode.css'

const deCodeResult = (props) => {
    return (
        <>
            <div className="decodetext">
                <h1>Decode output  </h1>
                <p>{decode(props.value)}</p>
            </div>
        </>
    )
}

export default deCodeResult