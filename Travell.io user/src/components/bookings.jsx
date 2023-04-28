import { onValue, ref, remove } from "firebase/database";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { AiOutlineDelete } from "react-icons/ai";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
import styled from "styled-components";

const StatusTD = styled.td`
  font-weight: bold;
  color: ${(props) => (props.type === "Pending" ? "blue" : "")};
  color: ${(props) => (props.type === "Accepted" ? "green" : "")};
  color: ${(props) => (props.type === "Rejected" ? "red" : "")};
`;

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useUserAuth();

  React.useEffect(() => {
    onValue(ref(db, "/bookings/"), (snapshot) => {
      setBookings([]);
      const data = snapshot.val();
      if (data !== null) {
        // eslint-disable-next-line array-callback-return
        Object.values(data).map((todo) => {
          if (todo.refID === user.email) {
            setBookings((oldArray) => [...oldArray, todo]);
          }
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteBooking = (dlt) => {
    remove(ref(db, `/bookings/${dlt.id}`));
  };
  return (
    <>
      {bookings.length > 0 ? (
        <Table
          striped
          bordered
          hover
          size="sm"
          style={{ marginTop: "80px", width: "80%", margin: "80px auto" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinasi</th>
              <th>Tanggal Mulai</th>
              <th>Tanggal Akhir</th>
              <th>Jumlah orang</th>
              <th>Kapasitas maksimum</th>
              <th>Harga</th>
              <th>Status</th>
            </tr>
          </thead>
          
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <>
                  <td>{booking.id}</td>
                  <td>{booking.type.toUpperCase()}</td>
                  <td>{booking.startDate}</td>
                  <td>{booking.endDate}</td>
                  <td>{booking.persons}</td>
                  <td>{booking.capacity}</td>
                  <td>{booking.totalPrice}</td>
                  <StatusTD type={booking.status}>{booking.status}</StatusTD>
                  {/* <td style={{textAlign : "center"}} >
                    <AiOutlineDelete
                      color="red"
                      style={{ cursor: "pointer", fontSize: "20px" }}
                      onClick={() => deleteBooking(booking)}
                    />
                  </td> */}
                </>
              </tr>
            ))}
          </tbody>
          <br></br>
          <div className="row">
            <div className="col-md-12 col-12">
              <mark>Silahkan kirim pembayaran pada no. yang tertera di bawah:
                <br></br>
                1. 0109 0107 6840 501 BRI (A.N TRAVELL.IO) 
                <br></br>
                2. 0109 0107 6840 501 BNI (A.N TRAVELL.IO) 
                <br></br>
                3. 0109 0107 6840 501 MANDIRI (A.N TRAVELL.IO)
                <br></br> 
                4.  0897172727 GO-PAY (A.N TRAVELL. IO) 
                <br></br>
                5. 0897172727 DANA (A.N TRAVELL. IO)</mark>
                <br></br>
                <br></br>
                <mark>Silahkan Kirim bukti Transfer ke WA admin.</mark>
                <br></br>
                <mark><a href="https://wa.me/message/QYJLSR2YV5WSP1">Konfirmasi Pembayaran</a></mark>
            </div>
            </div>
        </Table>
      ) : (
        <div className="container roomerror">
          <div className="row my-5">
            <div className="col-md-6 col-12 mx-auto">
              <div className="card shadow-lg border-0 p-4 error">
                <h1 className="text-center display-4">Tidak ada Pemesanan</h1>
                <h3>Pilih destinasi anda untuk memulai pemesanan!.</h3>
                <Link to="/rooms" className="btn btn-warning mt-4 ">
                  Mulai Pemesanan.
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bookings;
