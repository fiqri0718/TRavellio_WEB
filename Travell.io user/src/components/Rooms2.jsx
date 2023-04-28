import React from "react";
// import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import RoomsFilter from "./RoomsFilter";

export default function Rooms2() {
  const state = useSelector((state) => state);
  return (
    <>
    <br></br>
    <h1><center>Destinasi Kami</center></h1>
    <br></br>
      {state.length > 0 ? (
        <>
          <RoomsList rooms={state[0].sortedRooms} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
