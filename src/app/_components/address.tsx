"use client";
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export function Address() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyClY-0N4W6cn47dLnhip2aUJwtrcyyoKNI",
  });
  return (
    <div
      id="endereco"
      className="container mx-auto px-4 h-dvh mt-20 mb-36 overflow-hidden"
    >
      <h1 className="text-3xl pb-3 font-bold " data-aos="fade-left">
        Nossa localização
      </h1>
      <p className="pb-5" data-aos="fade-left">
        Rua Rafael Marino Neto, Jardim Karaíba, 725 - Uberlândia | MG
      </p>

      <p className="pb-5" data-aos="fade-left">
        Segunda à sexta 08:00h às 19:00h
      </p>
      <p className="pb-5" data-aos="fade-left">
        Sábado 08:00 às 12:00h
      </p>

      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{
            lat: -18.95002606303571,
            lng: -48.26366044284155,
          }}
          zoom={18}
        >
          <Marker
            position={{ lat: -18.95002606303571, lng: -48.26366044284155 }}
          />
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}
