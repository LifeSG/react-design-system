import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { V4_Token } from "../v4-token";

export const Container = styled.div`
    border: 1px dashed ${V4_Token.Color["neutral-10"]};
    background-color: transparent;
    padding: 20px;
    width: 400px;
    height: 280px;
    clip-path: polygon(
        8% 18%,
        28% 16%,
        31% 41%,
        72% 39%,
        79% 29%,
        79% 41%,
        76% 47%,
        72% 53%,
        71% 76%,
        7% 82%
    );
    position: relative;
`;

export const Title = styled.h1`
    color: ${V4_Token.Color["neutral-100"]};
    font-size: ${V4_Token.Font["body-bl-size"]};
`;

export const Husky = css`
    background: ${V4_Token.Color["neutral-40"]};
`;

export const Poodle = css`
    background: ${V4_Token.Color["neutral-60"]};
`;

export const Eye = styled.div`
    background-color: black;
    height: 12px;
    width: 10px;
    border-radius: 50%;
    overflow: hidden;
`;

export const Eyes = styled.div`
    display: flex;
    position: absolute;
    top: 20%;
    left: 10%;
    gap: 20%;
    width: 20%;
`;
