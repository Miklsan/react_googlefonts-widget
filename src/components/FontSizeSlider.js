import React from "react"


const FontSizeSlider = ({ size, setSize }) => {
    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }

    return (
        <div className="mb-3">
            <label htmlFor="customRange" className="form-label"><b>La taille de police</b></label>
            <input value={size}
                type="range"
                className="form-range"
                min="8"
                max="48"
                step="1"
                id="customRange"
                onChange={handleSizeChange} >

            </input>
        </div>
    )
}

export default FontSizeSlider