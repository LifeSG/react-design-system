import type { ReactNode } from "react";

import { Typography } from "@lifesg/react-design-system/typography";

interface StoryContentProps {
    children: ReactNode;
    testId: string;
}

export const StoryContent = ({
    children,
    testId,
}: StoryContentProps): JSX.Element => {
    return (
        <Typography.BodyBL data-testid={testId}>{children}</Typography.BodyBL>
    );
};
