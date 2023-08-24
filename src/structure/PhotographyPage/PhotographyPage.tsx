import React from "react";
import { Heading, Media, MediaGrid, Text } from "components";
import { PageBase } from "structure";
import styles from "./Photography.module.scss";
import { SIZE_LG } from "utils/constants";

const PhotographyPage = () => {
  return (
    <PageBase headingText="Photography" title="Photography">
      <div>
        <MediaGrid
          mobileColumns={1}
          tabletColumns={2}
          desktopColumns={4}
          className={styles.grid}
        >
          <Media src={require("assets/images/photography/eJT3B9G.jpeg")} />
          <Media src={require("assets/images/photography/1LiBw1V.jpeg")} />
          <Media src={require("assets/images/photography/9fpREtZ.jpeg")} />
          <Media src={require("assets/images/photography/EFGjnaG.jpeg")} />

          <Text
            content={
              "I recently backpacked Europe, here are some photos I took along the trip. Before this I didn't really know I was this much into photography or media production, but it's definitely something I'd love to get more into in a near future."
            }
            className={styles.text}
          />

          <Media src={require("assets/images/photography/JzwLbgV.jpeg")} />
          <Media src={require("assets/images/photography/N3ceE2I.jpeg")} />
          <Media src={require("assets/images/photography/TtnSNYz.jpeg")} />
          <Media src={require("assets/images/photography/XQnFW6Z.jpeg")} />
          <Media src={require("assets/images/photography/YFquhNU.jpeg")} />
          <Media src={require("assets/images/photography/gqvCaPZ.jpeg")} />
          <Media src={require("assets/images/photography/hPX4cWL.jpeg")} />
          <Media src={require("assets/images/photography/qRsX2Cz.jpeg")} />
        </MediaGrid>
      </div>
    </PageBase>
  );
};

export default PhotographyPage;
