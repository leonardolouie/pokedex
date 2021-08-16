import React from "react";
import SiteHelmet from "./siteHelmet";

interface Props {
    children: React.ReactNode,
    title?: string;
    name?: string;
}
const Layout: React.FC<Props> = ({ children, title, name }) => {
    return (
        <>
            <SiteHelmet title={title} name={name} />
            {children}
        </>
    );
};

export default Layout;
