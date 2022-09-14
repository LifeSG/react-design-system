import styled from "styled-components";
import { Color } from "../color/color";
import { Icon } from "../icon";
import { Text, TextStyleHelper } from "../text";
import { AlertType } from "./types";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
	$type: AlertType;
}

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div<StyleProps>`
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    ${TextStyleHelper.getTextStyle("BodySmall", "regular")}

    ${(props) => {
		let backgroundColor: string;
		let borderColor: string;
		switch (props.$type) {
			case "error":
				backgroundColor = Color.Validation.Red.Background(props);
				borderColor = Color.Validation.Red.Border(props);
				break;
			case "success":
				backgroundColor = Color.Validation.Green.Background(props);
				borderColor = Color.Validation.Green.Border(props);
				break;
			case "warning":
				backgroundColor = Color.Validation.Orange.Background(props);
				borderColor = Color.Validation.Orange.Border(props);
				break;
			default:
				backgroundColor = Color.Validation.Green.Background(props);
				borderColor = Color.Validation.Green.Border(props);
				break;
		}

		return `
			background: ${backgroundColor};
			border-left: 2pt solid ${borderColor};
		`;
	}}

	p {
        ${TextStyleHelper.getTextStyle("BodySmall", "regular")}
        /* display: inline-block; */

		strong {
            ${TextStyleHelper.getFontFamily("BodySmall", "semibold")}
        }

        a {
            color: ${Color.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Color.Secondary};
            }
        }
    }
`;

export const ActionLinkText = styled(Text.Hyperlink.Small)`
    margin-bottom: 0;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;

    :hover {
        #fill-group {
            // This belongs to the arrow icon
            fill: ${Color.Secondary};
        }
    }
`;

export const ArrowIcon = styled(Icon)`
    margin-left: 0.25rem;
`;
