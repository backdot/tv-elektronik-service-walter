import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Testimonial from "../components/testimonial";

const Testimonials = ({ data }) => {
  const testimonials = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Testimonials" />
      <div className="min-h-screen pt-24 mb-20 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-16 font-serif font-hairline">
          <h1 className="text-4xl md:text-5xl text-blue-700">Empfehlungen</h1>
        </div>
        <div className="w-full mt-16 flex flex-row flex-wrap justify-between">
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
    </Layout>
  );
};

export const query = graphql`
  query Testimonials {
    allMarkdownRemark(
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

export default Testimonials;
