import React from "react";
import { HeroBanner, Embed, Container, Media } from "components";
import MediaGrid from "components/MediaGrid/MediaGrid";

const HomePage = () => {
  return (
    <>
      <MediaGrid mobileColumns={3} tabletColumns={2} desktopColumns={4}>
        <Media src="https://i.pinimg.com/564x/6e/06/6e/6e066e3bcceb7b3621e0a517fb745290.jpg" />
        <Media src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg" />
        <Media src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg" />
        <Media src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg" />
        <Media src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg" />
        <Media src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg" />
      </MediaGrid>
    </>
  );
};

export default HomePage;
