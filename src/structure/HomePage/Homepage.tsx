import React from "react";
import { Heading, Link, Media } from "components";
import { PageBase } from "structure";
import styles from "./Homepage.module.scss";
import { COLOR_BLACK, LINK_TARGET_INTERNAL } from "utils/constants";
import { onlyChildren } from "components/dialogProps/sharedProps";

type SectionImagePropTypes = {
  linkHref: string;
  imageSrc: string;
};

const SectionImage = ({
  linkHref,
  imageSrc,
  children,
}: SectionImagePropTypes & onlyChildren) => {
  return (
    <Link
      href={linkHref}
      target={LINK_TARGET_INTERNAL}
      className={styles.column}
    >
      <Media src={imageSrc} isBackground />
      {children}
    </Link>
  );
};

const HomePage = () => {
  return (
    <PageBase
      headingText="Seb Chacon"
      title="Seb Chacon"
      noSpacer
      className={styles["parent-container"]}
    >
      <div className={styles["column-container"]}>
        <SectionImage
          linkHref="/about"
          imageSrc="https://i.imgur.com/DOdqEsB.jpg"
        >
          <Heading
            content="About Me"
            color={COLOR_BLACK}
            headingStyle="h5"
            className={styles.subtitle}
          />
        </SectionImage>
        <SectionImage
          linkHref="/experience"
          imageSrc="https://i.imgur.com/9fpREtZ.jpg"
        >
          <Heading
            content="Experience"
            color={COLOR_BLACK}
            headingStyle="h5"
            className={styles.subtitle}
          />
        </SectionImage>
        <SectionImage
          linkHref="/photography"
          imageSrc="https://i.imgur.com/EFGjnaG.jpg"
        >
          <Heading
            content="Photography"
            color={COLOR_BLACK}
            headingStyle="h5"
            className={styles.subtitle}
          />
        </SectionImage>
        <SectionImage
          linkHref="/contact"
          imageSrc="https://i.imgur.com/M7Z06VG.jpg"
        >
          <Heading
            content="Contact"
            color={COLOR_BLACK}
            headingStyle="h5"
            className={styles.subtitle}
          />
        </SectionImage>
      </div>
    </PageBase>
  );
};

export default HomePage;
