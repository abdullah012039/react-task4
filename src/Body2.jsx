import React from "react";
import { useDarkMode } from "./WebPageContext";

const Body2 = () => {
    const { isDarkMode } = useDarkMode();

    return (
        <div style={{ background: isDarkMode ? "black" : "white", color: isDarkMode ? "white" : "black" }}>
            <h1>Body</h1>
        </div>
    );
}

export default Body2;