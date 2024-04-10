"use client";
import dynamic from 'next/dynamic';
import React from "react";
// import Map from "./Map";

function MapView({pl1, pr1, pl2, pr2, pl3, pr3, pl4, pr4, pl5, pr5, pl6, pr6, pl7, pr7, pl8, pr8, pl9, pr9, t1, t2, t3, t4, t5, t6, t7, t8, t9, d1, d2, d3, d4, d5, d6, d7, d8, d9, link1, link2, link3, link4, link5, link6, link7, link8, link9}) {
    const MapWithNoSSR = dynamic(() => import('./Map'), {
        ssr: false,
    })
  const center = [-8.4095, 115.1889];
  const zoom = 0;
  const markers = [
    {
      position: [pl1, pr1],
      title: t1,
      description:d1,
      link: link1
    },
    {
      position: [pl2, pr2],
      title: t2,
      description:d2,
      link: link2
    
    },
    {
      position: [pl3, pr3],
      title: t3,
      description:d3,
      link: link3

    },
    {
      position: [pl4, pr4],
      title: t4,
      description:d4,
      link: link4
    },
    {
      position: [pl5, pr5],
      title: t5,
      description:d5,
      link: link5
    },
    {
      position: [pl6, pr6],
      title: t6,
      description:d6,
      link: link6
    },
    {
      position: [pl7, pr7],
      title: t7,
      description: d7,
      link: link7
    },
    {
      position: [pl8, pr8],
      title: t8,
      description:d8,
      link: link8
    },
    {
      position: [pl9, pr9],
      title: t9,
      description:d9,
      link: link9
    },
  ].filter((marker) => marker.position && marker.title && marker.description);

  console.log('data posisi', markers)

  return (
    <div className='-z-10 mt-10'>
      <div className="bg-green-500 mx-auto">
        <MapWithNoSSR center={center} zoom={zoom} markers={markers} />
      </div>
    </div>
  );
}

export default MapView;
