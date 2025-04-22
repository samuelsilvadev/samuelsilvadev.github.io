import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { InternalHead } from "../components/internal-head";
import Layout from "../components/Layout";

const wrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "calc(100vh - 4rem)",
  padding: "2rem",
  margin: "0",
};

const pageStyles = {
  fontFamily: "Courier New, monospace",
  backgroundColor: "#f4f4f4",
  color: "#000",
  border: "4px solid black",
  maxWidth: "720px",
  padding: "2rem",
  boxShadow: "8px 8px 0px #000",
};

const headingStyles = {
  fontSize: "2.5rem",
  marginBottom: "1rem",
  fontWeight: "900",
  textTransform: "uppercase" as const,
  borderBottom: "4px solid black",
  display: "inline-block",
  paddingBottom: "0.5rem",
};

const headingAccentStyles = {
  display: "block",
  fontSize: "1rem",
  fontStyle: "italic",
  marginTop: "0.5rem",
  color: "#555",
};

const paragraphStyles = {
  fontSize: "1.1rem",
  lineHeight: "1.6",
  backgroundColor: "#fff",
  padding: "1rem",
  border: "2px dashed black",
  marginTop: "1rem",
  marginBottom: "1rem",
};

const getInTouchHeadingStyles = {
  ...headingStyles,
  fontSize: "1.5rem",
  marginTop: "2rem",
};

const getInTouchParagraphStyles = {
  ...paragraphStyles,
  backgroundColor: "#e8e8e8",
};

const profileImageStyles = {
  border: "4px solid black",
  padding: "4px",
  backgroundColor: "#fff",
  boxShadow: "4px 4px 0px #000",
  marginBottom: "1rem",
};

export const Head: HeadFC = () => <InternalHead titleComplement="Home Page" />;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={wrapper}>
        <main style={pageStyles}>
          <StaticImage
            style={profileImageStyles}
            width={100}
            height={100}
            src="../images/profile.jpeg"
            alt="Samuel smiling, wearing sunglasses on a sunny day in Porto"
          />
          <header>
            <h1 style={headingStyles}>
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
              , where I focus on crafting smooth user experiences with
              cutting-edge tech and strong engineering practices.
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
        </main>
      </div>
    </Layout>
  );
};

export default IndexPage;
