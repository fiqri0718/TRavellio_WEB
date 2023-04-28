import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="border-top bg-white mt-5">
            <div className="py-4 footer-a">
                <Container>
                    <Row className="py-1">
                        <Col xs={12} md={6} lg={3}>
                            <ul className="list-unstyled">
                                <Link to={'/About'}>
                                <h6>tentang</h6>
                                </Link>
                                <li>berita</li>
                                <li>investor</li>
                                <li>pendiri</li>
                                <li>karir</li>
                                <li>Komunitas</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <ul className="list-unstyled">
                                <h6>Tuan Rumah</h6>
                                <li>Tuan rumah yang bertanggung jawab</li>
                                <li>Pusat Sumber Daya</li>
                                <li>Pusat komunitas</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <ul className="list-unstyled">
                                <h6>mendukung</h6>
                                <li>respon covid-19</li>
                                <li>Bantuan</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="py-3 mx-5 d-flex flex-row flex-wrap text-center align-items-center justify-content-around border-bottom">
                <div>
                    <h5>Juga tersedia</h5>
                    <div>
                        <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg" alt="" />
                        <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg" alt="" />
                    </div>
                </div>
                <div>
                    <h5>Silahkan ikuti media sosial milik kami</h5>
                    <div>
                        <a href="https://web.facebook.com/nabia.sheikh.1997/">
                                 <FaFacebookSquare className="connect text-dark" /></a>
                             <a href="https://www.linkedin.com/">
                                 <FaLinkedin className="connect text-dark" /></a>
                             <a href="https://www.instagram.com/">
                                 <AiFillInstagram className="connect text-dark" /></a>
                             <a href="https://www.youtube.com/">
                                <IoLogoYoutube className="connect text-dark" /></a>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-white d-flex d-row justify-content-around align-items-center flex-wrap">
                <div>
                    <p className="text-center pt-3">&copy; 2022 Travell.Io.</p>
                </div>
                <div>
                    <ul className="list-unstyled d-flex d-row flex-wrap">
                        <li className="mx-2 mt-2">kontak</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer