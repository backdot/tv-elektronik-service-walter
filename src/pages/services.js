import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import service_img from "../images/undraw_businesswoman_pc12.svg";
import SEO from "../components/seo";

const Service = ({ title, url, children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
      <Link
        to={url}
        className="text-2xl text-blue-700 hover:text-indogo-600 hover:underline"
      >
        {title}
      </Link>
      <p>{children}</p>
    </div>
  );
};

const Services = ({ data }) => {
  const services = data.allMarkdownRemark.edges;

  return (
    <Layout headerClass="bg-white relative">
      <SEO title="Services" />

      <div
        className="min-h-screen pt-24 sm:pt-32 md:pt-64 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 mb-20 bg-size-5/6 md:bg-size-4/5 lg:bg-size-2/3 bg-right-top bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${service_img})` }}
      >
        <div className="container w-3/4 md:w-1/2 mt-20 font-serif font-hairline self-start">
          <h1 className="text-4xl md:text-5xl text-blue-700">
            Unsere Leistungen
          </h1>

          <h2 className="text-2xl md:text-2xl">Ihr Ansprechpartner rund um die Elektronik</h2>
          <p>Elekronik Service Walter ist Ihr kompetenter Partner rund um alle Fragen der Unterhaltungselektronik.
          Kaufberatung bezüglich Größe und Technologie (LED, LCD,Plasma,3D) Ihres neuen TV Gerätes.
          Benötigen Sie ein neues Empfangsgerät (Receiver) dazu?
          Ist meine Satellitenanlage dafür tauglich?
          <br/><br/>
          Aber auch wenn Sie ein defektes Haushaltsgerät haben können Sie sich an mich wenden.
          <br/><br/>
          Meine Stärken liegen in der Kundenorientierung, einem engagierten Service und der Vielseitigkeit des Leistungsspektrums.
          Aufgrund der komprimierten Firmenstruktur kann ich Ihnen attraktive Preise bei ausgezeichneter Qualität bieten.</p>
        </div>

        <div className="flex flex-wrap mt-10 md:mt-20">
          {services.map(({ node }) => (
            <Service
              title={node.frontmatter.title}
              url={node.frontmatter.path}
              key={node.frontmatter.path}
            >
              {node.excerpt}
            </Service>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ServicesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default Services;
