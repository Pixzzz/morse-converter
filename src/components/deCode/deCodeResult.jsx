import React from "react";
import { decode } from 'morsee'

const deCodeResult = (props) => {
    return (
        <>
            <div className="decodetext">
                <h1>De code output </h1>
                <h3>{decode(props.value)}</h3>
            </div>
        </>
    )
}

export default deCodeResult