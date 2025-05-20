import styled from "styled-components";
import { Breakpoint, MediaQuery } from "../theme";

export const Wrapper = styled.div`
    // matches Layout.Container
    --sgds-mainnav-max-width: 1440px;

    --sgds-mainnav-padding-x: ${Breakpoint["xxl-margin"]}px;
    --sgds-mainnav-mobile-padding-x: ${Breakpoint["xxl-margin"]}px;

    ${MediaQuery.MaxWidth.xl} {
        --sgds-mainnav-padding-x: ${Breakpoint["xl-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${Breakpoint["xl-margin"]}px;
    }

    ${MediaQuery.MaxWidth.lg} {
        --sgds-mainnav-padding-x: ${Breakpoint["lg-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${Breakpoint["lg-margin"]}px;
    }

    ${MediaQuery.MaxWidth.md} {
        --sgds-mainnav-padding-x: ${Breakpoint["md-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${Breakpoint["md-margin"]}px;
    }

    ${MediaQuery.MaxWidth.sm} {
        --sgds-mainnav-padding-x: ${Breakpoint["sm-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${Breakpoint["sm-margin"]}px;
    }

    ${MediaQuery.MaxWidth.xs} {
        --sgds-mainnav-padding-x: ${Breakpoint["xs-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${Breakpoint["xs-margin"]}px;
    }

    ${MediaQuery.MaxWidth.xxs} {
        --sgds-mainnav-padding-x: ${Breakpoint["xxs-margin"]}px;
        --sgds-mainnav-mobile-padding-x: ${Breakpoint["xxs-margin"]}px;
    }
`;
