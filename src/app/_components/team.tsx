"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Check } from "lucide-react";
import Sthefany from "../../../public/Sthefany.jpeg";
import Nixon from "../../../public/Nixon.jpeg";
import Luciana from "../../../public/Luciana.jpeg";
import Aline from "../../../public/Aline.jpeg";
import Image from "next/image";

const feedbacks = [
  {
    content:
      "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
    vet: "Dra. Sthefany Lara",
    tech1: "Médica Veterinária graduado na UFU em 2020",
    tech2: "Clínica e cirurgia geral ",
    tech3: "Pós graduanda em Geriatria",
    tech4: "Pós graduanda neonatologia animal",
    image: Sthefany,
  },
  {
    content:
      "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
    vet: "Dr. Nixon Faria",
    tech1: "Médico Veterinário graduado pela UFU em 1992",
    tech2: "Radiologista, patologista clínico",
    tech3: "Endocopista",
    tech4:
      "Pós graduado em Gastroenterologia Veterinária de pequenos animais pela Universidade Castelo Branco em 2016",
    image: Nixon,
  },
  {
    content:
      "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    vet: "Dra. Luciana Benedetti",
    tech1: "Médica Veterinária graduada pela UFU em 2000",
    tech2: "Especialista em ultrassonografia abdominal ",
    tech3: "Especialista em  exames cardiológicos de pequenos animais",
    tech4: "Mestrado e Doutorado em Genética Molecular e Bioquímica pela UFU",
    image: Luciana,
  },
  {
    content:
      "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    vet: "Dra. Aline Vieira",
    tech1: "Médica Veterinária - UFU",
    tech2: "Mestre em Ciências Veterinárias - UFU",
    tech3: "Especialista em Oftalmologia Clínica Veterinária",
    tech4: "Clínica Veterinária",
    image: Aline,
  },
];

export function Team() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-8 h-full ">
      <div className="container mx-auto px-4 tex-">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mt-20 mb-8"
          data-aos="fade-down"
        >
          Nossos profissionais
        </h2>

        <div
          className="relative max-w-4xl h-auto mx-auto"
          data-aos="fade-right"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {feedbacks.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:h-96 min-w-0 px-3"
                >
                  <article className="bg-[#90d698] text-white rounded-2xl h-full flex flex-col md:flex-row gap-7 p-6 md:h-72  text-center">
                    <div className="h-48 w-48 md:w-[40%] md:h-50 md:w-40 md:h-full rounded-2xl flex justify-center items-center mx-auto md:mx-0">
                      <Image
                        src={item.image}
                        alt={item.vet}
                        className="rounded-2xl object-cover h-64"
                      />
                    </div>

                    <div className="w-full md:w-[60%] text-center md:text-left">
                      <h2 className="font-bold text-xl md:text-2xl">
                        {item.vet}
                      </h2>

                      <ul className="space-y-2 mt-4">
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                          <Check className="text-[#33833a]" />
                          {item.tech1}
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                          <Check className="text-[#33833a]" />
                          {item.tech2}
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                          <Check className="text-[#33833a]" />
                          {item.tech3}
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                          <Check className="text-[#33833a]" />
                          {item.tech4}
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {feedbacks.length > 1 && (
            <>
              <button
                className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/3 z-10 md:block "
                onClick={scrollPrev}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <button
                className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/3  z-10 md:block "
                onClick={scrollNext}
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
