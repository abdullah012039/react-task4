import React from "react";
import { useDarkMode } from "./WebPageContext";

const Section2 = () => {
    const { isDarkMode } = useDarkMode();

    return (
        <div style={{ background: isDarkMode ? "black" : "white", color: isDarkMode ? "white" : "black" }}>
           <h1>Section</h1>
        </div>
    );
}

export default Section2;