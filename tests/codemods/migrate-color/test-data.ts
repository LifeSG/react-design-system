export const inputCode = `
import { V2_Color } from '@lifesg/react-design-system/v2_color';

const styles = css\`
    color: \${V2_Color.Primary};
    border-color: \${V2_Color.Accent.Dark[3]};
    text-shadow: 1px 1px \${V2_Color.Accent.Light[1]};
\`;
`;

export const expectedOutputCode = `
import { Colour } from "@lifesg/react-design-system/theme";

const styles = css\`
    color: \${Colour.Primitive["primary-50"]};
    border-color: \${Colour.Primitive["secondary-60"]};
    text-shadow: 1px 1px \${Colour.Primitive["primary-60"]};
\`;
`;
