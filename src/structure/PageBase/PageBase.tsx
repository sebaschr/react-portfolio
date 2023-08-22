import React, { useEffect } from "react";
import { Container, Heading, NavHeader } from "components";
import styles from "./PageBase.module.scss";
import { onlyChildren } from "components/dialogProps/sharedProps";

type PageBasePropTypes = {
  headingText: string;
  title: string;
};

const PageBase = ({
  children,
  headingText,
  title,
}: onlyChildren & PageBasePropTypes) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <>
      <NavHeader />
      <Container isFullWidth className={styles["main-container"]}>
        <div className={styles.root}>
          <Heading
            content={headingText}
            headingStyle="h1"
            className={styles.heading}
          />
          {children}
        </div>
      </Container>
    </>
  );
};

export default PageBase;
