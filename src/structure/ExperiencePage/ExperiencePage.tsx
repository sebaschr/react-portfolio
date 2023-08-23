import React from "react";
import { Heading, Text, CategoryBubble } from "components";
import { PageBase } from "structure";
import styles from "./Experience.module.scss";
import { COLOR_CYAN, COLOR_GREY, SIZE_LG } from "utils/constants";
import { formatDate } from "utils/functions";
import { getSkillById } from "services/data";

import { work_experiences } from "services/data";

const ExperiencePage = () => {
  const renderBubbles = (bubbles: number[]) => {
    return (
      <div className={styles.skills}>
        {bubbles.map((i) => (
          <CategoryBubble text={getSkillById(i)} backgroundColor={COLOR_CYAN} />
        ))}
      </div>
    );
  };
  return (
    <PageBase headingText="Experience" title="Experience">
      <div className={styles.container}>
        <div className={styles.introduction}>
          <Text
            content={
              "Here's my experience in some jobs that I've had. I think the combination of both my customer service and software jobs makes me a person that's not only focused on results and problem-solving but also someone that cares about interactions with other people and it's always eager to help and learn from others."
            }
            size={SIZE_LG}
            className={styles["intro-text"]}
          />
          <Text
            content={
              "For some people the Customer Service jobs might be irrelevant but I think they molded me into knowing all types of peoples and navigation through different problems in several perspectives outside of my bubble."
            }
            size={SIZE_LG}
            className={styles["intro-text"]}
          />
          <Text
            content={
              "In my software jobs, I've learnt to work in different environments and projects with changing variables. I've worked under pressure and independently with little to no supervision. I've been in charge of different tasks such as developing the frontend all by myself, deploying, maintaining sites, creating a vast amount of variations for different components, animating and so on. I'm always eager to learn new technologies and apply what I know to not only help the project but also my teammates in the process."
            }
            size={SIZE_LG}
            className={styles["intro-text"]}
          />
        </div>
        <div className={styles.jobs}>
          {work_experiences.map((work) => (
            <div className={styles.job}>
              <Heading content={work.company} headingStyle="h5" />
              <Text
                className={styles.text}
                content={`${formatDate(work.from)} - ${formatDate(work.to)}`}
                color={COLOR_GREY}
              />
              {work.description && (
                <Text
                  className={styles.text}
                  size="lg"
                  content={work.description}
                />
              )}
              <Text
                className={styles.text}
                size="lg"
                content={work.jobDescription}
              />

              {work.skills.length > 0 && renderBubbles(work.skills)}
            </div>
          ))}
        </div>
      </div>
    </PageBase>
  );
};

export default ExperiencePage;
