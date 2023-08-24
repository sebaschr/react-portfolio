import React, { useEffect, useState } from "react";
import styles from "./NavHeader.module.scss";
import { Link, Button } from "components";
import { reportWindowSize } from "utils/functions";
import { LINK_TARGET_INTERNAL, SIZE_SM, SIZE_XL } from "utils/constants";
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
            size={isDesktop ? SIZE_SM : SIZE_XL}
          />
        </li>
        <li className={styles["nav-item"]}>
          <Link
            target={LINK_TARGET_INTERNAL}
            href="/about"
            linkText="About Me"
            size={isDesktop ? SIZE_SM : SIZE_XL}
          />
        </li>
        <li className={styles["nav-item"]}>
          <Link
            target={LINK_TARGET_INTERNAL}
            href="/experience"
            linkText="Experience"
            size={isDesktop ? SIZE_SM : SIZE_XL}
          />
        </li>
        <li className={styles["nav-item"]}>
          <Link
            target={LINK_TARGET_INTERNAL}
            href="/photography"
            linkText="Photography"
            size={isDesktop ? SIZE_SM : SIZE_XL}
          />
        </li>
        <li className={styles["nav-item"]}>
          <Link
            target={LINK_TARGET_INTERNAL}
            href="/contact"
            linkText="Contact"
            size={isDesktop ? SIZE_SM : SIZE_XL}
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
      {isDesktop ? (
        <div className={styles["nav-container"]}>
          <NavList />
        </div>
      ) : (
        <div className={styles["mobile-container"]}>
          <div className={styles["nav-container"]}>
            <Button
              className={cx(styles["nav-mobile-item"])}
              variant="link"
              linkText={isOpen ? "x" : "< home"}
              size={SIZE_SM}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              altText={isOpen ? "Close Menu" : "Open Menu"}
            />
          </div>

          <div
            className={cx(styles["mobile-menu"], {
              [styles["mobile-menu--visible"]]: isOpen,
            })}
          >
            <NavList />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavHeader;
