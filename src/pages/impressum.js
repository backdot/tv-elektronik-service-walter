import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Impressum = () => {
  return (
    <Layout>
      <SEO title="Impressum" />
      <div className="min-h-screen pt-24 mb-20 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-16 font-serif font-hairline">
          <h1 className="text-4xl md:text-5xl text-blue-700">Impressum</h1>
        </div>
        <div className="w-full mt-16 flex flex-row flex-wrap justify-between">
          Für den Inhalt verantwortlich:<br/>
          Manfred Walter<br/>
          <br/>
          Firmensitz/ Adresse<br/>
          2465 Höflein<br/>
          Wienerweg 3<br/>
        </div>
      </div>
    </Layout>
  );
};

export default Impressum;
