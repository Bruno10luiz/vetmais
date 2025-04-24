"use client";
import React from "react";
import {
  Stethoscope,
  Syringe,
  Microscope,
  FlaskConical,
  Percent,
  SquareActivity,
  Hospital,
  Scissors,
} from "lucide-react";
import { text } from "stream/consumers";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const healthPlans = [
  {
    name: "Plano Baby",
    description: "Exclusivo para filhotes até 6 meses de idade.",
    coverages: [
      {
        icon: <Stethoscope className="w-5 h-5 text-green-600" />,
        text: "2 consultas pediátricas",
      },
      {
        icon: <Syringe className="w-9 h-9 text-green-600" />,
        text: "Vacinas: 2 Dhppi e 1 contra Raiva (cães), 2 V4 e 1  contra a raiva (gatos) / Polivante anual e Anti-Rábica anual (ambos)",
      },
      {
        icon: <Microscope className="w-5 h-5 text-green-600" />,
        text: "Exames: 2 Hemogramas completos ",
      },
      {
        icon: <FlaskConical className="w-5 h-5 text-green-600" />,
        text: "Labolatório: 4 Exames laboratoriais complementares",
      },
      {
        icon: <Percent className="w-5 h-5 text-green-600" />,
        text: "10% de desconto em todos os outros serviços",
      },
    ],
    linktext: "Olá! Vi pelo site sobre o Plano Baby e gostaria de saber mais!",
  },
  {
    name: "Plano Bronze",
    description: "Cobertura essencial com bons benefícios.",
    coverages: [
      {
        icon: <Stethoscope className="w-5 h-5 text-green-600" />,
        text: "2 Consultas gerais",
      },
      {
        icon: <Syringe className="w-9 h-9 text-green-600" />,
        text: "Vacinas: 2 Dhppi e 1 contra Raiva (cães); 2 V4 e 1 contra Raiva (gatos) / Polivante anual e Anti-Rábica anual (ambos)",
      },
      {
        icon: <Microscope className="w-5 h-5 text-green-600" />,
        text: "Exames: 2 Hemogramas completos",
      },
      {
        icon: <FlaskConical className="w-5 h-5 text-green-600" />,
        text: "Laboratório: 4 Exames laboratoriais complementares",
      },
      {
        icon: <Percent className="w-5 h-5 text-green-600" />,
        text: "10% de desconto em todos os outros serviços",
      },
    ],
    linktext:
      "Olá! Vi pelo site sobre o Plano Bronze e gostaria de saber mais!",
  },
  {
    name: "Plano Prata",
    description: "Mais segurança com uma cobertura mais ampla.",
    coverages: [
      {
        icon: <Stethoscope className="w-5 h-5 text-green-600" />,
        text: "3 consultas gerais",
      },
      {
        icon: <Syringe className="w-9 h-9 text-green-600" />,
        text: "Vacinas: 1 Múltipla e 1 contra Raiva (cães); 1 V4 e 1 contra Raiva (gatos) / Polivante anual e Anti-Rábica anual (ambos)",
      },
      {
        icon: <Microscope className="w-5 h-5 text-green-600" />,
        text: "Exames: 3 Hemogramas completos",
      },
      {
        icon: <FlaskConical className="w-5 h-5 text-green-600" />,
        text: "Laboratório: 6 Exames laboratoriais complementares",
      },
      {
        icon: <SquareActivity className="w-5 h-5 text-green-600" />,
        text: "Exames de Imagem: 1 Ultrassom ou 1 Radiografia até 2 projeções",
      },
      {
        icon: <Percent className="w-5 h-5 text-green-600" />,
        text: "15% de desconto em todos os outros serviços",
      },
    ],
    linktext: "Olá! Vi pelo site sobre o Plano Prata e gostaria de saber mais!",
  },
  {
    name: "Plano Ouro",
    description: "Proteção avançada para todas as fases do pet.",
    coverages: [
      {
        icon: <Stethoscope className="w-5 h-5 text-green-600" />,
        text: "3 Consultas gerais",
      },
      {
        icon: <Syringe className="w-9 h-9 text-green-600" />,
        text: "Vacinas: 1 Múltipla e 1 contra Raiva(cães); 1 V4 e 1 contra Raiva / Polivante anual e Anti-Rábica anual (ambos)",
      },
      {
        icon: <Hospital className="w-5 h-5 text-green-600" />,
        text: "Internação: 3 Diárias de internação (sem medicações)",
      },
      {
        icon: <Microscope className="w-5 h-5 text-green-600" />,
        text: "Exames: 5 Hemogramas completos",
      },
      {
        icon: <FlaskConical className="w-5 h-5 text-green-600" />,
        text: "Laboratório: 15 Exames laboratoriais complementares",
      },
      {
        icon: <SquareActivity className="w-7 h-7 text-green-600" />,
        text: "Exames de Imagem: 2 Ultrassons ou 2 Radiografias até 2 projeções",
      },
      {
        icon: <Percent className="w-5 h-5 text-green-600" />,
        text: "20% de desconto em todos os outros serviços",
      },
    ],
    linktext: "Olá! Vi pelo site sobre o Plano Ouro e gostaria de saber mais!",
  },
  {
    name: "Plano Diamante",
    description: "Cobertura premium com todos os recursos disponíveis.",
    coverages: [
      {
        icon: <Stethoscope className="w-5 h-5 text-green-600" />,
        text: "Consultas ilimitadas (geral e especializadas)",
      },
      {
        icon: <Syringe className="w-8 h-8 text-green-600" />,
        text: "Vacinas: 1 Múltipla e 1 contra Raiva (cães); 1 V4 e 1 contra Raiva / Polivante anual e Anti-Rábica anual (ambos)",
      },
      {
        icon: <Hospital className="w-5 h-5 text-green-600" />,
        text: "Internação: 3 Diárias de internação (sem medicações)",
      },
      {
        icon: <Scissors className="w-9 h-9 text-green-600" />,
        text: "Cirurgia: 1 Tartarectomia ou 1 Castração ou R$400,00 de desconto em outro procedimento cirúrgico",
      },
      {
        icon: <Microscope className="w-5 h-5 text-green-600" />,
        text: "Exames: 5 Hemogramas completos",
      },
      {
        icon: <FlaskConical className="w-5 h-5 text-green-600" />,
        text: "Laboratório: 15 Exames laboratóriais complementares",
      },
      {
        icon: <SquareActivity className="w-8 h-8 text-green-600" />,
        text: "Exames de Imagem: 3 Ultrassons ou 3 Radiografia até 2 projeções e 1 Eletrocardiograma",
      },
      {
        icon: <Percent className="w-5 h-5 text-green-600" />,
        text: "20% de desconto em todos os outros serviços",
      },
    ],
    linktext:
      "Olá! Vi pelo site sobre o Plano Diamante e gostaria de saber mais!",
  },
  {
    name: "Adicional gastroenterologia*",
    description: "Pode ser adicionado em qual plano de saúde",
    coverages: [
      {
        icon: <Microscope className="w-5 h-5 text-green-600" />,
        text: "Consultas: 2 Consultas especializadas em gastroenterologia",
      },
      {
        icon: <FlaskConical className="w-5 h-5 text-green-600" />,
        text: "Exames laboratoriais: 2 avalições fecais",
      },
    ],
    linktext:
      "Olá! Vi pelo site sobre o Adicional Gastroentelogia e gostaria de saber mais!",
  },
];

export default function HealthPlansSection() {
  return (
    <section className="py-16 bg-gray-50" data-aos="fade-right">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Nossos Planos de Saúde Pet
        </h2>
        <h2 className="text-3xl font-bold text-red-500 mb-10">
          <b>PLANOS A PARTIR DE R$41,50!</b>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300 items-center"
            >
              <h3
                className="text-xl font-semibold text-green-700 mb-2"
                data-aos="fade-left"
              >
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-4" data-aos="fade-left">
                {plan.description}
              </p>
              <ul
                className="text-left text-sm text-gray-600 mb-4 space-y-2"
                data-aos="fade-left"
              >
                {plan.coverages.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2"
                    data-aos="fade-left"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <div
                className=" border-gray-700 pt-4 flex items-center justify-center "
                data-aos="fade-left"
              >
                <a
                  target="_blank"
                  href={`https://wa.me/5534996472326?text=Olá, vim pelo site e gostaria de mais informações sobre ${plan.name}.`}
                  className="flex items-center justify-center gap-2 hover:bg-green-500 px-4 py-1 rounded-md duration-300 bg-green-400 text-white"
                >
                  <WhatsappLogo className="w-5 h-5" data-aos="fade-left" />
                  Entrar em contato
                </a>
              </div>
            </div>
          ))}
        </div>
        <h3
          className="text-3xl mt-4 font-bold text-red-500 mb-10"
          data-aos="fade-left"
        >
          <b>OFERTAS POR TEMPO LIMITADO!</b>
        </h3>
      </div>
    </section>
  );
}
