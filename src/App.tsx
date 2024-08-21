import { FriendsTable } from './components/FriendsTable';
import React from "react";
import {ThemeProvider} from "@mui/material";
import mainTheme from "./themes/mainTheme.ts";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <div>
                <h1>Friends List</h1>
                <FriendsTable />
            </div>
        </ThemeProvider>
    );
};

export default App;
