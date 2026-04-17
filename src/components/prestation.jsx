import React from "react";
import Cards from "./Cards";
import "./Card.css";
import { FaRegCalendar } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaLock } from "react-icons/fa6";
export default function Prestation() {
  const prestations = [
    {
      id: 1,
      title: "SAFE STORAGE",
      text: [
        "acces facile a votre marchandise ",
        "gestion de stock optimisee",
        "espace de stockage surveille et protege",
        "solutions flexibles adaptees a vos besoins",
      ],
      icon: <FaLock />,
    },
    {
      id: 2,
      title: "LIVRAISON RAPIDE",
      text: [
        "suivi en temps reel de vos colis",
        "service fiable et securise",
        "livraison express a travers algerie",
        "livraison a temps garantie",
      ],
      icon: <CiDeliveryTruck />,
    },
    {
      id: 3,
      title: "RAMASAGE FLEXIBLES",
      text: [
        "gain de temps et praticite",
        "service professionnel et fiable ",
        "planifcation flexsible des remassages",
        "ramassage a domicile ou en entreprise",
      ],
      icon: <FaRegCalendar />,
    },
  ];

  return (
    <div className="parent">
      <div className="top">
        <h1 className="h1">NOS PRESTATIONS</h1>
        <div className="line"></div>
        <p className="p">
          restez competitif et devloppez votre entreprise grace a nos solutions
          de livraison et personnalisees
        </p>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: "16px",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        {prestations.map((prestation) => (
          <Cards
            key={prestation.id}
            title={prestation.title}
            text={prestation.text}
            icon={prestation.icon}
          />
        ))}
      </div>
    </div>
  );
}
