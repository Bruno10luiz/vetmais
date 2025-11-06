"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Cat,
  Syringe,
  Ambulance,
  Hospital,
  Microscope,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";

const services = [
  {
    title: "Consulta Veterinária",
    description:
      "Cuidamos da saúde do seu pet com atenção e carinho! Nossos veterinários especializados realizam consultas completas, orientando sobre prevenção, diagnóstico e tratamento para garantir o bem-estar do seu animal. Agende uma consulta e proporcione mais qualidade de vida ao seu companheiro!",
    icon: <Cat />,
    linkText:
      "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.",
  },
  {
    title: "Cirurgia",
    description:
      "Realizamos procedimentos cirúrgicos com segurança e tecnologia avançada. Nossa equipe especializada garante todo o cuidado necessário antes, durante e após a cirurgia, proporcionando o melhor para a saúde e recuperação do seu pet.",
    icon: <Scissors />,
    linkText:
      "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.",
  },
  {
    title: "Emergência",
    description:
      "Estamos prontos para atender seu pet em qualquer situação de urgência! Nossa equipe especializada oferece atendimento rápido e cuidadoso, garantindo o melhor suporte para a saúde e bem-estar do seu animal. Em caso de emergência, entre em contato imediatamente!",
    icon: <Ambulance />,
    linkText:
      "Olá, vi no site sobre Banho e tosa e gostaria de mais informações.",
  },
  {
    title: "Internação 24 Horas",
    description:
      "Oferecemos internação 24 horas para garantir o cuidado e a recuperação do seu pet em um ambiente seguro e confortável. Nosso espaço possui internação humanizada, com aromaterapia, cromoterapia e musicoterapia, afim de deixar seu pet o mais confortável possível.",
    icon: <Hospital />,
    linkText:
      "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.",
  },
  {
    title: "Vacinação e Farmácia",
    description:
      "Conte com nossa farmácia veterinária para encontrar os medicamentos e produtos essenciais para a saúde do seu pet. Além disso, realizamos a vacinação com segurança e qualidade, protegendo seu animal contra diversas doenças. Cuide de quem sempre está ao seu lado!",
    icon: <Syringe />,
    linkText: "Olá, vi no site sobre Táxi Pet e gostaria de mais informações.",
  },
  {
    title: "Exames de Imagem e Laboratoriais",
    description:
      "Disponibilizamos exames de imagem e laboratoriais para um diagnóstico rápido e preciso. Com equipamentos modernos e uma equipe especializada. Na Vet+ oferecemos serviços de ultrassonografia, ecocardiograma, eletrocardiograma, radiografia, endoscopia e colonoscopia. Garantimos o melhor cuidado para a saúde do seu pet.",
    icon: <Microscope />,
    linkText:
      "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section id="services" className="bg-[#90d698] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12" data-aos="fade-down">
          Nossos Serviços
        </h2>

        <div className="relative">
          <div className="overflow-hidden"
            ref={emblaRef}
          >
            <div className="flex" data-aos="fade-up">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 lg:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#224d24] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <a
                        target="_blank"
                        href={`https://wa.me/5534996472326?text=Olá, vim pelo site e gostaria de mais informações sobre ${item.title}.`}
                        className="flex items-center justify-center gap-2 hover:bg-green-500 px-4 py-1 rounded-md duration-300"
                      >
                        <WhatsappLogo className="w-5 h-5" />
                        Entrar em contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          //onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          //onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
