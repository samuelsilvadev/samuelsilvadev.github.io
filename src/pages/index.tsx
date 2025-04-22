import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { colors } from "../styles/constants";
import { InternalHead } from "../components/internal-head";

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

export const Head: HeadFC = () => <InternalHead titleComplement="Home Page" />;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <StaticImage
        style={profileImageStyles}
        width={100}
        height={100}
        src="../images/profile.jpeg"
        alt="Samuel smiling, wearing sunglasses on a sunny day in Porto"
      />
      <header>
        <h1 style={{ ...headingStyles, animation: "fadeIn 1s ease-out" }}>
          Hello, Welcome 👋
          <br />
          <span style={headingAccentStyles}>
            I'm Samuel — and this is my corner of the internet.
          </span>
        </h1>
      </header>

      <article>
        <p style={paragraphStyles}>
          I'm a Frontend Developer with a passion for building products that
          people love to use. I currently work at{" "}
          <a
            href="https://github.com/amplemarket"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Amplemarket
          </a>
          , where I focus on crafting smooth user experiences with cutting-edge
          tech and strong engineering practices.
        </p>
      </article>

      <section>
        <h2 style={getInTouchHeadingStyles}>Let's Connect</h2>
        <p style={getInTouchParagraphStyles}>
          Got a project in mind? Or just want to say hi? You’ll find me on{" "}
          <a
            href="https://twitter.com/samuelsilvadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          — or feel free to drop me an{" "}
          <a
            href="mailto:samuelsilvawb@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
          .
        </p>
      </section>

      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}
      </style>
    </main>
  );
};

export default IndexPage;
