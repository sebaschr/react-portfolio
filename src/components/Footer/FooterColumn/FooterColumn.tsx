import React from "react";
import styles from "./FooterColumn.module.scss";
import { Heading } from "components";
import { FooterColumnPropTypes } from "components/dialogProps";
import { COLOR_WHITE } from "utils/constants";

const FooterColumn = ({ children, heading }: FooterColumnPropTypes) => {
  return (
    <div className={styles.root}>
      <Heading
        content={heading}
        className={styles.heading}
        color={COLOR_WHITE}
      />
      {children}
    </div>
  );
};

export default FooterColumn;
