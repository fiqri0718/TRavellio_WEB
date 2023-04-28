import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ref, set } from "firebase/database";
import { db } from "../firebase";
import { uid } from "uid";
import { useSelector } from "react-redux";
import { useUserAuth } from "../contexts/UserAuthContext";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Booknow() {
  const { user } = useUserAuth();
  const state = useSelector((state) => state);
  const { slug } = useParams();
  const [fullNmae, setFullNmae] = useState("");
  const [value, setValue] = useState(0);
  const [cnic, setCnic] = useState(0);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [persons, setPersons] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();
  const uuid = uid();

  function handleName(name) {
    setFullNmae(name.target.value);
  }
  function handlepersons(val) {
    setPersons(val.target.value);
  }
  function handleemail(val) {
    setEmail(val.target.value);
  }
  function handleaddress(val) {
    setAddress(val.target.value);
  }
  function handleCnic(val) {
    setCnic(val.target.value);
  }
  function handleChangeStart(date) {
    setStartDate(date);
  }

  function handleChangeEnd(date) {
    setEndDate(date);
  }

  function calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);
    return endDate.diff(startDate, "days");
  }

  function getRoom(arg) {
    const idiRooms = state[0].rooms.map((item) => item);
    const roomDatas = idiRooms.filter((roomItem) => roomItem.slug === arg);
    return roomDatas;
  }

  const room = getRoom(slug);
  var daysLeft = calculateDaysLeft(startDate, endDate);

  const formattedDate = startDate
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

  const formattedEndDate = endDate
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

  if (!room) {
    return (
      <div className="container roomerror">
        <div className="row my-5">
          <div className="col-md-6 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4 error">
              <h1 className="text-center display-4">Maaf</h1>
              <h3>Tidak ada data yang ditemukan...</h3>
              <Link to="/rooms" className="btn btn-warning mt-4 ">
                Kembali ke destinasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const name = room[0].name;
  const capacity = room[0].capacity;
  const size = room[0].size;
  const price = room[0].price;
  const breakfast = room[0].breakfast;
  const pets = room[0].pets;
  const images = room[0].images;

  const [...defaultBcg] = images;
  function writeToDatabase() {
    if (persons > capacity) {
      return alert("Silahkan cek kapasitas.");
    }
    if (daysLeft === 0) {
      return alert("silahkan isi tanggal.");
    }
    if (
      fullNmae &&
      address &&
      cnic &&
      email &&
      value &&
      persons <= capacity &&
      startDate &&
      endDate
    ) {
      set(ref(db, `bookings/${uuid}`), {
        name: fullNmae,
        address: address,
        cnic: cnic,
        email: email,
        phone: value,
        persons: persons,
        type: name,
        startDate: formattedDate,
        endDate: formattedEndDate,
        totalPrice: daysLeft * price,
        days: daysLeft,
        capacity,
        status: "Pending",
        id: uuid,
        refID: user.email,
      }).then(() => {
        alert("telah berhasi memesan.");
        navigate("/bookings");
      });
      setFullNmae("");
      setAddress("");
      setCnic(0);
      setEmail("");
      setValue(0);
      setPersons(0);
    } else {
      alert("Silahkan isi semua kolom");
    }
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
          <div>
            <br></br>
            <h1 className="display-4">Pemesanan</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 my-auto">
              <img
                src={images[0] || defaultBcg}
                className="img-fluid"
                alt="selected room"
              />
            </div>
            <div className="col-md-6 col-12 my-auto">
              <h1>Penjelasan Destinasi</h1>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Nama Destinasi</th>
                    <td>{name}</td>
                  </tr>
                  {/* <tr>
                    <th>Capacity</th>
                    <td>{capacity}</td>
                  </tr> */}
                 <tr>
                    <th>Kapasitas</th>
                    <td>{capacity} Kapasitas.</td>
                  </tr>
                  <tr>
                    <th>Makan</th>
                    <td>{breakfast === true ? `Included` : `Not Included`}</td>
                  </tr>
                  <tr>
                    <th>Dokumentasi Perjalanan</th>
                    <td>{pets === true ? `Allowed` : `Not Allowed`}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-6 col-12">
              <div className="form-group">
                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">
                  Mulai Dari{" "}
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={handleChangeStart}
                  minDate={moment().toDate()}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="form-group">
                <label htmlFor="Todate" className="font-weight-bolder mr-3">
                  Sampai dari{" "}
                </label>
                <DatePicker
                  selected={endDate}
                  minDate={moment().toDate()}
                  onChange={handleChangeEnd}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <h6 className="font-weight-bolder">
               Berapa Hari : {daysLeft}
              </h6>
              <mark>Silahkan Regristasi mulai dari jam 8</mark>
            </div>
            <div className="col-md-6 col-12">
              <h6 className="font-weight-bold">
                Harga satu Hari :{" "}
                <span className="badge badge-info">Rp {price}</span>
              </h6>
              <h6 className="font-weight-bold">
                Harga yang harus dibayar :{" "}
                <span className="text-primary">Rp {daysLeft * price}</span>
              </h6>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-12 col-12 my-auto">
              <div className="col-md-12 col-12 float-right">
                <form>
                  <div className="form-group">
                    <label htmlFor="persons">Jumlah Orang</label>
                    <input
                      type="number"
                      value={persons}
                      className="form-control"
                      onChange={handlepersons}
                      id="persons"
                      placeholder="jumlah orang"
                      required
                    />
                    <label htmlFor="forName">Nama</label>
                    <input
                      type="text"
                      className="form-control"
                      value={fullNmae}
                      id="forName"
                      onChange={handleName}
                      placeholder="nama"
                      required
                    />
                    <label htmlFor="Number">No HP</label>
                    <PhoneInput
                      defaultCountry="ID"
                      className="phoneInput"
                      id="number"
                      placeholder="masukkan no.Hp"
                      value={value}
                      onChange={setValue}
                    />

                    <label htmlFor="CNIC">NIK</label>
                    <input
                      type="number"
                      className="form-control"
                      value={cnic}
                      onChange={handleCnic}
                      required
                      id="CNIC"
                      placeholder="Masukkan NIK"
                      maxLength={13}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                     Kami akan menjaga semua privasi pengunjung.
                    </small>
                    <label htmlFor="address">Alamat</label>
                    <input
                      type="text"
                      className="form-control"
                      value={address}
                      onChange={handleaddress}
                      id="address"
                      placeholder="alamat"
                      required
                    />

                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={handleemail}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="masukkan email"
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                    Kami akan menjaga semua privasi pengunjung.
                    </small>
                  </div>

                  <div className="form-group form-check"></div>
                </form>
                <button
                  className="btn btn-block btn-outline-primary"
                  //   data-toggle="modal"
                  //   data-target="#thanks"
                  onClick={writeToDatabase}
                >
                  Lanjutkan Pembayaran
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
