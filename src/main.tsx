import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from "@mui/material";
import mainTheme from "./themes/mainTheme.ts";

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={mainTheme}>
        <StrictMode>
            <App />
        </StrictMode>,
    </ThemeProvider>
)
