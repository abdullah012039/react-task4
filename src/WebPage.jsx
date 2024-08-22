import React, { useState, useEffect } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import style from './page.module.css';

const WebPage = () => {
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
        <div>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Body isDarkMode={isDarkMode} />
            <Section isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
        </div>
    );
}

export default WebPage;
