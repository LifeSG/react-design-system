import styled, { css } from "styled-components";
// import { v2_Color } from "@lifesg/react-design-system/v2_color";
// import { v2_MediaQuery } from "@lifesg/react-design-system/v2_media";
// import { v2_DesignToken } from "@lifesg/react-design-system/v2_design-token";
import { MainStyleProps } from "@lifesg/react-design-system";

// export const Main = styled.button<MainStyleProps>`
//     padding: 0.5rem 1rem;
//     min-width: 4rem;
//     border-radius: 4px;
//     transition: all 200ms ease;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     @media (hover: hover) {
//         &:hover {
//             box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
//         }
//     }

//     // -----------------------------------------------------------------------------
//     // BUTTON STYLE + TEXT COLOR
//     // -----------------------------------------------------------------------------
//     ${(props) => {
//         switch (props.$buttonStyle) {
//             case "secondary":
//                 return css`
//                     background-color: ${v2_Color.Neutral[8]};
//                     border: 1px solid
//                         ${props.$buttonIsDanger
//                             ? v2_DesignToken.Button.Danger.Border
//                             : v2_Color.Primary};

//                     color: ${props.$buttonIsDanger
//                         ? v2_DesignToken.Button.Danger.Primary
//                         : v2_Color.Primary};
//                 `;
//             case "light":
//                 return css`
//                     background-color: ${v2_Color.Neutral[8]};
//                     border: 1px solid ${v2_Color.Neutral[5]};

//                     color: ${props.$buttonIsDanger
//                         ? v2_DesignToken.Button.Danger.Primary
//                         : v2_Color.Primary};
//                 `;
//             case "disabled":
//                 return css`
//                     background-color: ${v2_Color.Neutral[6]};
//                     border: 1px solid transparent;
//                     cursor: not-allowed;

//                     &:hover {
//                         box-shadow: none;
//                     }

//                     color: ${v2_Color.Neutral[3]};
//                 `;
//             case "link":
//                 return css`
//                     background-color: transparent;
//                     border: none;
//                     border-radius: unset;

//                     &:hover {
//                         box-shadow: none;
//                     }

//                     color: ${props.$buttonIsDanger
//                         ? v2_DesignToken.Button.Danger.Primary
//                         : v2_Color.Primary};
//                     :hover,
//                     :active,
//                     :focus {
//                         color: ${props.$buttonIsDanger
//                             ? v2_DesignToken.Button.Danger.Hover
//                             : v2_Color.Secondary};
//                     }
//                 `;
//             default:
//                 return css`
//                     background-color: ${props.$buttonIsDanger
//                         ? v2_DesignToken.Button.Danger.BackgroundColor
//                         : v2_Color.Primary};
//                     border: 1px solid transparent;

//                     ${v2_MediaQuery.MaxWidth.mobileL} {
//                         width: 100%;
//                     }

//                     color: ${v2_Color.Neutral[8]};
//                 `;
//         }
//     }}// -----------------------------------------------------------------------------
// 	// BUTTON SIZE + TEXT SIZE
// 	// -----------------------------------------------------------------------------
// `;

// Commented out for no errors when commiting to git
