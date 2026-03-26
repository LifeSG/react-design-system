import { SingpassButtonStyleType } from "./types";

const singpassLogoRed =
    "https://assets.life.gov.sg/react-design-system/img/singpass/singpass_red_filled.svg";
const singpassLogoWhite =
    "https://assets.life.gov.sg/react-design-system/img/singpass/singpass_white_filled.svg";

export const getSpLogo = (bg: SingpassButtonStyleType) =>
    bg === "red-filled" ? singpassLogoRed : singpassLogoWhite;
