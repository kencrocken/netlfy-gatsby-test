import * as React from "react";

import Image from "gatsby-image";
import { rhythm } from "../utils/typography";

interface IFixedObject {
    height: number;
    src: string;
    srcSet: string;
    width: number;
}

interface IPostFooterProps {
    avatar: {
        childImageSharp: {
            fixed: IFixedObject,
        };
    };
    site: {
        siteMetadata: {
            author: string,
            social: {
                twitter: string,
            };
        };
    };
}

const DEFAULT_PROPS = {
    avatar: {
        childImageSharp: {
            fixed: {
                height: 0,
                src: "",
                srcSet: "",
                width: 0,
            },
        },
    },
    site: {
        siteMetadata: {
            author: "",
            social: {twitter: ""},
        },
    },
};

const PostFooter: React.FunctionComponent<IPostFooterProps> = ({avatar, site}) => {
    const { author, social } = site.siteMetadata;
    const footerStyles = {
        alignItems: `center`,
        display: `flex`,
        marginBottom: rhythm(2.5),
    };
    const imageStyles = {
        borderRadius: `100%`,
        marginBottom: 0,
        marginRight: rhythm(1 / 2),
        minWidth: 50,
        opacity: 0.8,
    };

    return (
        <div style={footerStyles}>
            <Image
                alt={author}
                fixed={avatar.childImageSharp.fixed}
                imgStyle={{ borderRadius: `50%` }}
                style={imageStyles}
            />
            <p style={{ margin: 0 }}>
                Written by <strong>{author}</strong> who lives and works in the
                Baltimore/DC Metro area building useful things.
                {` `}
                <a href={`https://twitter.com/${social.twitter}`}>
                    You should follow him on Twitter
        </a>
            </p>
        </div>
    );
};

export default PostFooter;
