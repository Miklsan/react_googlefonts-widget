import { useState, useEffect } from "react"

const GoogleFonts = (results = "date") => {
    const [fonts, setFonts] = useState([])
    useEffect(() => {
        fetch(
            `https://www.googleapis.com/webfonts/v1/webfonts?sort=${results}&key=AIzaSyDZQp2PRlSukUM0TZw75qe42rmuyPe6yTE`
        )
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Pas de police")
            })
            .then((data) => {
                console.log(data.items.slice(0, 10))
                setFonts(data.items.slice(0, 10))
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [results])
    return { fonts }
}

export default GoogleFonts