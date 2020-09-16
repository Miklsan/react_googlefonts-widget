import React from "react"

const TextArea = ({ children }) => {
    return (
        <div className="mb-3">
            <label htmlFor="text" className="form-label font-weight-bold mb-3">
                Tapez votre texte
            </label>
            <textarea
                id="text"
                className="form-control"
                defaultValue="Portez ce vieux whisky au juge blond qui fume !? 0123456789"
            >
            </textarea>


        </div >
    )
}

export default TextArea