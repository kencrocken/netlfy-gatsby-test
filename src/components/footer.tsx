import * as React from "react";

const IFooter: React.FunctionComponent<{}> = () => {
    const footerStyles = {
        display: "flex",
        flexDirection: "column" as "column",
        fontSize: "0.8rem",
    };
    const umbrellaStyle = {
        alignSelf: "center",
        opacity: 0.3,
        padding: "1rem",
    };

    return (
    <footer style={footerStyles} >
        <div>
            © {new Date().getFullYear()}, ☝ that guy
        </div>
        <div style={umbrellaStyle}>
            {` ☂ `}
        </div>
        {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
    </footer>
    );
};

export default IFooter;
