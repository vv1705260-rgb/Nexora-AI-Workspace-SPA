import React,
{
    createContext,
    useContext,
    useEffect,
    useState
}
from "react";

/* =========================================
   CREATE CONTEXT
========================================= */

const ThemeContext =
    createContext();

/* =========================================
   CUSTOM HOOK
========================================= */

export const useTheme = () =>
    useContext(ThemeContext);

/* =========================================
   PROVIDER COMPONENT
========================================= */

export const ThemeProvider = ({
    children
}) => {

    /* =========================================
       THEME STATE
    ========================================== */

    const [theme, setTheme] =
        useState(

            localStorage.getItem(
                "nexora-theme"
            ) || "dark"

        );

    /* =========================================
       APPLY THEME TO BODY
    ========================================== */

    useEffect(() => {

        document.body.className = "";

        document.body.classList.add(
            `${theme}-theme`
        );

        localStorage.setItem(
            "nexora-theme",
            theme
        );

    }, [theme]);

    /* =========================================
       TOGGLE THEME
    ========================================== */

    const toggleTheme = () => {

        setTheme((prevTheme) =>

            prevTheme === "dark"
                ? "light"
                : "dark"

        );

    };

    /* =========================================
       CONTEXT VALUE
    ========================================== */

    const value = {

        theme,

        toggleTheme

    };

    /* =========================================
       RETURN PROVIDER
    ========================================== */

    return (

        <ThemeContext.Provider
            value={value}
        >

            {children}

        </ThemeContext.Provider>

    );

};
