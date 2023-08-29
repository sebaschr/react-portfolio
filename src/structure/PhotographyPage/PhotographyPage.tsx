import React, { useState, useRef, useEffect } from "react";
import { Media, MediaGrid, Text } from "components";
import { PageBase } from "structure";
import { images } from "services/data";
import styles from "./Photography.module.scss";

const PhotographyPage = () => {
  const imageCounter = 16;
  const [imageList, setImageList] = useState(images.slice(0, imageCounter));

  const photosRef = useRef<HTMLDivElement>(null);

  function handleScroll(e: Event) {
    if (e.target) {
      var element = e.target as HTMLElement;
      const { scrollHeight, scrollTop, clientHeight } = element;

      if (Math.abs(scrollHeight - clientHeight - scrollTop) <= 1) {
        if (images.length > imageList.length) {
          setTimeout(() => {
            setImageList(images.slice(0, imageList.length + imageCounter));
          }, 200);
        }
      }
    }
  }

  useEffect(() => {
    // Everything around if statement
    const element = document.getElementById("page-base-container");
    if (element) {
      element.addEventListener("scroll", handleScroll);

      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  });

  return (
    <PageBase
      headingText="Photography"
      title="Photography"
      className={styles["parent-container"]}
    >
      <div ref={photosRef}>
        <MediaGrid
          mobileColumns={2}
          tabletColumns={4}
          desktopColumns={4}
          className={styles.grid}
        >
          {imageList.length > 0 &&
            imageList.map((image, i) => (
              <>
                <Media src={image.src} />
                {i === 3 && (
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
