export const inputCode = `
import { Color } from "@lifesg/react-design-system/color";
import { MediaQuery } from "@lifesg/react-design-system";
import { Text } from "@lifesg/react-design-system/text";
import {DesignToken} from "../design-token";

const Component = () => (
    <>
        <DesignToken />
        <Color />
        <MediaQuery />
        <Text />
    </>
);

export default Component;
`;

export const expectedOutputCode = `
import { V2_Color } from "@lifesg/react-design-system/v2_color";
import { V2_MediaQuery } from "@lifesg/react-design-system";
import { V2_Text } from "@lifesg/react-design-system/v2_text";
import {DesignToken} from "../design-token";

const Component = () => (
    <>
        <DesignToken />
        <V2_Color />
        <V2_MediaQuery />
        <V2_Text />
    </>
);

export default Component;
`;
