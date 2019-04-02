import { graphql, Link } from "gatsby";
import * as React from "react";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

interface INode {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    title: string;
    description: string;
  };
}

interface IIndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      },
    }
    allMarkdownRemark: {
      edges: [{
        node: INode,
      }],
    },
  };
  location: any;
}

class BlogIndex extends React.Component<IIndexPageProps, {}> {
  public render() {
    const { data, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    const postItem = (node: INode) => (
      <div key={node.fields.slug}>
        <h3
          style={{  marginBottom: rhythm(1 / 4) }}
        >
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {node.frontmatter.title || node.fields.slug}
          </Link>
        </h3>
        <small>{node.frontmatter.date}</small>
        <p
          dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }}
        />
      </div>
    );

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title="All posts"
          description="Blog index page"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map(({ node }) => postItem(node))}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
