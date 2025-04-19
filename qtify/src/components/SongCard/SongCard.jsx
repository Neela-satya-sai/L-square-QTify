import React from "react";
import { Card, Chip } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";
import styles from "./SongCard.module.css";

const SongCard = ({ album }) => {
 // console.log("from song", album);

  if (!album) {
    return null; // Or return a fallback UI if album is undefined
  }

  return (
    <Card className={styles.card} sx={{ width: 175, height: 230 }}>
      <CardContent className={styles.cardcontent}>
        <CardMedia
          component="img"
           height="140"
           width="80"
          image={album.image || "https://picsum.photos/seed/picsum/200/300"}
          alt={album.title || "green iguana"}
          className={styles.cardmedia}
        />
        <Chip label={`${album.follows || 100} follows`} className={styles.chip} />
      </CardContent>
      <Typography gutterBottom variant="h6" component="div" color="white" sx={{ marginTop: "5px", marginBottom: "0px",  fontSize: "15px"}}>
        {album.title || "Album name"}
      </Typography>
    </Card>
  );
};

export default SongCard;
