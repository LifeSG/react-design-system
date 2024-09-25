import { Typography } from "../../src/typography/typography";

export default {
    title: "Typography-Test/Header",
    component: Typography,
};

// HeaderXXL with bold weight and inline display
export const Header_Inline = () => (
    <>
        <Typography.HeaderXXL weight="bold" inline>
            Testing for HeaderXXL and Bold with inline
        </Typography.HeaderXXL>
        <Typography.HeaderXL inline>
            Testing for HeaderXL and regualar with inline
        </Typography.HeaderXL>
        <Typography.HeaderLG weight="light" inline>
            Testing for HeaderSM and Bold with inline
        </Typography.HeaderLG>
    </>
);

export const Header_Paragraph = () => (
    <>
        <Typography.HeaderXXL weight="bold" paragraph>
            Testing for HeaderXXL and Bold with paragraph
        </Typography.HeaderXXL>
        <Typography.HeaderXL paragraph>
            Testing for HeaderXL and Bold with paragraph
        </Typography.HeaderXL>
        <Typography.HeaderLG weight="light" paragraph>
            Testing for HeaderSM and Light with paragraph
        </Typography.HeaderLG>
    </>
);
