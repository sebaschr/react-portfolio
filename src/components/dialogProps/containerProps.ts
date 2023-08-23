import { COLOR_VALUES, ALIGNMENTS, THEME_VALUES, LINK_TARGETS, MEDIA_GRID_COLUMNS } from "utils/constants";
import { classNameSizeandChildren, onlyChildren, onlySize, onlyClassName, classNameandChildren } from "./sharedProps";

type sharedBannerProps = {
    alignment?: ALIGNMENTS;
    heading: string;
    text?: string;
    backgroundColor?: COLOR_VALUES;
    textColor?: COLOR_VALUES;

    primaryBtnText?: string;
    primaryBtnHref?: string;
    primaryBtnTarget?: LINK_TARGETS;

    secondaryBtnText?: string;
    secondaryBtnHref?: string;
    secondaryBtnTarget?: LINK_TARGETS;

}

export interface BannerProps extends onlyChildren {
    backgroundColor?: COLOR_VALUES;
}

export interface CategoryBubbleProps extends onlyClassName {
    backgroundColor?: COLOR_VALUES;
    text: string;
}


export interface HeroBannerProps extends sharedBannerProps, onlyClassName {
    imageSrc?: string;
    imageAlt?: string;
    backgroundImageSrc?: string;
    imageFirst?: boolean
    hideOnMobile?: boolean;

}

export interface ContainerProps extends classNameSizeandChildren {
    isFullWidth?: boolean;
    isFlexbox?: boolean;
    isWrapped?: boolean;
    overrideTheme?: boolean;
    theme?: THEME_VALUES
};

export interface PageBackgroundProps extends onlyChildren { };

export interface SpacerProps extends onlySize {
    backgroundColor?: COLOR_VALUES;
};

export interface MediaGridProps extends classNameandChildren {
    mobileColumns: MEDIA_GRID_COLUMNS;
    tabletColumns?: MEDIA_GRID_COLUMNS;
    desktopColumns: MEDIA_GRID_COLUMNS;
    withoutSpace?: boolean;
};