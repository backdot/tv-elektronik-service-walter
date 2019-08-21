import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Preise = ({ data }) => {
  const prices = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Preise" />
      <div className="min-h-screen pt-24 mb-20 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-16 font-serif font-hairline">
          <h1 className="text-4xl md:text-5xl text-blue-700">Preise</h1>
        </div>
        <div className="w-full mt-16 flex flex-row flex-wrap justify-between">
          {/* {prices.map(({ node }) => {
            const { title, name, category, path } = node.frontmatter;
            const html = node.html;
            return (
              <Download key={path} title={title} name={name} category={category}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </Download>
            );
          })} */}

          <table>
          <tr>
            <td style={{ minWidth: "350px" }}>Arbeitszeit</td>
            <td>6€ / AE ________ 10 AE = 1 Std.</td>
          </tr>
          <tr>
            <td>Kostenvoranschlag</td>
            <td>25€ (wird bei Auftragserteilung gutgeschrieben)</td>
          </tr>
          <tr>
            <td>Anfahrt bis 25Km inkl. 1 Std.</td>
            <td>90€</td>
          </tr>
          <tr>
            <td>Anfahrt über 25Km inkl. 1 Std.</td>
            <td>102€</td>
          </tr>
          <tr>
            <td>Abhohlung und Zustellung bis 25km</td>
            <td>45€</td>
          </tr>
          <tr>
            <td>Abhohlung und Zustellung über 25km</td>
            <td>63€</td>
          </tr>
          </table>
          <br/><br/>
          alle Preise inkl. MwSt.
          <br/><br/>
          Prinzipiell gilt bei Reparaturen folgende Richtlinie:<br/>
          Die Kosten der Reparatur sollten den Zeit bzw. Wiederbeschaffungswert nicht übersteigen
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Preise {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/prices/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            name
            category
          }
          html
        }
      }
    }
  }
`;

export default Preise;
