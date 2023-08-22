import React from "react";
import styles from "./Heading.module.scss";
import cx from "classnames";
import { HeadingPropTypes } from "components/dialogProps";
import { getGlobalClasses } from "utils/functions";
import { ALIGNMENT_LEFT } from "utils/constants";

const Heading = ({
  content,
  headingStyle,
  className,
  alignment = ALIGNMENT_LEFT,
  color,
}: HeadingPropTypes) => {
  const globalClasses = getGlobalClasses(
    ["alignment", "color"],
    [alignment, color]
  );

  return (
    <div
      className={cx(
        globalClasses,
        styles.root,
        styles[`style--${headingStyle}`],
        className
      )}
    >
      {content}
    </div>
  );
};

export default Heading;
