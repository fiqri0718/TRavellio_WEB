import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../Components/RoomsContainer";
const Rooms = () => {
  return (
    <div>
      <Hero hero="roomsHero"></Hero>
      <Banner title="Destinasi Tersedia" subtitle="Yang Terbaik di setiap Perjalanan">
        <Link to="/" className="btn btn-warning">
          Kembali ke Beranda
        </Link>
      </Banner>
      <RoomsContainer />
    </div>
  );
};

export default Rooms;
