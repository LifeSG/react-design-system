import { SingpassButtonStyleType } from "./types";

const singpassLogo =
    "https://assets.life.gov.sg/react-design-system/img/singpass/default.svg";
const singpassLogoWhite =
    "https://assets.life.gov.sg/react-design-system/img/singpass/white.svg";

export const getSpLogo = (bg: SingpassButtonStyleType) =>
    bg === "red-filled" ? singpassLogoWhite : singpassLogo;
