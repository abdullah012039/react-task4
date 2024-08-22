import React from "react";
import { useDarkMode } from "./WebPageContext";

const Header2 = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <header>
            <button onClick={toggleDarkMode}>
                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </header>
    );
}

export default Header2;