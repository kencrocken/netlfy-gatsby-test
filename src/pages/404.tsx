import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

interface INotFoundPage {
  data: {
    site: {
      siteMetadata: {
        title: string,
      },
    },
  };
  location: any;
}

class NotFoundPage extends React.PureComponent<INotFoundPage, {}> {
  public render() {
    const { data, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout
        location={location}
        title={siteTitle}
      >
        <SEO description="Not found error page" title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist ... the sadness.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
