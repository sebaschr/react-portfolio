import React from "react";
import { SIZE_LG, SIZE_SM, COLOR_BLACK } from "utils/constants";
import styles from "./Link.module.scss";
import { Text, Icon } from "components";
import { LinkPropTypes } from "components/dialogProps";
import cx from "classnames";

const Link = ({
  href,
  linkText,
  children,
  target,
  size = SIZE_LG,
  iconSize = SIZE_SM,
  iconName,
  className,
  color = COLOR_BLACK,
}: LinkPropTypes) => {
  const noText: boolean = children !== null || linkText != null;

  if (!href.includes("http")) {
    href = process.env.REACT_APP_HOME_PAGE + "/#" + href;
  }

  return (
    <a className={cx(styles.root, className)} href={href} target={target}>
      {noText && children
        ? children
        : noText && <Text content={linkText} size={size} color={color} />}
      {iconName && <Icon name={iconName} size={iconSize} />}
    </a>
  );
};

export default Link;
