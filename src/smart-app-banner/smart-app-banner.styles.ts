import { Text, TextStyleHelper } from "../text";
import { Button } from "../button";
import { Color } from "../color";
import { MediaQuery } from "../media";
import styled from "styled-components";
import { IconButton } from "../icon-button";
import { Icon } from "../icon";

export const SmartAppBannerContainer = styled.div<{ $offset: number }>`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: fixed;
    margin: 8px 20px;
    ${(props) => {
        return `top: ${props.$offset}px;`;
    }}
    left: 0;
    width: calc(100% - 40px);
    min-height: 88px;
    z-index: 9001;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(104, 104, 104, 0.25);
    border-radius: 8px;
    transition: top 0.5s ease;
`;

export const CloseContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 4px 8px 16px;
`;

export const CrossButton = styled(IconButton)`
    padding: 0;
    svg {
        color: ${Color.Neutral[1]};
    }
`;

export const CrossIcon = styled(Icon)`
    color: ${Color.Neutral[1]};
`;

export const ClickableContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 8px 16px 8px 4px;
`;
export const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 8px;
    ${MediaQuery.MaxWidth.mobileM} {
        margin: 0 8px;
    }
`;

export const LifeSgAppIcon = styled.img`
    width: 42.5px;
    align-self: center;
`;

export const DownloadContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const DownloadButton = styled(Button.Small)`
    padding: 8px;
    & > span {
        ${TextStyleHelper.getTextStyle("XSmall", "semibold")}
    }
`;

export const Title = styled(Text.H6)`
    ${MediaQuery.MaxWidth.mobileM} {
        ${TextStyleHelper.getTextStyle("XSmall", "semibold")}
    }
`;

export const Description = styled(Text.XSmall)``;
