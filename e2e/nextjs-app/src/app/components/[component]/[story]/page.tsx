import dynamic from "next/dynamic";

export default async function Page({
    params,
}: Readonly<{
    params: Promise<{ component: string; story: string }>;
}>) {
    const { component, story } = await params;

    const Story = dynamic(
        () => import(`@/app/components/${component}/${story}.e2e`),
        // TODO: Remove when date-range-input have stable hydation support
        { ssr: component !== "date-range-input" }
    );
    return <Story />;
}
