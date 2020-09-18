import React from "react"
import FontsCards from "./FontsCards"
import GoogleFonts from "./GoogleFonts"
import GoogleFontLoader from "react-google-font-loader"

const FontsCategories = (props) => {
    const { id, text, size, title, sort = "date" } = props
    const { fonts } = GoogleFonts(sort)
    console.log(GoogleFonts)
    return (
        <>
            <section className="row mb-4">

                <GoogleFontLoader
                    fonts={fonts.map((el) => ({
                        font: el.family,
                    }))}
                />
                <hr />
                <h2 id={id} className="mb-3">
                    <span className="badge bg-danger">{title}</span>
                </h2>
                {fonts.map((font) => (
                    <div className="col-lg-6">
                        <div className="card shadow bg-white rounded mb-3" >
                            
                            <FontsCards key={font.family} text={text} size={size} {...font} />
                        </div>
                        {console.log(FontsCards)}
                    </div>
                ))}
            </section>
        </>
    )

}


export default FontsCategories
