import dynamic from "next/dynamic";

export default async function Page({
    params,
}: Readonly<{
    params: Promise<{ component: string; story: string }>;
}>) {
    const { component, story } = await params;

    const Story = dynamic(
        () => import(`@/app/components/${component}/${story}.e2e`),
        // TODO: Remove when each component has stable hydration support
        {
            ssr: ![
                "date-range-input",
                "date-input",
                "select",
                "nested-select",
                "multi-select",
                "nested-multi-select",
            ].includes(component),
        }
    );
    return <Story />;
}
