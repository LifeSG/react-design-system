import { ResourceScheme } from "../theme/types";
import { NavbarResourcesProps } from "./types";

const DEFAULT_RESOURCES_LOGO: NavbarResourcesProps = {
    primary: {
        brandName: "LifeSG",
        logoSrc: "https://assets.life.gov.sg/lifesg/logo-lifesg.svg",
    },
};

const BOOKINGSG_RESOURCES_LOGO: NavbarResourcesProps = {
    primary: {
        brandName: "BookingSG",
        logoSrc: "https://www.booking.gov.sg/logo.svg",
    },
};

const CCUBE_RESOURCES_LOGO: NavbarResourcesProps = {
    primary: {
        brandName: "CCube",
        logoSrc: "https://assets.life.gov.sg/ccube/logo-ccube.svg",
    },
};

const MYLEGACY_RESOURCES_LOGO: NavbarResourcesProps = {
    primary: {
        brandName: "MyLegacy",
        logoSrc: "https://mylegacy.life.gov.sg/images/site-logo.png",
    },
};

const SUPPORTGOWHERE_RESOURCE_LOGO: NavbarResourcesProps = {
    primary: {
        brandName: "SupportGoWhere",
        logoSrc:
            "https://assets.life.gov.sg/react-design-system/img/logo/sgw-logo.png",
    },
};

export const getDefaultResourceLogo = (resourceScheme?: ResourceScheme) => {
    switch (resourceScheme) {
        case "bookingsg":
            return BOOKINGSG_RESOURCES_LOGO;
        case "mylegacy":
            return MYLEGACY_RESOURCES_LOGO;
        case "ccube":
            return CCUBE_RESOURCES_LOGO;
        case "supportgowhere":
            return SUPPORTGOWHERE_RESOURCE_LOGO;
        default:
            return DEFAULT_RESOURCES_LOGO;
    }
};
