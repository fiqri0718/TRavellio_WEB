import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import FeaturedRooms from "../Components/FeaturedRooms";
import Room from "../Components/Room";
import RoomsContainer from "../Components/RoomsContainer";
import Rooms2 from "../Components/Rooms2";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero"></Hero>
      <Banner title="Travell.io" subtitle="Travell.io merupakan sebuah aplikasi pemesanan tiket wisata tour dan travell, pembuatan aplikasi ini bertujuan untuk mempermudah pelanggan dalam pemesanan tiket wisata">
        <Link to="/rooms" className="btn btn-primary">
          Destinasi kami
        </Link>
          </Banner>
          <Services />
          <Rooms2 />
    </>
  );
};

export default Home;
