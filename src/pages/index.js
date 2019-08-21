import React from "react";
import { Link, graphql } from "gatsby";
import cx from "classnames";
import Helmet from "react-helmet";

import home from "../images/undraw_taking_notes_tjaf.svg";
import branding from "../images/noun_branding_1885335.svg";
import processing from "../images/noun_The Process_1885341.svg";
import modeling from "../images/noun_3d modeling_1885342.svg";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Testimonial from "../components/testimonial";

const StyledButton = ({ className, children, ...props }) => {
  className = cx(
    "py-2 px-4 bg-blue-700 hover:bg-blue-600 text-base text-white font-bold uppercase rounded shadow-md hover:-translate-1",
    className
  );
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

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

function Index({ data }) {
  const services = data.services.edges;
  const testimonials = data.testimonials.edges;

  return (
    <Layout headerClass="relative bg-white">
      <SEO title="Home" />
      <div
        className="min-h-screen pt-24 sm:pt-32 md:pt-64 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 mb-20 bg-size-5/6 md:bg-size-4/5 lg:bg-size-2/3 bg-right-top bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div className="w-4/5 md:w-3/4 lg:w-7/12 mt-20 font-serif font-hairline self-start">
          <h1 className="text-3xl md:text-6xl text-blue-700 leading-tight">
            TV Service Walter
          </h1>
          <p className="text-2xl">
            Reparatur von Fernseher, SAT-Anlagen, Kaffeemaschinen und EDV
          </p>
        </div>

        <div className="container w-3/4 sm:w-7/12 lg:w-7/12 xl:1/4 mt-10 self-start">
          <div
            className="bg-white rounded flex flex-col sm:flex-row items-start sm:items-center text-sm p-4"
            style={{
              boxShadow:
                "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
            }}
          >
            <div className="flex-1">
              <p>
                <strong>Telefon: </strong>
                <a
                  className="hover:text-indogo-600 hover:underline"
                  href="tel:+436603436936"
                >
                  0660 34 36 936
                </a>
              </p>
              <p>
                <strong>Email: </strong>
                <a
                  className="hover:text-indogo-600 hover:underline"
                  href="mailto:manfred.walter@drei.at"
                >
                  manfred.walter@drei.at
                </a>
              </p>
            </div>
            <div className="flex-initial mt-6 sm:mt-0">
              <Link to="/contact">
                <StyledButton>Termin vereinbaren</StyledButton>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-20">
          <p className="mb-2 text-4xl text-gray-800 self-center">
            Unsere Leistungen
          </p>

          <div className="flex flex-wrap">
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

          <div className="self-center mt-8">
            <Link to="/services">
              <StyledButton>Alle Leistungen anzeigen</StyledButton>
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-20">
          <p className="mb-2 text-4xl text-gray-800 self-center">
            Ihre Vorteile
          </p>

          <div className="flex flex-wrap justify-center items-stretch -mx-2">
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="branding" src={branding} />
                </div>
                <p className="text-2xl w-full">Eingehende Beratung</p>
                <p>Als Kunde werden Sie über alle fachlichen Schritte aufgeklärt.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="processing" src={processing} />
                </div>
                <p className="text-2xl w-full">Präzises Handwerk</p>
                <p>Auf diese Qualität können Sie sich verlassen.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={modeling} />
                </div>
                <p className="text-2xl w-full">Einschlägige Erfahrung</p>
                <p>Sie profitieren von jahrelanger Praxis.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-20">
          <p className="mb-2 text-4xl text-gray-800 self-center">
            Empfehlungen
          </p>

          <div className="w-full mt-2 flex flex-row flex-wrap justify-between">
            {testimonials.map(({ node }) => {
              const { title, name, jobtitle, path } = node.frontmatter;
              const html = node.html;
              return (
                <Testimonial key={path} title={title} name={name} jobTitle={jobtitle}>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </Testimonial>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    services: allMarkdownRemark(
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
    testimonials: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/testimonials/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            name
            jobtitle
          }
          html
        }
      }
    }
  }
`;

export default Index;
