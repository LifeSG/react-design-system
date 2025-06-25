import { useTheme } from "styled-components";
import { Text } from "../text";
import { Img, Items } from "./footer-resource-addon.styles";

export const ResourceAddon = (): JSX.Element => {
    const theme = useTheme();

    const getResourceContent = () => {
        switch (theme?.resourceScheme) {
            case "mylegacy":
                return (
                    <>
                        <Text.XSmall>
                            My Legacy is a LifeSG initiative, brought to you by
                            the following government agencies:
                        </Text.XSmall>
                        <Items>
                            <Img
                                data-testid="footer-govtech-logo"
                                src="https://mylegacy.life.gov.sg/images/agencies/govtech-logo.png"
                                alt="GovTech Singapore"
                            />
                            <Img
                                data-testid="footer-psd-logo"
                                src="https://mylegacy.life.gov.sg/images/agencies/psd-logo.png"
                                alt="Public Service Division"
                                style={{ maxHeight: "3.5rem" }}
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
