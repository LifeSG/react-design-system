export const inputCode = `
import { V2_MediaQuery, V2_MediaWidths } from "@lifesg/react-design-system/v2_media";

const StyledContainer = styled.div<StyleProps>\`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    \${(props) => {
        if (props.stretch) {
            return css\`
                padding: 0 3rem;
            \`;
        } else {
            return css\`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                \${V2_MediaQuery.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            \`;
        }
    }}
    \${V2_MediaQuery.MaxWidth.tablet} {
        max-width: 720px;
    }
    \${V2_MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }
    
    @media (max-width: \${V2_MediaWidths.mobileL}px) {
        padding: 0;
        max-width: 100%;
    }

    @media (max-width: \${V2_MediaWidths.mobileL}px) {
        padding: 0;
        max-width: 100%;
    }
\`;
`;

export const expectedOutputCode = `
import { MediaQuery } from "@lifesg/react-design-system/theme";
import { V2_MediaWidths } from "@lifesg/react-design-system/v2_media";

const StyledContainer = styled.div<StyleProps>\`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    \${(props) => {
        if (props.stretch) {
            return css\`
                padding: 0 3rem;
            \`;
        } else {
            return css\`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                \${MediaQuery.MaxWidth.xl} {
                    max-width: 1140px;
                }
            \`;
        }
    }}
    \${MediaQuery.MaxWidth.lg} {
        max-width: 720px;
    }
    \${MediaQuery.MaxWidth.sm} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }
    
    @media (max-width: \${V2_MediaWidths.mobileL}px) {
        padding: 0;
        max-width: 100%;
    }

    @media (max-width: \${V2_MediaWidths.mobileL}px) {
        padding: 0;
        max-width: 100%;
    }
\`;
`;
