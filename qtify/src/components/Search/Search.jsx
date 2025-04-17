import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./Search.module.css"

const Search = () => {
  return (
    <TextField
      className={styles.searchbar}
      size="small"
      placeholder="Search a albam of you choice"
      name="search"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;