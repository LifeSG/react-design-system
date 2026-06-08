import { css } from "@linaria/core";
import { Layout } from "src/layout";

const content = css`
    background: #f9b5b2;
    border: 2px dotted #f26664;
    height: 100vh;
    flex: 1;
`;

const verticalContent = css`
    background: #f9b5b2;
    border: 2px dotted #f26664;
    height: 50vh;
    padding: 4px;
`;

const background = css`
    background: #fdddd7;
`;

export const FlexDisplay = () => {
    return (
        <div className={background}>
            <Layout.Content type="flex">
                <div className={content} />
            </Layout.Content>
        </div>
    );
};

export const FlexColumnDisplay = () => {
    return (
        <div className={background}>
            <Layout.Content type="flex-column">
                <div className={verticalContent}>First item</div>
                <div className={verticalContent}>Second item</div>
            </Layout.Content>
        </div>
    );
};
