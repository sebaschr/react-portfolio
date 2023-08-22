import React from "react";
import { Text, Media, Heading, Card } from "components";
import { PageBase } from "structure";
import styles from "./AboutPage.module.scss";
import { SIZE_XL } from "utils/constants";
import { onlyChildren } from "components/dialogProps/sharedProps";
import cx from "classnames";

type RepeatComponentPropTypes = {
  cycles: number;
};

const RepeatComponent = ({
  cycles,
  children,
}: RepeatComponentPropTypes & onlyChildren) => {
  var elements = [];

  for (let i = 0; i < cycles; i++) {
    elements.push(<div key={i}>{children}</div>);
  }
  return elements;
};

const AboutPage = () => {
  return (
    <PageBase headingText="About Me" title="About Me">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["container--left"]}>
            <RepeatComponent cycles={3}>
              <Heading content={"Hi my name is Seb"} headingStyle="h4" />
            </RepeatComponent>
          </div>

          <div className={styles["container--right"]}>
            <Text
              content={`SINCE STARTING MY DEVELOPMENT JOURNEY I'VE FALLED IN LOVE WITH BUILDING THE MOST BEAUTIFUL AND UNIQUE WEBSITES. I AM CURRENTLY PASSIONATE ABOUT BUILDING NOT ONLY EYE-CATCHING, BUT USEFUL WEBSITES WITHOUT FORGETTING THE IMPORTANCE OF ACCESIBILITY. `}
              size={SIZE_XL}
            />

            <Text
              content={`IN A MORE PERSONAL LEVEL, MY CURRENT HOBBIES ARE LONGBOARDING, PHOTOGRAPHY, FASHION  AND VIDEO EDITING. `}
              size={SIZE_XL}
            />

            <Text
              content={`CURRENTLY WORKING ON MY OWN CLOTHING BRAND AND AN INNOVATION COMMERCE. I HOPE TO DEVELOP THE WEBSITES MYSELF ( WITH THE HELP FROM SOME FRIENDS ), WHILE TAKING NEW CHALLENGES BE IT AS A FREELANCER OR AS A WORKER IN A COMPANY. `}
              size={SIZE_XL}
            />
          </div>
        </div>
        <div className={styles["media-container"]}>
          <Media
            src="https://i.imgur.com/M7Z06VG.jpg"
            className={cx(styles.image)}
          />
          <Media
            src="https://i.imgur.com/M7Z06VG.jpg"
            className={cx(styles["image--center"])}
          />
          <Media
            src="https://i.imgur.com/M7Z06VG.jpg"
            className={cx(styles["image--bottom"])}
          />
        </div>
      </div>
    </PageBase>
  );
};

export default AboutPage;