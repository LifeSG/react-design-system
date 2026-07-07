import { css } from "@linaria/core";
import { Layout } from "src/layout";

const content = css`
    background: #f9b5b2;
    border: 2px dotted #f26664;
    height: 100vh;
    flex: 1;
`;

const background = css`
    background: #fdddd7;
`;

export const StretchDisplay = () => {
    return (
        <div className={background}>
            <Layout.Container type="flex" stretch>
                <div className={content} />
            </Layout.Container>
        </div>
    );
};
