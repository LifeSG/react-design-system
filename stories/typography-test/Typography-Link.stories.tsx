import { Typography } from "../../src/typography/typography";

export default {
    title: "Typography-Test/Link",
    component: Typography,
};

export const LinkBL_Regular = () => (
    <>
        <Typography.LinkBL weight="regular">
            This is a baseline link.
        </Typography.LinkBL>
    </>
);

export const LinkLG_Bold_Inline = () => (
    <>
        <Typography.LinkLG weight="bold">
            This is a bold link.
        </Typography.LinkLG>
    </>
);

export const LinkSM_External = () => (
    <>
        <Typography.LinkSM external>External Small Link</Typography.LinkSM>
    </>
);
