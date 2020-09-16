import React from "react"


const FontSizeSlider = () => {
    return (
        <div className="mb-3">
            <label htmlFor="customRange" className="form-label"><b>La taille de police</b></label>
            <input type="range" className="form-range" min="8" max="48" step="1" id="customRange"></input>
        </div>
    )
}

export default FontSizeSlider