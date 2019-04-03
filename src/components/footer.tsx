import * as React from "react";

const Footer: React.FunctionComponent<{}> = () => {
    const footerStyles = {
        alignItems: "center",
        display: "flex",
        flexDirection: "column" as "column",
        fontSize: "0.8rem",
    };
    const umbrellaStyle = {
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
    </footer>
    );
};

export default Footer;
