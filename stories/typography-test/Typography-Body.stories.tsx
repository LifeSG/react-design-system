import { Typography } from "../../src/typography/typography";

export default {
    title: "Typography-Test/Body",
    component: Typography,
};

export const Body_Inline = () => (
    <>
        <Typography.BodyBL weight="bold" inline>
            Testing for BodyBL and Bold with inline
        </Typography.BodyBL>
        <br />
        <Typography.BodyLG weight="regular" inline>
            Testing for BodyLG and SemiBold with inline
        </Typography.BodyLG>
        <br />
        <Typography.BodyMD weight="light" inline>
            Testing for BodyMD and light with inline
        </Typography.BodyMD>
    </>
);

export const Body_Paragraph = () => (
    <>
        <Typography.BodyBL weight="bold" paragraph>
            Testing for BodyBL and Bold with paragraph
        </Typography.BodyBL>
        <Typography.BodyLG weight="regular" paragraph>
            Testing for BodyLG and regular with paragraph
        </Typography.BodyLG>
        <Typography.BodyMD weight="light" paragraph>
            Testing for BodyMD and Light with paragraph
        </Typography.BodyMD>
    </>
);
