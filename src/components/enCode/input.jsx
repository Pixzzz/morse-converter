import React from "react";
import './encode.css'

const Input = (props) => {
    const handleText = (e) => {
        props.setValue(e.target.value)
    }

    return (
        <div className="encode">
            <textarea value={props.value}
                onChange={handleText}
                placeholder="Insert your message :D"
            />
        </div>
    )
}

export default Input