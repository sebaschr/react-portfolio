import React from "react";
import { BOOLEAN_FALSE } from "utils/constants";
import styles from "./Container.module.scss";
import cx from "classnames";
import { ContainerPropTypes } from "components/dialogProps";

const Container = ({
  isFullWidth = BOOLEAN_FALSE,
  isFlexbox = BOOLEAN_FALSE,
  isWrapped = BOOLEAN_FALSE,
  children,
  className,
}: ContainerPropTypes) => {
  return (
    <div
      className={cx(
        styles.root,
        {
          [styles.full]: isFullWidth,
          [styles.flex]: isFlexbox,
          [styles.wrap]: isFlexbox && isWrapped,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
