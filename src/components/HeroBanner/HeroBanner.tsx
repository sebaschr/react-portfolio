import React from "react";
import styles from "./HeroBanner.module.scss";
import { Media, Text, Heading, Button } from "components";
import {
  SIZE_XL,
  ALIGNMENT_CENTER,
  LINK_TARGET_INTERNAL,
  BUTTON_PRIMARY,
  BUTTON_SECONDARY,
  BOOLEAN_FALSE,
  COLOR_BLACK,
} from "utils/constants";
import cx from "classnames";
import { HeroBannerPropTypes } from "components/dialogProps";
import { getGlobalClasses } from "utils/functions";

const HeroBanner = ({
  className,
  heading,
  text,
  alignment = ALIGNMENT_CENTER,
  imageSrc,
  imageAlt,
  backgroundImageSrc,
  backgroundColor,
  primaryBtnHref,
  primaryBtnTarget = LINK_TARGET_INTERNAL,
  primaryBtnText,
  secondaryBtnHref,
  secondaryBtnTarget = LINK_TARGET_INTERNAL,
  secondaryBtnText,
  imageFirst = BOOLEAN_FALSE,
  hideOnMobile = BOOLEAN_FALSE,
  textColor = COLOR_BLACK,
}: HeroBannerPropTypes) => {
  const globalClasses = getGlobalClasses(
    ["backgroundColor"],
    [backgroundColor]
  );

  const validBtn =
    (primaryBtnHref && primaryBtnText) ||
    (secondaryBtnHref && secondaryBtnText);

  return (
    <div className={cx(styles.root, className)}>
      {backgroundImageSrc && (
        <Media
          isBackground
          src={backgroundImageSrc}
          className={styles.background}
        />
      )}

      <div
        className={cx(styles.background, styles["background--filter"], {
          [globalClasses]: backgroundColor && !backgroundImageSrc,
          [styles[`filter--${backgroundColor}`]]:
            backgroundColor && backgroundImageSrc,
        })}
      />

      <div className={styles["container--full"]}>
        <div className={styles.container}>
          <Heading
            content={heading}
            className={styles.title}
            alignment={alignment}
            color={textColor}
          />
          <Text
            content={text}
            size={SIZE_XL}
            alignment={alignment}
            color={textColor}
          />

          {validBtn && (
            <div
              className={cx(
                styles["button-container"],
                styles[`button-container--${alignment}`]
              )}
            >
              {primaryBtnText && primaryBtnTarget && (
                <Button
                  className={styles.button}
                  variant={BUTTON_PRIMARY}
                  linkText={primaryBtnText}
                  href={primaryBtnHref}
                  size="xl"
                />
              )}
              {secondaryBtnText && secondaryBtnTarget && (
                <Button
                  className={styles.button}
                  variant={BUTTON_SECONDARY}
                  linkText={secondaryBtnText}
                  href={secondaryBtnHref}
                  size="xl"
                />
              )}
            </div>
          )}
        </div>

        {imageSrc && (
          <Media
            src={imageSrc}
            altText={imageAlt}
            className={cx(styles.image, {
              [styles["image--left"]]: imageFirst,
              [styles["image--hidden"]]: hideOnMobile,
            })}
          />
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
