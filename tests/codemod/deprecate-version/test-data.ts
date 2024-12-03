export const inputCode = `
import { Color } from "@lifesg/react-design-system/color";
import { MediaQuery } from "@lifesg/react-design-system";
import { MediaWidths as DSMediaWidth } from "@lifesg/react-design-system"
import { Text, TextStyleHelper } from "@lifesg/react-design-system/text"
import { Layout } from "@lifesg/react-design-system/layout";
import { DesignToken } from "@lifesg/react-design-system/design-token";
import { ColDiv } from "@lifesg/react-design-system/layout";
import {ContainerType} from "@lifesg/react-design-system/layout"
import {BaseColorSet} from "@lifesg/react-design-system/layout"
import {TextList} from "@lifesg/react-design-system/text-list"

const Container = styled.div\`
   color: \${DesignToken.Table.Cell.Primary};
\`

interface Props {
    foo : ContainerType;
}

const Component = () => (
    <>
        <DesignToken />
        <Color />
        <MediaQuery />
        <Text.body />
        <Layout.Content type="flex" stretch={true}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
        </Layout.Content>
        <TextList.Ul bulletType="circle">
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
        </TextList.Ul>
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
import {BaseColorSet} from "@lifesg/react-design-system/layout"
import {V2_TextList} from "@lifesg/react-design-system/v2_text-list"

const Container = styled.div\`
   color: \${V2_DesignToken.Table.Cell.Primary};
\`

interface Props {
    foo : V2_ContainerType;
}

const Component = () => (
    <>
        <V2_DesignToken />
        <V2_Color />
        <V2_MediaQuery />
        <V2_Text.body />
        <V2_Layout.Content type="flex" stretch={true}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
        </V2_Layout.Content>
        <V2_TextList.Ul bulletType="circle">
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
        </V2_TextList.Ul>
    </>
);

export default Component;
`;
