import { css } from "@linaria/core";

export const Container = ({ children }: React.ComponentProps<"div">) => (
    <div className={container}>{children}</div>
);

const container = css`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;

    &:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    button {
        flex: 0 fit-content;
    }
`;
