import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: green[500],
    },
  },

  typography: {
    fontFamily: "Roboto, sans-serif"
  }
});

theme = responsiveFontSizes(theme);
export default theme;
