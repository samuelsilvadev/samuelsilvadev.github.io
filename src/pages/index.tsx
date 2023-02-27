import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { colors } from "../styles/constants";

const pageStyles = {
  color: colors.primary,
  padding: 48,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 44,
  maxWidth: 576,
};
const headingAccentStyles = {
  color: colors.accent,
};
const paragraphStyles = {
  marginTop: 0,
  marginBottom: 48,
  maxWidth: 576,
  fontSize: 22,
  fontStyle: "italic",
};
const profileImageStyles = {
  width: 100,
  height: 100,
  borderRadius: "50%",
  marginBottom: 24,
  border: `4px solid ${colors.accent}`,
};
const getInTouchHeadingStyles = {
  ...headingStyles,
  marginBottom: 24,
};
const getInTouchParagraphStyles = {
  ...paragraphStyles,
  margin: 0,
  fontStyle: "normal",
};

export const Head: HeadFC = () => <title>Samuel Silva - Home Page</title>;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <StaticImage
        style={profileImageStyles}
        width={100}
        height={100}
        src="../images/profile.jpeg"
        alt="Samuel's picture, with sunglasses and on a sunny day on Porto"
      />
      <h1 style={headingStyles}>
        Hello, Welcome 👋
        <br />
        <span style={headingAccentStyles}>
          — My name is Samuel, and you just reached my personal website.
        </span>
      </h1>
      <p style={paragraphStyles}>
        I'm a Frontend developer, who is passionate about building great
        products. I'm currently working at{" "}
        <a
          href="https://github.com/carlsberg"
          target="_blank"
          rel="noopener noreferrer"
        >
          @carlsberg
        </a>
        , using tons of cool technology and best practices to deliver the best
        experience possible to our users.
      </p>
      <section>
        <h2 style={getInTouchHeadingStyles}>Get in touch</h2>
        <p style={getInTouchParagraphStyles}>
          If you have any ideas or just want to catch-up, you can find me on{" "}
          <a
            href="https://twitter.com/samuelsilvadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          , of even via{" "}
          <a
            href="mailto:samuelsilvawb@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
        </p>
      </section>
    </main>
  );
};

export default IndexPage;
