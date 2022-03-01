import React from "react"


function Footer() {
    const currentYear = newDate().getFullYear();
    
    return (
        <footer>
            <p>Copyright © {currentYear}</p>
        </footer>
    )
}

export default Footer