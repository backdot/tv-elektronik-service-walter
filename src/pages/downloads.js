import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Download = ({ title, name, category, children }) => {
  return (
    <div className="w-full sm:w-1/2 -mx-2 flex flex-col items-start">
      <div className="mx-2">
        <h2 className="text-3xl text-gray-800">{title}</h2>
        <p>
          <strong className="mr-2">{name}</strong>
          <span>{category}</span>
        </p>
      </div>
      <div className="w-full mt-6 mx-2">
        <div className="download-description">{children}</div>
      </div>
    </div>
  );
};

const Downloads = ({ data }) => {
  const testimonials = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Testimonials" />
      <div className="min-h-screen pt-24 mb-20 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-16 font-serif font-hairline">
          <h1 className="text-4xl md:text-5xl text-blue-700">Downloads</h1>
        </div>
        <div className="w-full mt-16 flex flex-row flex-wrap justify-between">
          {testimonials.map(({ node }) => {
            const { title, name, category, path } = node.frontmatter;
            const html = node.html;
            return (
              <Download key={path} title={title} name={name} category={category}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </Download>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Downloads {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/downloads/" } }
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

export default Downloads;
