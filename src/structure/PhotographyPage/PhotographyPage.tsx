import React from "react";
import { Media, MediaGrid, Text } from "components";
import { PageBase } from "structure";
import { images } from "services/data";
import styles from "./Photography.module.scss";

const PhotographyPage = () => {
  return (
    <PageBase
      headingText="Photography"
      title="Photography"
      className={styles["parent-container"]}
    >
      <div>
        <MediaGrid
          mobileColumns={2}
          tabletColumns={4}
          desktopColumns={4}
          className={styles.grid}
        >
          {images.length > 0 &&
            images.map((image, i) => (
              <>
                <Media src={image.src} />
                {i == 3 && (
                  <Text
                    content={
                      "I recently backpacked Europe, here are some photos I took along the trip. Before this I didn't really know I was this much into photography or media production, but it's definitely something I'd love to get more into in a near future."
                    }
                    className={styles.text}
                  />
                )}
              </>
            ))}
        </MediaGrid>
      </div>
    </PageBase>
  );
};

export default PhotographyPage;
