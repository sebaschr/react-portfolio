import React, { useEffect } from "react";
import { Container, Heading, NavHeader, Spacer } from "components";
import styles from "./PageBase.module.scss";
import { classNameandChildren } from "components/dialogProps/sharedProps";
import cx from "classnames";

type PageBasePropTypes = {
  headingText: string;
  title: string;
};

const PageBase = ({
  children,
  headingText,
  title,
  className,
}: classNameandChildren & PageBasePropTypes) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <>
      <Container isFullWidth className={styles["main-container"]}>
        <NavHeader />

        <div className={cx(styles.container, styles["heading-container"])}>
          <Heading
            content={headingText}
            headingStyle="h1"
            className={styles.heading}
          />
          <Spacer className={styles.spacer} />
          {children}
        </div>
      </Container>
    </>
  );
};

export default PageBase;
