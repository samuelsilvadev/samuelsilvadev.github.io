import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { colors } from "../styles/constants";
import { InternalHead } from "../components/internal-head";

const pageStyles = {
  color: colors.primary,
  padding: 48,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const paragraphStyles = {
  marginBottom: 48,
};

export const Head: HeadFC = () => (
  <InternalHead titleComplement="Page not found" />
);

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
      </p>
      <Link to="/">Go home</Link>.
    </main>
  );
};

export default NotFoundPage;
