"use client";
import React from "react";

export function Address() {

  return (
    <div
      id="endereco"
      className="container max-w-full px-4 py-8 overflow-hidden bg-[#90d698]"
    >
      <h1 className="text-3xl pb-3 font-bold " data-aos="fade-left">
        Nossa localização
      </h1>
      <a href="https://maps.app.goo.gl/56ysj3ahtctaD3Df6" target="_blank">
        <p className="pb-5" data-aos="fade-left">
          Rua Rafael Marino Neto, Jardim Karaíba, 725 - Uberlândia | MG
        </p>
      </a>
      <h1 className="text-3xl pb-3 font-bold " data-aos="fade-left">
        Horário de atendimento
      </h1>
      <p className="pb-5" data-aos="fade-left">
        Segunda à sexta 08:00h às 19:00h
      </p>
      <p className="pb-5" data-aos="fade-left">
        Sábado 08:00 às 12:00h
      </p>
    </div>
  );
}
