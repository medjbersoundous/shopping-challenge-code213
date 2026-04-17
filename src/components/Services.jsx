import React from "react";
import Card from "./Card";
import "./Services.css";
import { TbTargetArrow } from "react-icons/tb";;
import { BsCurrencyDollar } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
export default function Services() {
  const serveces = [
    {
      icon: <TbTargetArrow  size={40} />,
      id: 1,
      title: "Suivi en direct",
      Description:
        "Suivi de livraison en temps réel pour une visibilité totale et une tranquillité d’esprit.",
      
    },
    {
      icon: <GiReturnArrow size={40} />,
      id: 2,
      title: "Emballage soigné",
      Description:
        "Vos articles sont traités avec la plus grande précision et attention tout au long de la livraison.",
      
    },
    {
     icon: <CiDeliveryTruck size={40} />,
      id: 3,
      title: "Retours gratuits",
      Description:
        "Des retours gratuits conçus pour garantir votre entière satisfaction",
      
    },
    {
      icon: <BsCurrencyDollar size={40} />,
      id: 4,
      title: "Prix competetives",
      Description:
        "Des tarifs transparents et abordables sans compromis sur la qualité du service.",
      
    },
  ];
  return (
    <div className="page">
      <div>
        <h1>Pourquoi choisir Packers </h1>
        <div className="line"> </div>
        <p>
          Chez Packers, nous offrons des solutions logistiques rapides, fiables
          et fluides, adaptées à vos besoins uniques
        </p>
      </div>
      <div className="services">
        {serveces.map((service, id) => (
          <Card
           icon={service.icon}
            key={id}
            title={service.title}
            Description={service.Description}
           
          />
        ))}
      </div>
    </div>
  );
}
