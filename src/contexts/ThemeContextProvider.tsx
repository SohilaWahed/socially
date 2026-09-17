import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./contexts";
import type { Theme } from "@/types/theme.types";

interface ThemeContextProviderProps {
    children: ReactNode
}
export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {

    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme') as Theme
        if (savedTheme == 'dark' || savedTheme == 'light') {
            return savedTheme
        } else {
            const systemPreferesDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            return systemPreferesDark ? 'dark' : 'light'
        }
    })

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
        localStorage.setItem('theme', theme)
    }


    useEffect(() => {
        const root = document.documentElement
        if (theme == 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [theme])


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
