import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import svg from "../images/about.svg"
import customersvg from "../images/customers/customer1.svg"

function About() {
  return (
    <div className="container aboutus">
      <div className="row">
        <div className="col-md-6 col-12 my-auto">
          <img
            src={svg}
            alt="about us"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-12 my-auto">
          <h1 className="display-4 text-center my-5">Tentang Kita </h1>
          <p className="lead text-justify text-center">
          Travell.Io adalah Indonesia Travel Service yang menyediakan informasi dan jasa secara realtime & Online bagi anda yang mencari destinasi liburan yang tak terlupakan, baik liburan akhir pekan maupun paket perjalanan wisata melalui penawaran yang mudah diakses dan hemat biaya.
          </p>
          <div className="text-center col-md-6 col-12 mx-auto">
            <Link
              to="/contact"
              className="btn btn-outline-dark btn-block btn-lg my-5"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
      <div className="about_company">
        <h1 className="display-4">Tentang Travell.Io</h1>
        <div className="pt-4">
          <p className="about_info">
          Sudah tidak terhitung berapa banyak perusahaan yang menyediakan paket wisata Jawa Timur. Tentu semuanya hadir dengan layanan serta harga yang berbeda-beda. Untuk itu pastikan Anda memilih layanan Paket wisata terbaik sehingga mendapatkan kesan perjalanan yang menyenangkan. Travell.io kini hadir sebagai salah satu penyedia jasa paket wisata dengan murah dengan layanan yang tidak murahan. Dengan memilih Travell.io, Anda akan mendapatkan layanan terbaik dari kami.
          </p>
        </div>
      </div>
      <div className="testimony">
        <h1 className="display-4 mb-4">Testimoni</h1>
        <div className="row mb-5">
          <div className="col-md-10 col-12 mx-auto">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="3"
                ></li>
              </ol>
              <div className="carousel-inner card border-0 shadow-lg p-4">
                <div className="carousel-item active text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={customersvg}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer1"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">David</h3>
                        <p>

                        Ikut TOW yang ke-4 kalinya, pastinya happy banget, ini jadi pengalaman pertama kali lagi untuk keluar dari rumah dengan protokol kesehatan dan segala adaptasi kenormalan baru. Tapi di lain sisi juga sedih karena liat anjloknya pariwisata Indonesia. Bersyukur Kemenparekraf mengemas TOW dengan cara yang berbeda, jadi bisa sosialisasi CHSE ke masyarakat yang pastinya bisa ngebantu ekonomi buat Indonesia juga.
                        
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={customersvg}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer2"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Varius</h3>
                        <p>
                          Mencari paket destinasi wisata dengan sangat mudah, dan pemesanan bisa dilakukan dengan cepat dan aman...respon adminnya juga sangat baik.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={customersvg}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer1"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Putri Angela</h3>
                        <p>
                          Travell.Io sangat membantu perjalanan saya, saya bisa menemukan destinasi wisata yang saya inginkan, dan saya bisa menemukan paket wisata yang saya inginkan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={require("../images/customers/customer4.svg")}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer4"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Customer RTY</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur Praesent
                          commodo cursus magna, vel scelerisque nisl consectetur  
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <h1 className="display-4"><center>Team Kami</center></h1>
      </div>
      <div className="row mb-5">
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/sNut2MqSmds/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Rafli Al Fajar</h5>
              <div className="card-text text-black-50">
              Manager Tim<p className="float-right">E41200029</p>
              </div>
              <h6 className="mt-5">Akun media Sosial</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Dwi Nur Ellisa</h5>
              <div className="card-text text-black-50">
              Website Developer <p className="float-right">E41200115</p>
              </div>
              <h6 className="mt-5">Akun media Sosial</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Rera Varius Chindua</h5>
              <div className="card-text text-black-50">
              UI/UX Designer <p className="float-right">E41200170</p>
              </div>
              <h6 className="mt-5">Akun media Sosial</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/sNut2MqSmds/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Maulana Fiqri Nurul Fawaid</h5>
              <div className="card-text text-black-50">
                Mobile Developer <p className="float-right">E41200105</p>
              </div>
              <h6 className="mt-5">Akun media Sosial</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Yuliana Dewi</h5>
              <div className="card-text text-black-50">
                SQA <p className="float-right">E41200315</p>
              </div>
              <h6 className="mt-5">Akun media Sosial</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
