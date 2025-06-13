import { V2_Text } from "../v2_text";
import { Img, Items } from "./footer-resource-addon.style";
import { ResourceAddonProps } from "./types";

export const ResourceAddon = ({ theme }: ResourceAddonProps) => {
    function getResourceContent() {
        switch (theme.colourScheme) {
            case "mylegacy":
                return (
                    <>
                        <V2_Text.XSmall>
                            My Legacy is a LifeSG initiative, brought to you by
                            the following government agencies:
                        </V2_Text.XSmall>
                        <Items>
                            <Img
                                id="footer-govtech-logo"
                                src="https://mylegacy.life.gov.sg/images/agencies/govtech-logo.png"
                                alt="GovTech Singapore"
                            />
                            <Img
                                id="footer-psd-logo"
                                src="https://mylegacy.life.gov.sg/images/agencies/psd-logo.png"
                                alt="Public Service Division"
                            />
                        </Items>
                    </>
                );
            default:
                return <></>;
        }
    }

    return (
        <div data-testid="resource-addon-section">{getResourceContent()}</div>
    );
};
