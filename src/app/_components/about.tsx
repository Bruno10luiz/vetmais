import Image from "next/image";
import about1Img from "../../../public/fachada-vet.jpg";
import about2Img from "../../../public/agendar-consulta.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section id="about" className="bg-[#FDF6EC] py-16 overflow-hidden">
      <div className="container px-4 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative " data-aos="fade-left">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto de cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto de cachorro 2"
                fill
                quality={100}
                priority
                data-aos="fade-down"
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold" data-aos="fade-right">
              {" "}
              SOBRE NÓS
            </h2>
            <p data-aos="fade-right">
              Na Vet+, nosso compromisso é com a saúde e o bem-estar do seu pet.
              Contamos com uma equipe de médicos veterinários qualificados e uma
              estrutura moderna para oferecer assistência de qualidade, desde
              consultas de rotina até internações 24h. Nosso objetivo é
              proporcionar um atendimento humanizado e eficiente, garantindo o
              melhor cuidado para o seu companheiro.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2" data-aos="fade-right">
                <Check className="text-[#33833a]" />
                Atendimento humanizado e personalizado.
              </li>
              <li className="flex items-center gap-2" data-aos="fade-left">
                <Check className="text-[#33833a]" />
                Uso de tecnologia e inovação para diagnósticos e tratamentos.
              </li>
              <li className="flex items-center gap-2" data-aos="fade-right">
                <Check className="text-[#33833a]" />
                Ambiente seguro e acolhedor para os pets e seus tutores.
              </li>
            </ul>
            <div className="flex gap-2">
              <a
                data-aos="fade-left"
                href="https://wa.me/5534996472326?text=Olá, vim pelo site e gostaria de mais informações"
                target="_blank"
                className="bg-[#3de85a] text white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-8 h-8 text-white " />
                Contato via Whatsapp
              </a>
              <a
                data-aos="fade-left"
                href="#endereco"
                className=" text white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-8 h-8 text-black " />
                Visite-nos e conheça nossa clínica!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
