import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from "react";
import { Box, ThemeProvider } from "@mui/material";

interface IDrawerContextData {
    themeName: "light" | "dark";
    toggleTheme: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext = () => {
    return useContext(DrawerContext);
};

interface IAppThemeProviderProps {
    children: ReactNode;
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<"light" | "dark">("light");

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => (oldThemeName === "light" ? "dark" : "light"));
    }, []);

    const theme = useMemo(() => {
        return themeName === "light" ? LightTheme : DarkTheme;
    }, [themeName]);

    return (
        <DrawerContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </DrawerContext.Provider>
    );
};
