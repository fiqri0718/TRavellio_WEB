import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Banner from "../Components/Banner";
import StyledHero from "../Components/StyledHero";

const SingleRooms = () => {
  const { slug } = useParams();
  const state = useSelector((state) => state);

  function getRoom(arg) {
    const idiRooms = state[0].rooms.map((item) => item);
    const roomDatas = idiRooms.filter((roomItem) => roomItem.slug === arg);
    return roomDatas;
    }
    

  const roomData = getRoom(slug);
  const name = roomData[0].name;
  const description = roomData[0].description;
  const capacity = roomData[0].capacity;
  const size = roomData[0].size;
  const price = roomData[0].price;
  const extras = roomData[0].extras;
  const breakfast = roomData[0].breakfast;
  const pets = roomData[0].pets;
  const images = roomData[0].images;
  const [...defaultBcg] = images;

  return (
    <>
      <StyledHero img={defaultBcg[0]}>
        <Banner title={`Destinasi ${name}`}>
          <Link to="/rooms" className="btn btn-primary">
            kembali ke destinasi
          </Link>
        </Banner>
      </StyledHero>

      {roomData ? (
        <>
          <section className="single-room container">
            <div className="row">
              {defaultBcg.map((item, index) => {
                return (
                  <div className="col-md-4 col-12 mx-auto" key={index}>
                    <div className="card border-0 shadow-lg">
                      <img
                        key={index}
                        src={item}
                        alt={name}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="single-room-info">
              <article className="desc">
                <h3>Penjelasan</h3>
                <p>{description}</p>
              </article>
              <article className="info">
                <h3>Info</h3>
                <h6>Harga : Rp {price}</h6>
                {/* <h6>size : {size} SQFT</h6> */}
                <h6>
                Kapasitas Maksimum :{" "}
                  {capacity > 1 ? `${capacity} orang` : `${capacity} orang`}
                </h6>
                <h6>{pets ? "Dokumentasi Perjalanan" : "Tidak ada Dokementasi Perjalanan"}</h6>
                <h6>{breakfast && "Termasuk Makan Pagi"}</h6>
              </article>
            </div>
          </section>
          <section className="room-extras">
            <h3>Tambahan</h3>
            <ul className="extras">
              {extras.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <div className="p-4 clearfix">
              <div className="row">
                <div className="col-md-3 col-12 ml-auto">
                  <Link
                    to={`/booknow/${slug}`}
                    className="btn btn-outline-primary btn-block btn-lg float-right "
                  >
                    pesan sekarang
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="container roomerror">
          <div className="row my-5">
            <div className="col-md-6 col-12 mx-auto">
              <div className="card shadow-lg border-0 p-4 error">
                <h1 className="text-center display-4">maaf</h1>
                <h3>tidak ada data yang ditemukan...</h3>
                <Link to="/rooms" className="btn btn-warning mt-4 ">
                  kembali ke destinasi
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleRooms;
