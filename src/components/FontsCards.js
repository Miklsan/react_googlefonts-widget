import React from "react"

const FontsCards = (props) => {
    const { family, variants, category, text } = props
    const UrlPlus = family.split(" ").join("+")

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded col-lg-6 mb-3" >
            <div className="card-body">
                <h5 className="card-title d-flex aling-items-center justify-content-between">
                    <span>{family}</span>
                    <small> {variants.length} variant(s)</small>
                </h5>
                <button type="button" className="btn btn-dark btn-sm p-0 mb-2">{category}</button>
                <p className="card-text">{text}</p>
                <a rel="noopener noreferrer"
                    target="_blank"
                    className="text-danger"
                    href={`https://fonts.google.com/specimen/${UrlPlus}`}>Voir sur Google Fonts (ouvre un nouveau tab)</a>
            </div>
        </div>)
}

export default FontsCards

