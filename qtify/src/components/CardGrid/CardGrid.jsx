import React, { useState } from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import SongCard from "../SongCard/SongCard";
import styles from "./CardGrid.module.css";
//import Button from "@mui/material";

const CardGrid = ({ SongsList, type }) => {
  // console.log("from cardgrid", topSongsList);

  let [show, setShow] = useState(false);

 const handler=()=>{
    setShow(!show);
 };


  return (
    <section className={styles.section}>
      <div className={styles.sectionhead}>
        <Typography variant="h6" component="span" gutterBottom color="white" fontSize={15} margin={0}>
          {type}
        </Typography>

        <Button variant="text" onClick={handler}>{show? "Collapse" :"Show"}</Button>
      </div>
      <Grid container  className={styles.grid} columnGap={4} rowGap={3}  margin={2}>
        {SongsList.length > 0 ? (
          SongsList.map((song, idx) => (
            <Grid item xs={6} md={3} key={song.id}>
              <SongCard album={song} />
            </Grid>
          ))
        ) : (
          <Box>No Songs Available</Box>
        )}
      </Grid>
      <hr className={styles.breakline} />
    </section>
  );
};

export default CardGrid;
