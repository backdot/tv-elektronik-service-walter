import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby";
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import Layout from "../components/layout";
import SEO from "../components/seo";

const position = [48.07544, 16.77897]

const Contact = () => {
  return (
    <Layout>
      <SEO title="Kontakt" />

      <div className="min-h-screen mb-6 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-24 font-serif font-hairline">
          <h1 className="text-4xl md:text-5xl text-blue-700">Kontakt</h1>
        </div>
        <div
          className="w-full sm:w-3/4 lg:w-1/2 mt-10 px-6 py-4"
          style={{
            boxShadow:
              "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
          }}
        >
          <p>
            <strong>Telefon: </strong>
            <a
              className="text-blue-700 hover:text-indogo-600 hover:underline"
              href="tel:+436603436936"
            >
              0660 34 36 936
            </a>
          </p>
          <p>
            <strong>Email: </strong>
            manfred.walter@drei.at
          </p>
        </div>
        <div className="w-full">
          <h3 className="mt-10 mb-2 text-2xl">Anfahrt</h3>
          <p>
          Hier finden Sie mich:<br/>
          <br/>
          TV Service Walter<br/>
          Wienerweg 3<br/>
          2465 Höflein<br/>
          0660/3436936<br/>
          service@tv-elektronik-service-walter.at<br/>
          </p>

          {/* <h3 className="mt-10 mb-2 text-2xl">Karte</h3>
          <Map center={position} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}></Marker>
          </Map> */}

          <h3 className="mt-10 mb-2 text-2xl">Mit dem eigenene Fahrzeug</h3>
          <p>Ostautobahn A4 Abfahrt Bruck/West, folgen Sie der Beschilderung Richtung Höflein</p>
        </div>
        <div className="w-full">
          <h3 className="mt-10 mb-2 text-2xl">Geschäftszeiten</h3>
          <p>
            Keine offiziellen Öffnungszeiten aber jederzeit erreichbar!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
