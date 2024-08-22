import React, { useState, useEffect, createContext, useContext } from "react";
import Body from "./Body2";
import Footer2 from "./Footer2.jsx";
import Header from "./Header2.jsx";
import Section from "./Section2.jsx";
import style from './page.module.css';


const DarkModeContext = createContext();

const WebPageContext = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => Boolean(localStorage.getItem("dark-mode")));

    const setThemeInLocalStorage = (value) => {
        localStorage.setItem("dark-mode", value);
    };

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setThemeInLocalStorage(newMode);
        setIsDarkMode(newMode);
    };

    useEffect(() => {
        setThemeInLocalStorage(isDarkMode);
    }, [isDarkMode]);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            <div>
                <Header />
                <Body />
                <Section />
                <Footer2 />
            </div>
        </DarkModeContext.Provider>
    );
}

const useDarkMode = () => useContext(DarkModeContext);

export { WebPageContext as default, useDarkMode };