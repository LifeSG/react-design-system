export const inputCode = `
import { Color } from "@lifesg/react-design-system/color";
import { MediaQuery } from "@lifesg/react-design-system";
import { MediaWidths as DSMediaWidth } from "@lifesg/react-design-system"
import { Text, TextStyleHelper } from "@lifesg/react-design-system/text"
import { Layout } from "@lifesg/react-design-system/layout";
import { DesignToken } from "@lifesg/react-design-system/design-token";
import { ColDiv } from "@lifesg/react-design-system/layout";
import {ContainerType} from "@lifesg/react-design-system/layout"


<ContainerType type="flex" stretch={true}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</ContainerType>

const Component = () => (
    <>
        <DesignToken />
        <Color />
        <MediaQuery />
        <Text.body />
    </>
);

export default Component;
`;

export const expectedOutputCode = `
import { V2_Color } from "@lifesg/react-design-system/v2_color";
import { V2_MediaQuery } from "@lifesg/react-design-system";
import { V2_MediaWidths as DSMediaWidth } from "@lifesg/react-design-system"
import { V2_Text, V2_TextStyleHelper } from "@lifesg/react-design-system/v2_text"
import { V2_Layout } from "@lifesg/react-design-system/v2_layout";
import { V2_DesignToken } from "@lifesg/react-design-system/v2_design-token";
import { V2_ColDiv } from "@lifesg/react-design-system/v2_layout";
import {V2_ContainerType} from "@lifesg/react-design-system/v2_layout"


<V2_ContainerType type="flex" stretch={true}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</V2_ContainerType>

const Component = () => (
    <>
        <V2_DesignToken />
        <V2_Color />
        <V2_MediaQuery />
        <V2_Text.body />
    </>
);

export default Component;
`;
