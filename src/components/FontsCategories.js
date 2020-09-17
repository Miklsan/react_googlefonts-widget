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

            <section className="row mb-5">
                <GoogleFontLoader
                    fonts={fonts.map((el) => ({
                        font: el.family,
                    }))}
                    subsets={["latin"]}
                />
                <hr />
                <h2 id={id} className="mb-3">
                    <span className="badge bg-danger">{title}</span>
                </h2>
                {fonts.map((font) => (
                    <FontsCards key={font.family} text={text} size={size} {...font} />
                ))}
            </section>

        </>
    )

}


export default FontsCategories
