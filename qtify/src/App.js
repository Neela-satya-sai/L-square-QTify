import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Router, BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero/Hero";
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
      <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      </BrowserRouter>
     
    
    
    </ThemeProvider>
  );
}

export default App;
