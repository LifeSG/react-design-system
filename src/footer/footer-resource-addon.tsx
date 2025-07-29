import { useTheme } from "styled-components";
import { Typography } from "../typography";
import { Img, Items } from "./footer-resource-addon.styles";

export const ResourceAddon = (): JSX.Element => {
    const theme = useTheme();

    const getResourceContent = () => {
        switch (theme?.resourceScheme) {
            case "mylegacy":
                return (
                    <>
                        <Typography.BodySM
                            weight="regular"
                            data-testid="resource-addon-title"
                        >
                            My Legacy is a LifeSG initiative, brought to you by
                            the following government agencies:
                        </Typography.BodySM>
                        <Items>
                            <Img
                                data-testid="footer-govtech-logo"
                                src="https://mylegacy.life.gov.sg/images/agencies/govtech-logo.png"
                                alt="GovTech Singapore"
                                style={{ height: "4.5rem" }}
                            />
                            <Img
                                data-testid="footer-psd-logo"
                                src="https://mylegacy.life.gov.sg/images/agencies/psd-logo.png"
                                alt="Public Service Division"
                                style={{ height: "3.5rem" }}
                            />
                        </Items>
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
