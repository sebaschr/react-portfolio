import React from "react";
import styles from "./Footer.module.scss";
import { Text, Button, Link, Spacer } from "components";
import { socials } from "services/data";
import {
  SOCIALS_ICONS,
  SIZE_MD,
  BUTTON_TRANSPARENT,
  BUTTON_TRANSPARENT_WHITE,
  LINK_TARGET_EXTERNAL,
  COLOR_WHITE,
  SIZE_SM,
} from "utils/constants";
import FooterColumn from "./FooterColumn/FooterColumn";

const NavHeader = () => {
  function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const Socials = () => {
    return (
      <div className={styles.socials}>
        {socials &&
          socials.map((social, index) => {
            return (
              <Button
                key={index}
                className={styles.social}
                variant={BUTTON_TRANSPARENT}
                iconName={SOCIALS_ICONS[social.name]}
                iconSize={SIZE_MD}
                label={social.name}
              />
            );
          })}
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles["bottom-container"]}>
          <Text content={"Copyright Lorem Ipsum"} size={SIZE_SM} />
          <Socials />
        </div>
        <Button
          variant={BUTTON_TRANSPARENT_WHITE}
          iconName="arrow-up"
          iconSize={SIZE_MD}
          className={styles["back-to-top"]}
          label="Back to Top"
          onClick={topFunction}
        />
      </div>
    </div>
  );
};

export default NavHeader;
