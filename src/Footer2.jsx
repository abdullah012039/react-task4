import React from "react";
import { useDarkMode } from "./WebPageContext";

const Footer2 = () => {
    const { isDarkMode } = useDarkMode();

    return (
        <div style={{ background: isDarkMode ? "black" : "white", color: isDarkMode ? "white" : "black" }}>
            <h1>Footer</h1>
        </div>
    );
}

export default Footer2;