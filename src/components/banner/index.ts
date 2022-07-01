import { VideoBanner as VideoBannerComponent } from "./video-banner";
import { Title, Description, ActionButton } from "./video-banner-elements";

export * from "./banner";
export const VideoBanner = {
    Wrapper: VideoBannerComponent,
    Title,
    Description,
    ActionButton,
};
