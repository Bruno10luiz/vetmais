import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import {
    Phone,
} from "lucide-react";

export function Contact() {
    return (
        <section
            id="contact"
            className="w-full py-12 px-6 bg-[#FDF6EC] flex flex-col items-center text-center"
        >
            <h2
                data-aos="fade-up"
                className="text-3xl font-bold text-gray-800 mb-8"
            >
                Fale Conosco
            </h2>

            <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
                <div
                    data-aos="fade-up"
                    className="flex flex-col items-center gap-2"
                >
                    <a
                        href="tel:+5534996472326"
                        className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-md hover:bg-green-600 hover:scale-[1.02] transition-all duration-300 w-full"
                    >
                        <Phone className="w-5 h-5" height="bold" />
                        LIGAR AGORA
                    </a>
                    <span className="text-gray-700 font-bold select-all">
                        (34) 99647-2326
                    </span>
                </div>
                <div
                    data-aos="fade-up"
                    className="flex flex-col items-center gap-2"
                >
                    <a
                        href="https://wa.me/5534996472326?text=Olá, vim pelo site e gostaria de mais informações."
                        target="_blank"
                        className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-md hover:bg-green-600 hover:scale-[1.02] transition-all duration-300 w-full"
                    >
                        <WhatsappLogo className="w-5 h-5" weight="fill" />
                        FALAR NO WHATSAPP
                    </a>
                    <span className="text-gray-700 font-bold select-all">
                        (34) 99647-2326
                    </span>
                </div>
            </div>
        </section>
    );
}
