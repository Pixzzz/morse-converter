import React from "react";
import { encode } from 'morsee'
import './encode.css'


const Result = (props) => {
    return (
        <>
            <div className="encodetext">
                <h1>Output</h1>
                <h3>{encode(props.value)}</h3>
            </div>
        </>
    )
}

export default Result