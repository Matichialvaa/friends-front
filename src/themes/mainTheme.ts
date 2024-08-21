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
    components: {
        MuiTable: {
            defaultProps: {
                size: 'medium',
            }
        }
    }
}


const mainTheme = createTheme(themeOptions);

export default mainTheme;