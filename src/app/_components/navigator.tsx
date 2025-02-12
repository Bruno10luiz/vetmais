import Image from "next/image";
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
              className="h-20 w-32 ml-40"
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
