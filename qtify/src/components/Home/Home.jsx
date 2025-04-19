import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import SongCard from "../SongCard/SongCard";
import CardGrid from "../CardGrid/CardGrid";
import axios from "axios";



const Home = () => {
  let [topAlbums, setTopAlbums] = useState([]);
  let [newAlbums, setNewAlbums] = useState([]);



useEffect( ()=>{
  
  performAPICall();
  // performAPICall("new");

 
  console.log("within usefeefect");

},[]);




const performAPICall = async () => {
  try {
    const topRes = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
    const newRes = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
    setTopAlbums(topRes.data);
    setNewAlbums(newRes.data);
   console.log("Fetched api call", topRes.data);
   console.log("Fetched api call", newRes.data);
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
      <CardGrid SongsList={topAlbums} type={"Top Albums"} />
      <CardGrid SongsList={newAlbums}  type={"New Albums"} />
           <SongCard></SongCard>
    </>
  );
};

export default Home;
