import React from "react";
import * as classNames from "./styles.css";
import { PageProps } from "gatsby";

const PostLayout: React.FC<PageProps> = ({ children }) => {
  return <main className={classNames.wrapper}>{children}</main>;
};

export default PostLayout;
