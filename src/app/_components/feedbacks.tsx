"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import tutor1 from "../../../public/feed1.png";
import tutor2 from "../../../public/feed2.png";
import tutor3 from "../../../public/feed3.jpg";
import tutor4 from "../../../public/feed4.jpg";
import tutor5 from "../../../public/feed5.jpg";
import tutor6 from "../../../public/feed6.jpg";
import Image from "next/image";
import { useEffect } from "react";

const feedbacks = [
  {
    content:
      "Lugar excelente e com profissionais extremamente capacitados e com amor no que fazem. Levei minha cadela e foi muito bem cuidada. Recomendo!",
    author: "Vladimir Queiroz",
    image: tutor1,
  },
  {
    content:
      "Clínica completa, ótima estrutura, com profissionais capacitados, atenciosos e prontos para atender os pets!",
    author: "Matheus",
    image: tutor3,
  },
  {
    content:
      "Simplesmente a melhor clinica de Uberlândia e região! Profissionais bem competentes e atenciosos!",
    author: "Nair Correa",
    image: tutor4,
  },
  {
    content:
      "A clínica é muito completa, conta com profissionais excelentes e o atendimento é ótimo!",
    author: "Marília Silva",
    image: tutor2,
  },
  {
    content:
      "Trabalho excelente, com profissionais capacitados. Que entregam o seu melhor para cuidar do nosso doguinho.",
    author: "Fernando",
    image: tutor5,
  },
  {
    content:
      "Amo esse lugar! Profissionais de confiança e muito competentes, fazem tudo com muito amor e carinho. Indico de olhos fechados ❤️",
    author: "Zila Pacheco",
    image: tutor6,
  },
];

export function Feedbacks() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5500);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [emblaApi]);
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12 "
          data-aos="fade-up"
        >
          Depoimentos dos nossos clientes
        </h2>

        <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {feedbacks.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative w-20 h-20">
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes="96px"
                          className="object-cover w-20 h-20 rounded-full"
                        />
                      </div>
                      <p className="text-gray-200">{item.content}</p>
                      <div>
                        <p className="fonte-bold">{item.author}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
