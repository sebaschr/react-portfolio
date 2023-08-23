import React from "react";
import { getGlobalClasses } from "utils/functions";
import { Text } from "components";
import cx from "classnames";
import styles from "./CategoryBubble.module.scss";
import { CategoryBubblePropTypes } from "components/dialogProps";

const CategoryBubbble = ({
  text,
  backgroundColor,
  className,
}: CategoryBubblePropTypes) => {
  const globalClasses = getGlobalClasses(
    ["backgroundColor"],
    [backgroundColor]
  );

  return (
    <div className={cx(globalClasses, styles.bubble, className)}>
      <Text content={text} className={styles.text} />
    </div>
  );
};

export default CategoryBubbble;
