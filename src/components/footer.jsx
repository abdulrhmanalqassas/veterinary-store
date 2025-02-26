import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[rgba(244,164,96,1)]  text-black p-4 bottom-0 w-full">
      <div className="flex justify-between items-center">
        <div>
          <p>Contact us: g.d_corporation@hotmail.com</p>
          <p>Phone: +2010 1141 4717</p>
        </div>
        <div className="flex">
          <a
            href="https://www.facebook.com/share/1ArJYKbbzX/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-2xl text-black"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/GlobadorCorp?fbclid=IwY2xjawIl4PBleHRuA2FlbQIxMAABHe5iG8tCXi3JJrQsh3MF0abFIQA5qhF5HlOyY8_7acC0n3KTcFH16lzRTQ_aem_9tjJP1d3TVzwlB2h6npkaQ"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-2xl text-black"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/Globador?fbclid=IwY2xjawIl4C9leHRuA2FlbQIxMAABHe5iG8tCXi3JJrQsh3MF0abFIQA5qhF5HlOyY8_7acC0n3KTcFH16lzRTQ_aem_9tjJP1d3TVzwlB2h6npkaQ"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-2xl text-black"
          >
            <FaInstagram />
          </a>
          {/* <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2 text-2xl text-black"
                    >
                        <FaLinkedin />
                    </a> */}
          <a
            href="https://www.youtube.com/@Globador?fbclid=IwY2xjawIl4QVleHRuA2FlbQIxMAABHbVw_kPhgra_1UVCRpmiRtL8EWKRQoVE6qHGaLLKnpdUdg9GcinbfvCW_g_aem_qNaWkEV1IAsVclk-W8Qb1w"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-2xl text-black"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <p className="text-center m-0 mt-2">
        © 2023 Globador. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
