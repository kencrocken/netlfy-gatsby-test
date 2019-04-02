import React from "react"
import { Link } from "gatsby"

import Footer from './footer';
import { rhythm, scale } from "../utils/typography"


class Layout extends React.Component {
    render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const headingStyles = {
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
    }
    const linkStyles = {
        boxShadow: `none`,
        textDecoration: `none`,
        color: `inherit`,
    }

    const header =
        location.pathname === rootPath ? (
        <h1 style={headingStyles}>
            <Link style={linkStyles} to={`/`}>
            {title}
            </Link>
        </h1>
        ) : (
        <h3
            style={{
            marginTop: 0,
            }}
        >
            <Link
            style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
            }}
            to={`/`}
            >
            {title}
            </Link>
        </h3>
        )

    return (
        <div
        style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            positon: "relatve",
        }}
        >
        <header>{header}</header>
        <main>{children}</main>
        <Footer />
        </div>
    )
    }
}

export default Layout
