import logo from "@/../public/images/logo.svg";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-w-6xl py-10 mx-auto">
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/* Logo */}
            <div className="h-8 relative">
              <Image src={logo} alt="" className="w-44 md:ml-3" />
            </div>
            {/* Menu Container */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* Item 1 */}
              <div className="h-10 group">
                <a href="#">Nosotros</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* Item 2 */}
              <div className="h-10 group">
                <a href="#">Investigación</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* Item 3 */}
              <div className="h-10 group">
                <a href="#">Proyectos</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* Item 4 */}
              <div className="h-10 group">
                <a href="#">Tecnología</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              {/* Item 5 */}
              <div className="h-10 group">
                <a href="#">Contacto</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>

          {/* Redes Sociales y Copyright */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* Contenedor de Icons */}
            <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              {/* Icon 1 */}
              <div className="group">
                <a href="#">
                  <FaFacebook className="text-xl" />
                </a>
              </div>
              {/* Icon 1 */}
              <div className="group">
                <a href="#">
                  <FaTwitter className="text-xl" />
                </a>
              </div>
              {/* Icon 1 */}
              <div className="group">
                <a href="#">
                  <FaPinterest className="text-xl" />
                </a>
              </div>
              {/* Icon 1 */}
              <div className="group">
                <a href="#">
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>
            {/* Copyright */}
            <div className="font-bold">
              &copy; {new Date().getFullYear()}. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
