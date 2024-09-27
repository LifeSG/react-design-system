export const inputCode = `


import { V2_Text } from "@lifesg/react-design-system/v2_text";
import { V2_Layout } from "@lifesg/react-design-system/v2_layout";

const ExampleComponent = () => (
    <div>
        <V2_Layout.Container>Test</V2_Layout.Container>
        <V2_Text.Body weight="bold">This is body text</V2_Text.Body>
        <V2_Text.Hyperlink.Default weight="bold">This is body text</V2_Text.Hyperlink.Default>
        <V2_Text.H1>This is a heading</V2_Text.H1>
        <V2_Text.BodySmall>This is smaller body text</V2_Text.BodySmall>

        <V2_Text.Body paragraph={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi euismod quam eget ex tincidunt dapibus. Donec vitae
            leo vehicula, fermentum urna vitae, gravida ex.
        </V2_Text.Body>
        <V2_Text.Body paragraph={true}>
            Aenean imperdiet faucibus velit, eu maximus libero facilisis
            ut. Donec nulla nisi, fermentum eget lorem at, feugiat
            ultricies ex. Aliquam volutpat nibh non suscipit rhoncus.
        </V2_Text.Body>

    </div> 
);

export default ExampleComponent;
`;

export const expectedOutputCode = `

import { Typography } from "@lifesg/react-design-system/typography";
import { V2_Layout } from "@lifesg/react-design-system/v2_layout";

const ExampleComponent = () => (
    <div>
        <V2_Layout.Container>Test</V2_Layout.Container>
        <Typography.BodyBL weight="bold">This is body text</Typography.BodyBL>
        <Typography.LinkBL weight="bold">This is body text</Typography.LinkBL>
        <Typography.HeaderLG>This is a heading</Typography.HeaderLG>
        <Typography.BodyMD>This is smaller body text</Typography.BodyMD>

        <Typography.BodyBL paragraph={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi euismod quam eget ex tincidunt dapibus. Donec vitae
            leo vehicula, fermentum urna vitae, gravida ex.
        </Typography.BodyBL>
        <Typography.BodyBL paragraph={true}>
            Aenean imperdiet faucibus velit, eu maximus libero facilisis
            ut. Donec nulla nisi, fermentum eget lorem at, feugiat
            ultricies ex. Aliquam volutpat nibh non suscipit rhoncus.
        </Typography.BodyBL>

    </div> 
);

export default ExampleComponent;
`;
