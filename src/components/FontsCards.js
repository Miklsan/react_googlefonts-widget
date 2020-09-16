import React from "react"

const FontsCards = () => {
    const style = { width: "18rem" }
    return (<div className="card" style={style}>
        <div className="card-body">
            <h5 className="card-title d-flex aling-items-center justify-content-between"><span>Card title</span>  <small>variants</small></h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
        </div>
    </div>)
}

export default FontsCards