/*import Image from "next/image";
import vetMaisLogo from "../../../public/vet+LOGOpng.png";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function Navigator() {
  return (
    <div className=" items-center bg-white overflow-hidden sticky top-0 z-50 ">
      <div className="flex items-center justify-between ">
        <div>
          <a href="/">
            <Image
              src={vetMaisLogo}
              alt="Logo Vet Mais"
              className="h-20 w-32 ml-20"
            />
          </a>
        </div>
        <div className="flex items-center ml-8 md:mr-28">
          <ul className="flex gap-5 pr-5 invisible lg:visible">
            <li className="text-xl  hover:text-green-700">
              <a href="#about">Sobre</a>
            </li>
            <li className="text-xl hover:text-green-700">
              <a href="#services">Serviços</a>
            </li>
            <li className="text-xl hover:text-green-700">
              <a href="#endereco">Localização</a>
            </li>
          </ul>
          <div className="">
            <a
              href="https://wa.me/5534996472326?text=Olá, vim pelo site e gostaria de mais informações"
              target="_blank"
              className="bg-[#3de85a] text white flex items-center justify-center w-22 gap-2 px-4 py-2 mr-3 rounded-md invisible md:visible"
            >
              <WhatsappLogo className="w-5 h-5 text-white " />
              Contato via Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
 import Image from "next/image";
import vetMaisLogo from "../../../public/vet+LOGOpng.png";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function Navigator() {
  return (
    <div className="bg-white overflow-hidden sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        <a href="/" className="flex-shrink-0">
          <Image src={vetMaisLogo} alt="Logo Vet Mais" className="h-16 w-32" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            <li className="text-xl hover:text-green-700">
              <a href="#about">Sobre</a>
            </li>
            <li className="text-xl hover:text-green-700">
              <a href="#services">Serviços</a>
            </li>
            <li className="text-xl hover:text-green-700">
              <a href="#endereco">Localização</a>
            </li>
          </ul>

          <a
            href="https://wa.me/5534996472326?text=Olá, vim pelo site e gostaria de mais informações"
            target="_blank"
            className="bg-[#3de85a] text-white flex items-center gap-2 px-4 py-2 rounded-md"
          >
            <WhatsappLogo className="w-5 h-5 text-white" />
            Contato via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
*/
import Image from "next/image";
import vetMaisLogo from "../../../public/vet+LOGOpng.png";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function Navigator() {
  return (
    <div className="bg-white overflow-hidden sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between px-6 md:px-20 py-4 relative">
        {/* Logo no canto superior esquerdo */}
        <a href="/" className="flex-shrink-0">
          <Image src={vetMaisLogo} alt="Logo Vet Mais" className="h-16 w-32" />
        </a>

        {/* Botão de WhatsApp - visível apenas abaixo de 768px */}
        <a
          href="https://wa.me/5534996472326?text=Olá, vim pelo site e gostaria de mais informações"
          target="_blank"
          className="bg-[#3de85a] text-white flex items-center gap-2 px-3 py-2 rounded-md md:hidden absolute right-6"
        >
          WhatsApp
          <WhatsappLogo className="w-5 h-5 text-white" />
        </a>

        {/* Navegação - oculta em telas menores que 768px */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            <li className="text-xl hover:text-green-700">
              <a href="#about">Sobre</a>
            </li>
            <li className="text-xl hover:text-green-700">
              <a href="#services">Serviços</a>
            </li>
            <li className="text-xl hover:text-green-700">
              <a href="#endereco">Localização</a>
            </li>
          </ul>

          {/* Botão de WhatsApp - visível apenas acima de 768px */}
          <a
            href="https://wa.me/5534996472326?text=Olá, vim pelo site e gostaria de mais informações"
            target="_blank"
            className="bg-[#3de85a] text-white flex items-center gap-2 px-4 py-2 rounded-md"
          >
            <WhatsappLogo className="w-5 h-5 text-white" />
            Contato via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
