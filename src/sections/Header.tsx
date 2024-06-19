"use client";
import Image from "next/image";
import logo from "@/../public/images/logo.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="hero" className="bg-hero-image bg-cover bg-no-repeat">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <nav className="flex items-center justify-between font-bold text-white">
          <Image src={logo} alt="logo" />
          <div className="hidden h-10 font-alata lg:flex lg:space-x-8">
            <div className="group">
              <a href="#">Nosotros</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Investigación</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Proyectos</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50 "></div>
            </div>
            <div className="group">
              <a href="#">Tecnología</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Contacto</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
          <div
            id="menu"
            className={`absolute top-0 bottom-0 left-0 ${
              isOpen ? "flex" : "hidden"
            } flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg bg-black text-white`}
          >
            <a href="#" className="hover:text-pink-500">
              Nosotros
            </a>
            <a href="#" className="hover:text-pink-500">
              Investigación
            </a>
            <a href="#" className="hover:text-pink-500">
              Proyectos
            </a>
            <a href="#" className="hover:text-pink-500">
              Tecnología
            </a>
            <a href="#" className="hover:text-pink-500">
              Contacto
            </a>
          </div>
          <div className="lg:hidden">
            <button
              id="menu-btn"
              type="button"
              className="z-40 block hamburguer lg:hidden focus:outline-none"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className={`${isOpen && "open"} hamburguer-top`}></span>
              <span className={`${isOpen && "open"} hamburguer-middle`}></span>
              <span className={`${isOpen && "open"} hamburguer-bottom`}></span>
            </button>
          </div>
        </nav>
        <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          Electrónica Aplicada a la Ingeniería
        </div>
      </div>
    </section>
  );
};

export default Header;
