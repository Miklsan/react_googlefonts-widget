import React from "react"

const FontsCards = (props) => {
    const { family, variants, category, text, size } = props
    const UrlPlus = family.replace(/ /g, '+')

    return (

        <div class="card">
            <div className="card-body">
                <h3 className="card-title d-flex aling-items-center justify-content-between h5">
                    <span>{family}</span>
                    <small> {variants.length} variant(s)</small>
                </h3>
                <span className=" p-0 mb-2 badge bg-dark">{category.toUpperCase()}</span>
                <p className="card-text" style={{ fontFamily: family, fontSize: `${size}px` }}>{text}</p>
                <a rel="noopener noreferrer"
                    target="_blank"
                    className="text-danger"
                    href={`https://fonts.google.com/specimen/${UrlPlus}`}>Voir sur Google Fonts (ouvre un nouveau tab)</a>
            </div>
        </div>


    )
}

export default FontsCards

