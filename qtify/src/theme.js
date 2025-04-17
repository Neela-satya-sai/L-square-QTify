import { createTheme } from '@mui/material/styles';
//import { CssBaseline, Button } from '@mui/material';

const theme = createTheme({
  typography:{
    fontFamily: "Poppins" 
  },
  palette: {
   
    primary: {
      main: '#34C94B',
      light:"#FFFFFF",
      dark: "#121212",
      contrastText: "#fff",
    },
    secondary: {
      main: '#121212',
      light:"#FFFFFF",
      contrastText: "#34C94B",
    },
  },
});
export default theme;