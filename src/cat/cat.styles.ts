import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { styled as scStyled } from "styled-components";
import { V4_Token } from "../v4-token";
import { CatProps } from "./types";
import { Button } from "../button";

export const Container = styled.div<{ size: CatProps["size"] }>`
    border-radius: 8px;
    border: 1px solid ${V4_Token.Color["neutral-10"]};
    background-color: transparent;
    padding: 16px;
    width: ${(props) =>
        props.size === "small"
            ? "200px"
            : props.size === "medium"
            ? "400px"
            : "600px"};
    height: ${(props) =>
        props.size === "small"
            ? "150px"
            : props.size === "medium"
            ? "280px"
            : "450px"};
`;

export const Tabby = css`
    background: repeating-linear-gradient(
        135deg,
        ${V4_Token.Color.primary},
        ${V4_Token.Color["neutral-100"]} 5px
    );
`;

export const Siamese = css`
    background-color: ${V4_Token.Color["neutral-60"]};
`;

export const Eye = styled.div`
    background-color: black;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    overflow: hidden;
`;

export const Eyes = styled.div`
    display: flex;
    gap: 100px;
`;

export const LionButton = styled(Button.Default)`
    && {
        background-color: ${V4_Token.Color["secondary"]};
    }
`;

export const TigerContainer = scStyled(Container)`
    border: 2px solid ${V4_Token.Color["secondary"]};
    width: 50px;
    height: 50px;
`;
