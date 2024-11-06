import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color";
import { V2_MediaQuery } from "../v2_media";
import { ValueLabelStyleProps } from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { V2_TextStyleHelper } from "../v2_text";

export const HistogramSliderDropdownContainer = styled.div`
    overflow: hidden;
    border: 1px solid ${V2_Color.Neutral[5]};
    border-radius: 4px;
    background: ${V2_Color.Neutral[8]};
    padding: 1rem;
    min-width: 23rem;

    ${V2_MediaQuery.MaxWidth.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }
`;

export const Label = styled.div`
    display: flex;
    align-items: baseline;
`;

export const Separator = styled.div`
    margin: 0 0.5rem;
`;

export const ValueLabel = styled.div<ValueLabelStyleProps>`
    ${(props) =>
        V2_TextStyleHelper.getTextStyle(
            props.$variant === "small" ? "BodySmall" : "Body",
            "regular"
        )}
    text-align: left;
    line-height: 1.375rem;
    ${(props) => {
        switch (props.truncateType) {
            case "middle":
                break;
            case "end":
            default:
                return css`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `;
        }
    }}
    overflow: hidden;
`;

export const PlaceholderLabel = styled(ValueLabel)`
    color: ${V2_Color.Neutral[3]};
`;
