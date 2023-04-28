import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <div className="col-md-4 col-12 mx-auto p-2">
      <div className="card shadow-lg border-0 room">
        <img
          src={images[0] || defaultImg}
          alt="single room"
          className="img-fluid"
        />
        <div className="price-top">
          <h6>Rp {price}</h6>
          <p>per malam</p>
        </div>
        <Link
          to={`/rooms/${slug}`}
          className="btn-warning room-link text-center"
        >
          Selengkapnya
        </Link>
        <p className="room-info">{name}</p>
      </div>
    </div>
  );
}

