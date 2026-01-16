import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import {
  Phone,
  Siren

} from "lucide-react";
import catdogImg from "../../../public/catdog-home.webp";
import catImg from "../../../public/bg-hero.webp";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#33833a] text-white relative overflow-hidden">
      <div>
        <Image
          src={catdogImg}
          alt="Foto cachorro e gato"
          fill
          sizes="100vw"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container  mx-auto pt-16 pb-16 md:pb-0 px-4 relative ">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-9 ">
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              Clínica Veterinária em Uberlândia

            </h1>

            <p className="lg:text-lg" data-aos="fade-down">
              Atendimento Personalizado e de Qualidade
            </p>
            <p className="lg:text-lg" data-aos="fade-down">Consultas • Cirurgias • Internação • Exames • Castrações • Raio X • Ultrassom
            </p>
            <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
              <a
                data-aos="fade-up"
                href="tel:+5534996472326"
                target="_blank"
                className="bg-white text-green-500 border-black px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-md hover:bg-green-100 hover:scale-[1.02] transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                LIGAR AGORA
              </a>

              <a
                data-aos="fade-up"
                href="https://wa.me/5534996310107?text=Olá, vim pelo site e gostaria de mais informações"
                target="_blank"
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-md hover:bg-green-600 hover:scale-[1.02] transition-all duration-300"
              >
                <WhatsappLogo className="w-5 h-5" />
                FALAR NO WHATSAPP
              </a>

              <a
                data-aos="fade-up"
                href="https://wa.me/5534996310107?text=Olá, vim pelo site, estou com uma emergência. "
                target="_blank"
                className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-md hover:bg-red-600 hover:scale-[1.02] transition-all duration-300"
              >
                <Siren className="w-5 h-5" />
                EMERGÊNCIA
              </a>
            </div>
            <a href="https://maps.app.goo.gl/56ysj3ahtctaD3Df6" target="_blank">
              <h4 className="mt-5">Rua Rafael Marino Neto, 725, Uberlândia, Minas Gerais</h4>
            </a>

            <div className="mt-8">
              <div className="flex mt-4 ">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catImg}
                    alt="foto do gato"
                    quality={100}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={catdogImg}
              alt="foto gato e cachorro"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>

        </article>
      </div>
    </section>
  );
}
