import vetMaisLogo from "../../../public/Logo VET+branco.png";
import Image from "next/image";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <section className="bg-[#33833a] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8"></div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <a href="/">
              <Image
                src={vetMaisLogo}
                alt="Logo Vet Mais"
                className="h-28 w-28"
              />
            </a>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e dedicação.
            </p>
            <a
              href="https://wa.me/5534996472326?text=Olá, vim pelo site e gostaria de mais informações."
              target="_blank"
              className="bg-green-500 px-4 py-2 rounded-md"
            >
              Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: vetmais@teste.com</p>
            <p>Telefone: (34) 9 9647-2326</p>
            <p>Rua Rafael Marino Neto, Jardim Karaíba, Uberlândia | MG</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/vetmaisudi/" target="_blank">
                <InstagramLogo className="w-8 h-8" />
              </a>
              <a
                href="https://wa.me/5534996472326?text=Olá, vim pelo site e gostaria de mais informações."
                target="_blank"
              >
                <WhatsappLogo className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
