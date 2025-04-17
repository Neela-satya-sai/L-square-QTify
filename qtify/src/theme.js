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
     
      main: "#00a278",
      dark: "#00845c",
      contrastText: "#fff",
    },
    secondary: {
      main: '#121212',
      light:"#FFFFFF"
    },
  },
});
export default theme;