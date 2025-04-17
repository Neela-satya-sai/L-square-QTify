import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Router } from "react-router-dom";
import "@fontsource/poppins";



function App() {
  return (
    <ThemeProvider theme ={theme}>
       <style>
        {`:root {
          --color-primary: #34C94B;
          --color-secondary: #121212;
        }`}
      </style>

      <div className="App">
        <Navbar></Navbar>
      </div>
    
    
    </ThemeProvider>
  );
}

export default App;
