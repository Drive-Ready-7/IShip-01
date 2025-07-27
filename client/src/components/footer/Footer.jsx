import './footer.css'
import React from "react";

export default function Footer() {
    return (
        <footer className="privacy-footer">
            &copy; {new Date().getFullYear()} LastLine. All rights reserved.
        </footer>
    )
}