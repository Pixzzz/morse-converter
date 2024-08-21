import React from "react";
import { encode } from 'morsee'
import './encode.css'


const Result = (props) => {
    return (
        <>
            <div className="encodetext">
                <h1>Encode output</h1>
                <p>{encode(props.value)}</p>
            </div>
        </>
    )
}

export default Result