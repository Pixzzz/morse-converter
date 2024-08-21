import React from "react";
import './decode.css'

const deCodeInput = (props) => {
    const handleText = (e) => {
        props.setValue(e.target.value)
    }
    return (
        <div className="decode">
            <textarea value={props.value}
                onChange={handleText}
                placeholder="Decode input"
            />
        </div>
    )
}

export default deCodeInput