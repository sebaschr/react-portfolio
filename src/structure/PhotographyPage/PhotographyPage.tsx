import React from "react";
import { Heading, Media, MediaGrid, Text } from "components";
import { PageBase } from "structure";
import styles from "./Photography.module.scss";
import { SIZE_LG } from "utils/constants";

const PhotographyPage = () => {
  return (
    <PageBase headingText="Photography" title="Photography">
      <div>
        <MediaGrid mobileColumns={2} desktopColumns={4} className={styles.grid}>
          <Media src="https://i.imgur.com/JzwLbgV.jpg" />
          <Media src="https://i.imgur.com/JzwLbgV.jpg" />

          <Text
            content={
              "I recently backpacked Europe, here are some photos I took along the trip. Before this I didn't really know I was this much into photography or media production, but it's definitely something I'd love to get more into in a near future."
            }
            className={styles.text}
          />

          <Media src="https://i.imgur.com/JzwLbgV.jpg" />
          <Media src="https://i.imgur.com/JzwLbgV.jpg" />
          <Media src="https://i.imgur.com/JzwLbgV.jpg" />
          <Media src="https://i.imgur.com/JzwLbgV.jpg" />
          <Media src="https://i.imgur.com/JzwLbgV.jpg" />
          <Media src="https://i.imgur.com/JzwLbgV.jpg" />
          <Media src="https://i.imgur.com/JzwLbgV.jpg" />
          <Media src="https://i.imgur.com/JzwLbgV.jpg" />
          <Media src="https://i.imgur.com/JzwLbgV.jpg" />
          <Media src="https://i.imgur.com/JzwLbgV.jpg" />
          <Media src="https://i.imgur.com/JzwLbgV.jpg" />
          <Media src="https://i.imgur.com/JzwLbgV.jpg" />
        </MediaGrid>
      </div>
    </PageBase>
  );
};

export default PhotographyPage;
