import {createTheme} from "@mui/material";

const themeOptions = {
    palette: {
        primary: {
            main: '#3f51b5'
        },
        secondary: {
            main: '#4996dc'
        }
    },
    background: {
        default: '#ffffff',
    },
    MuiTableCell: {
        styleOverrides: {
            head: {
                backgroundColor: '#646cff',
                color: '#ffffff',
                fontWeight: 'bold',
            },
        },
}
}

const mainTheme = createTheme(themeOptions);

export default mainTheme;