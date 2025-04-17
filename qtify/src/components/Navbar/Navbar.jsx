import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography } from "@mui/material";
import Logo from "../Logo/Logo";
import Search from "../Search/Search"

import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      {/* <Link to="/">
        <Logo />
      </Link> */}
       <Logo />
      <Search></Search>
      <Button variant="contained" color="secondary" size="large"> <Typography>Give Feedback</Typography> </Button>
    </nav>
  );
}

export default Navbar;
