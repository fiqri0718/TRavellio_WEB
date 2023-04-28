import React from 'react'
import { FaUserShield, FaMap, FaMoneyCheckAlt, FaShieldAlt } from "react-icons/fa";
import Title from './Title';

const Services = () => {
    const service = {
      services: [
        {
          icon: <FaUserShield />,
          title: "Pelayanan Terpercaya",
          info: "Travell.io sudah banyak dipercaya oleh masyarakat sekitar, sehingga Anda bisa melakukan perjalanan dengan lebih tenang dan menyenangkan tanpa khawatir terkena tipu-tipu dari pihak abal-abal.",
        },
        {
          icon: <FaMap />,
          title: "Pilihan Paket Bervariasi",
          info: "Untuk memenuhi kebutuhan liburan Anda kami menghadirkan berbagai pilihan paket sesuai kebutuhan liburan Anda. Mulai dari paket wisata untuk family, group maupun honeymoon dengan destinasi yang bervariatif.",
        },
        {
          icon: <FaMoneyCheckAlt />,
          title: "Harga Terjangkau",
          info: "Kami memberikan harga yang menarik dan terjangkau. Anda akan mendapatkan pelayanan perjalanan sesuai dengan yang kami tawarkan. Sehingga anda akan lebih hemat dalam kegiatan liburan anda.",
        },
        {
          icon: <FaShieldAlt />,
          title: "Layanan Terbaik",
          info: "Perjalanan Anda semakin berkesan dengan berbagai layanan terbaik seperti pilihan paket destinasi yang strategis berdekatan dengan tempat peristirahatan yang murah dan berkualitas juga pusat oleh oleh.",
        },
      ],
    };
    return (
      <div className="container-fluid services">
        <Title title="Keunggulan Travell.Io" />
        <div className="row">
          {service.services.map((item, index) => {
            return (
              <div
                className="col-md-4 col-lg-3 col-12 mx-auto my-3"
                key={index}
              >
                <div className="card shadow-lg border-0 p-4">
                  <article className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Services
