import React, { useEffect, useState } from "react";
import styles from "./NavHeader.module.scss";
import { Text, Link, Media, Button } from "components";
import { reportWindowSize } from "utils/functions";
import {
  SIZE_LG,
  SIZE_MD,
  BUTTON_TRANSPARENT,
  LINK_TARGET_INTERNAL,
  SIZE_SM,
} from "utils/constants";
import cx from "classnames";

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(reportWindowSize);

  useEffect(() => {
    function checkScreenSize() {
      setIsDesktop(reportWindowSize);
    }

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  });

  const NavList = () => {
    return (
      <ul className={styles["nav-list"]}>
        <li className={styles["nav-item"]}>
          <Link
            target={LINK_TARGET_INTERNAL}
            href="/"
            linkText="Home"
            size={SIZE_SM}
          />
        </li>
        <li className={styles["nav-item"]}>
          <Link
            target={LINK_TARGET_INTERNAL}
            href="/about"
            linkText="About Me"
            size={SIZE_SM}
          />
        </li>
        <li className={styles["nav-item"]}>
          <Link
            target={LINK_TARGET_INTERNAL}
            href="/experience"
            linkText="Experience"
            size={SIZE_SM}
          />
        </li>
        <li className={styles["nav-item"]}>
          <Link
            target={LINK_TARGET_INTERNAL}
            href="/photography"
            linkText="Photography"
            size={SIZE_SM}
          />
        </li>
        <li className={styles["nav-item"]}>
          <Link
            target={LINK_TARGET_INTERNAL}
            href="/contact"
            linkText="Contact"
            size={SIZE_SM}
          />
        </li>
      </ul>
    );
  };

  return (
    <nav
      className={cx(styles.root, {
        [styles["root--open"]]: isOpen && !isDesktop,
      })}
    >
      <div className={styles["nav-container"]}>
        <NavList />
      </div>
    </nav>
  );
};

export default NavHeader;
