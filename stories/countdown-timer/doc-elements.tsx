import { css } from "@linaria/core";
import { MediaQuery } from "src/theme";

const page = css`
    height: 160vh;
    width: 65vw;
    margin: auto;

    ${MediaQuery.MaxWidth.sm} {
        width: 100vw;
    }
`;

const section = css`
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    ${MediaQuery.MaxWidth.sm} {
        flex-direction: column;
        align-items: center;
    }
`;

const spaces = css`
    height: 168px;
`;

interface CountdownViewProps {
    children: [JSX.Element, JSX.Element];
}

export const CountdownView = ({ children }: CountdownViewProps) => {
    const [elem1, elem2] = children;
    return (
        <div className={page}>
            <div className={spaces} />
            <div className={section}>
                <div>{elem1}</div>
                <div>{elem2}</div>
            </div>
        </div>
    );
};
