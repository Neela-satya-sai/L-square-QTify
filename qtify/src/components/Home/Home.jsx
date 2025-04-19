import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import SongCard from "../SongCard/SongCard";
import CardGrid from "../CardGrid/CardGrid";
import axios from "axios";



const Home = () => {
  let [topAlbums, setTopAlbums] = useState([]);



useEffect( ()=>{
  
  performAPICall();
 
  console.log("within usefeefect");

},[]);




const performAPICall = async () => {
  try {
    const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
    setTopAlbums(response.data);
    console.log("Fetched api call", response.data);
    //return response.data;
  } catch (error) {
    console.error("Error performing API call:", error);
  }
};
  // debugger;
  return (
    <>
    {/* {console.log("in render")} */}
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <CardGrid></CardGrid> */}
      <CardGrid topSongsList={topAlbums} />
           <SongCard></SongCard>
    </>
  );
};

export default Home;
