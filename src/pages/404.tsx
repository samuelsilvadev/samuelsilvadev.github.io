import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { colors } from "../styles/constants";
import { InternalHead } from "../components/internal-head";
import Layout from "../components/Layout";

const pageStyles = {
  color: colors.primary,
  backgroundColor: "#f4f4f4",
  padding: "4rem",
  fontFamily: "Courier New, monospace",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "flex-start",
  border: "4px solid black",
  boxShadow: "8px 8px 0 black",
  maxWidth: 600,
  margin: "4rem auto",
};

const headingStyles = {
  fontSize: "3rem",
  margin: 0,
  borderBottom: "4px solid black",
  paddingBottom: "1rem",
  marginBottom: "2rem",
};

const paragraphStyles = {
  fontSize: "1.2rem",
  marginBottom: "2rem",
};

const linkStyles = {
  fontWeight: "bold",
  textDecoration: "none",
  padding: "0.5rem 1rem",
  border: "2px solid black",
  backgroundColor: "#fff",
  color: "#000",
  boxShadow: "4px 4px 0 black",
};

export const Head: HeadFC = () => (
  <InternalHead titleComplement="Page not found" />
);

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>404 — Not Found</h1>
        <p style={paragraphStyles}>
          This page took a detour. Or maybe it never existed.
          <br />
          Either way, you’ve hit a dead end.
        </p>
        <Link to="/" style={linkStyles}>
          ← Take me home
        </Link>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
