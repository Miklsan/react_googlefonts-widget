import React from "react"

const TextArea = ({ text, setText }) => {
    const handleTextAreaChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div className="mb-3">
            <label htmlFor="text" className="form-label font-weight-bold mb-3">
                Tapez votre texte
            </label>
            <textarea
                id="text"
                className="form-control"
                value={text}
                onChange={handleTextAreaChange}
            >
            </textarea>


        </div >
    )
}

export default TextArea