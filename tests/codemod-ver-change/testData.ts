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
import { v2_Color } from "@lifesg/react-design-system/v2_color";
import { v2_MediaQuery } from "@lifesg/react-design-system";
import { v2_Text } from "@lifesg/react-design-system/v2_text";
import {DesignToken} from "../design-token";

const Component = () => (
    <>
        <DesignToken />
        <v2_Color />
        <v2_MediaQuery />
        <v2_Text />
    </>
);

export default Component;
`;
