import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { V4_Token } from "../v4-token";
import { CatProps } from "./types";

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

export const Title = styled.h1`
    color: ${V4_Token.Color["neutral-100"]};
    font-size: ${V4_Token.Font["body-bl-size"]};
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
