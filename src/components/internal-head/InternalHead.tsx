import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

type QueryResult = {
  site: { siteMetadata?: { title?: string; description: string } };
};

export const InternalHead = ({
  titleComplement,
}: {
  titleComplement: string;
}) => {
  const { site } = useStaticQuery<QueryResult>(query);

  return (
    <>
      <title>
        {site?.siteMetadata?.title} - {titleComplement}
      </title>
      <meta
        name="description"
        content={site?.siteMetadata?.description ?? ""}
      />
    </>
  );
};
