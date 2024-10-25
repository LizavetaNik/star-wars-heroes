import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/AppLink.module.scss";

interface LinkProps {
  to: string;
  children?: React.ReactNode;
}

export const AppLink: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <Link to={to} className={styles.appLinkStyle}>
      {children}
    </Link>
  );
};
