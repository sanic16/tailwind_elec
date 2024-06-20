import Image from "next/image";

import project1 from "@/../public/images/desktop/project1.jpg";
import project2 from "@/../public/images/desktop/project2.jpg";
import project3 from "@/../public/images/desktop/project3.jpg";
import project4 from "@/../public/images/desktop/project4.jpg";
import project5 from "@/../public/images/desktop/project5.jpg";
import project6 from "@/../public/images/desktop/project6.jpg";
import project7 from "@/../public/images/desktop/project7.jpg";
import project8 from "@/../public/images/desktop/project8.jpg";

const projects = [
  {
    id: 1,
    title: "Proyecto 1",
    image: project1,
  },
  {
    id: 2,
    title: "Proyecto 2",
    image: project2,
  },
  {
    id: 3,
    title: "Proyecto 3",
    image: project3,
  },
  {
    id: 4,
    title: "Proyecto 4",
    image: project4,
  },
  {
    id: 5,
    title: "Proyecto 5",
    image: project5,
  },
  {
    id: 6,
    title: "Proyecto 6",
    image: project6,
  },
  {
    id: 7,
    title: "Proyecto 7",
    image: project7,
  },
  {
    id: 8,
    title: "Proyecto 8",
    image: project8,
  },
];

const Creations = () => {
  return (
    <section id="creations">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Nuestros Proyectos
          </h2>
          <button className="hidden btn md:block">Ver todos</button>
        </div>

        <div className="item-container">
          {projects.map((project) => (
            <div className="group item" key={project.id}>
              <div className="relative h-[400px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="duration-200 block h-full w-full object-cover group-hover:scale-110"
                />
              </div>
              <div className="item-gradient"></div>
              <h5 className="absolute px-6 duration-200 bottom-4 w-52 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                {project.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creations;
