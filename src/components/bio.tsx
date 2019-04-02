/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import { graphql, StaticQuery } from "gatsby";
import * as React from "react";

import Image from "gatsby-image";

import { rhythm } from "../utils/typography";
import PostFooter from "./postFooter";

interface IFixedObject {
    width: number;
    height: number;
    src: string;
    srcSet: string;
}
interface IBioProps {
    data: {
        avatar: {
            childImageSharp: {
                fixed: IFixedObject,
            };
        },
        site: {
            siteMetadata: {
                author: string;
                social: {
                    twitter: string;
                }
            };
        };
    };
}

const Bio = () => {
    return (
        <StaticQuery
            query={bioQuery}
            // tslint:disable-next-line: jsx-no-lambda
            render={(data: IBioProps) => <PostFooter {...data} />}
        />
    );
};

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
                social {
                    twitter
                }
            }
        }
    }
`;

export default Bio;
