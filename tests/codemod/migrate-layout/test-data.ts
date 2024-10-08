export const inputCode = `
import { V2_Layout } from "@lifesg/react-design-system/v2_layout";

<div>
    <V2_Layout.ColDiv desktopCols={12} tabletCols={8} mobileCols={4}>
        <TextComponent>{children}</TextComponent>
        <V2_Layout.Container>
            {content}
        </V2_Layout.Container>
        <V2_Layout.Section>
            <V2_Layout.Container type="grid" style={{ padding: "2rem 0", rowGap: "1rem" }}>
                {children}
            </V2_Layout.Container>
        </V2_Layout.Section>
    </V2_Layout.ColDiv>

    <V2_Layout.Container>
            {content}
    </V2_Layout.Container>

</div>
`;

export const expectedOutputCode = `
import { Layout } from "@lifesg/react-design-system/layout";

<div>
    <Layout.ColDiv xlCols={12} mdCols={8} xxsCols={4}>
        <TextComponent>{children}</TextComponent>
        <Layout.Container>
            {content}
        </Layout.Container>
        <Layout.Section>
            <Layout.Container type="grid" style={{ padding: "2rem 0", rowGap: "1rem" }}>
                {children}
            </Layout.Container>
        </Layout.Section>
    </Layout.ColDiv>

    <Layout.Container>
            {content}
    </Layout.Container>

</div>
`;
