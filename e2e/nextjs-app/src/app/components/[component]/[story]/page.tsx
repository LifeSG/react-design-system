import dynamic from "next/dynamic";

export default async function Page({
    params,
}: {
    params: Promise<{ component: string; story: string }>;
}) {
    const { component, story } = await params;

    const Story = dynamic(
        () => import(`@/app/components/${component}/${story}.e2e`)
    );
    return <Story />;
}
