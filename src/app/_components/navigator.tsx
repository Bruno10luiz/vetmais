import Image from "next/image";
import vetMaisLogo from "../../../public/logovetverde-_2_.webp";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function Navigator() {
  return (
    <div className="bg-white overflow-hidden sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between px-6 md:px-20 py-4 relative">
        <a href="/" className="flex-shrink-0">
          <Image src={vetMaisLogo} alt="Logo Vet Mais" className="h-16 w-32" />
        </a>

        <a
          href="https://wa.me/5534996472326?text=Olá, vim pelo site e gostaria de mais informações"
          target="_blank"
          className="bg-[#3de85a] text-white flex items-center gap-2 px-3 py-2 rounded-md md:hidden absolute right-6"
        >
          WhatsApp
          <WhatsappLogo className="w-5 h-5 text-white" />
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
