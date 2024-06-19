import rasp from "@/../public/images/desktop/rasp.jpg";
import Image from "next/image";

const Feature = () => {
  return (
    <section id="feature">
      <div className="relative container  max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <div className="relative max-h-[500px] max-w-[731px]">
          <Image src={rasp} alt="Feature" className="w-full h-full" />
        </div>
        {/* Text Container */}
        <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
            Profesionales en el diseño de sistemas de control y automatización
          </h2>
          <p className="max-w-md text-center md:text-left">
            Nuestro equipo de ingenieros cuenta con la experiencia y
            conocimientos necesarios para diseñar sistemas de control y
            automatización a la medida de tus necesidades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
