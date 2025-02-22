import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import catdogImg from "../../../public/catdog-home.png";
import catImg from "../../../public/hero-dog.webp";
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
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              {"Bem-vindo(a) a Vet + "}
            </h1>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              Para nós, além de um paciente, é o Amor de alguém
            </h1>

            <p className="lg:text-lg" data-aos="fade-down">
              A Vet+ oferece os melhores serviços para garantir o bem-estar e a
              saúde do seu amigo de quatro patas!
            </p>
            <p>Conheça a nossa unidade e agende uma consulta!</p>
            <a
              data-aos="fade-up"
              href="https://wa.me/5534996472326?text=Olá, vim pelo site e gostaria de mais informações"
              target="_blank"
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via Whatsapp
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
