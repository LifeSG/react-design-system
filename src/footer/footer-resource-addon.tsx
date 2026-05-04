import { useContext } from "react";

import { ThemeContext } from "../theme/theme-provider/context";
import { Typography } from "../typography";
import * as styles from "./footer-resource-addon.styles";

export const ResourceAddon = (): JSX.Element => {
    const theme = useContext(ThemeContext);

    const getResourceContent = () => {
        switch (theme?.theme) {
            case "mylegacy":
                return (
                    <>
                        <Typography.BodyMD data-testid="resource-addon-title">
                            My Legacy is a LifeSG initiative, brought to you by
                            the following government agencies:
                        </Typography.BodyMD>
                        <div className={styles.items}>
                            <img
                                className={styles.img}
                                data-testid="footer-govtech-logo"
                                src="https://mylegacy.life.gov.sg/images/agencies/govtech-logo.png"
                                alt="GovTech Singapore"
                                style={{ height: "4.5rem" }}
                            />
                            <img
                                className={styles.img}
                                data-testid="footer-psd-logo"
                                src="https://mylegacy.life.gov.sg/images/agencies/psd-logo.png"
                                alt="Public Service Division"
                                style={{ height: "3.5rem" }}
                            />
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div data-testid="resource-addon-section">{getResourceContent()}</div>
    );
};
