import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[rgba(244,164,96,1)]  text-black p-4 bottom-0 w-full">
            <div className="flex justify-between items-center">
                <div>
                    <p>Contact us: contact@yourcompany.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="flex">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2 text-2xl text-black"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2 text-2xl text-black"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2 text-2xl text-black"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2 text-2xl text-black"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <p className="text-center m-0 mt-2">© 2023 Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
