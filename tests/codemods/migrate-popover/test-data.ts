import dedent from "dedent";

export const V2Usage = {
    input: dedent`
        import { PopoverTrigger, PopoverV2, PopoverV2Props, PopoverRenderProps, PopoverV2TriggerType, PopoverOverflowType, PopoverV2Position, PopoverV2TriggerProps, PopoverInlineStyle, PopoverInlineProps } from "@lifesg/react-design-system/popover-v2";

        const ExampleComponent = () => (
            <div>
                <PopoverTrigger popoverContent="This is the popover content">
                    Trigger
                </PopoverTrigger>
                <PopoverTrigger
                    popoverContent={() => <PopoverV2>Custom popover content</PopoverV2>}
                >
                    Trigger
                </PopoverTrigger>
                 <PopoverInline
                    content="Trigger"
                    popoverContent="This is the popover content"
                />
            </div>
        );
    `,
    expectedOutput: dedent`
        import {
            Popover,
            PopoverTrigger,
            PopoverProps,
            PopoverRenderProps,
            PopoverTriggerType,
            PopoverOverflowType,
            PopoverPosition,
            PopoverTriggerProps,
            PopoverInlineStyle,
            PopoverInlineProps,
        } from "@lifesg/react-design-system/popover";

        const ExampleComponent = () => (
            <div>
                <PopoverTrigger popoverContent="This is the popover content">
                    Trigger
                </PopoverTrigger>
                <PopoverTrigger
                    popoverContent={() => <Popover>Custom popover content</Popover>}
                >
                    Trigger
                </PopoverTrigger>
                 <PopoverInline
                    content="Trigger"
                    popoverContent="This is the popover content"
                />
            </div>
        );
    `,
};

export const RootImport = {
    input: dedent`
        import { PopoverTrigger, PopoverV2TriggerProps } from "@lifesg/react-design-system";

        const ExampleComponent = () => (
            <div>
                <PopoverTrigger popoverContent="This is the popover content">
                    Trigger
                </PopoverTrigger>
            </div>
        );
    `,
    expectedOutput: dedent`
        import { PopoverTrigger, PopoverTriggerProps } from "@lifesg/react-design-system/popover";

        const ExampleComponent = () => (
            <div>
                <PopoverTrigger popoverContent="This is the popover content">
                    Trigger
                </PopoverTrigger>
            </div>
        );
    `,
};

export const V1Usage = {
    input: dedent`
        import { withPopover, Popover } from "@lifesg/react-design-system/popover";

        const Trigger = () => <div>Trigger</div>;
        const PopoverHOC = withPopover(Trigger);
        const PopoverHOC2 = withPopover(Trigger, { content: "This is the popover content", trigger: "hover" });
        const PopoverHOC3 = withPopover(<div>Trigger</div>);

        const ExampleComponent = () => (
            <div>
                <PopoverHOC />
                <PopoverHOC2 />
                <PopoverHOC3 />
                <Popover visible={visible} onMobileClose={handleMobileClose}>
                    Popover content
                </Popover>
            </div>
        );
    `,
    expectedOutput: dedent`
        import { PopoverTrigger, Popover } from "@lifesg/react-design-system/popover";

        const Trigger = () => <div>Trigger</div>;
        const PopoverHOC = <PopoverTrigger><Trigger /></PopoverTrigger>;
        const PopoverHOC2 = <PopoverTrigger trigger="hover" popoverContent="This is the popover content"><Trigger /></PopoverTrigger>;
        const PopoverHOC3 = <PopoverTrigger><div>Trigger</div></PopoverTrigger>;

        const ExampleComponent = () => (
            <div>
                <PopoverHOC />
                <PopoverHOC2 />
                <PopoverHOC3 />
                <Popover visible={visible} onMobileClose={handleMobileClose}>
                    Popover content
                </Popover>
            </div>
        );
    `,
};

export const UnknownV1Usage = {
    input: dedent`
        import { withPopover, Popover } from "@lifesg/react-design-system/popover";

        const PopoverHOC = withPopover(() => <div>Trigger</div>);

        const ExampleComponent = () => (
            <div>
                <PopoverHOC />
                <Popover>
                    Popover content
                </Popover>
            </div>
        );
    `,
    expectedOutput: dedent`
        import { withPopover, Popover } from "@lifesg/react-design-system/popover";

        const PopoverHOC = withPopover(() => <div>Trigger</div>);

        const ExampleComponent = () => (
            <div>
                <PopoverHOC />
                <Popover>
                    Popover content
                </Popover>
            </div>
        );
    `,
};

export const CombinedUsage = {
    input: dedent`
        import { withPopover } from "@lifesg/react-design-system/popover";
        import { PopoverTrigger } from "@lifesg/react-design-system/popover-v2";

        const Trigger = () => <div>Trigger</div>;
        const PopoverHOC = withPopover(Trigger);

        const ExampleComponent = () => (
            <div>
                <PopoverHOC />
                <PopoverTrigger popoverContent="This is the popover content">
                    Trigger
                </PopoverTrigger>
            </div>
        );
    `,
    expectedOutput: dedent`
        import { PopoverTrigger } from "@lifesg/react-design-system/popover";

        const Trigger = () => <div>Trigger</div>;
        const PopoverHOC = <PopoverTrigger><Trigger /></PopoverTrigger>;

        const ExampleComponent = () => (
            <div>
                <PopoverHOC />
                <PopoverTrigger popoverContent="This is the popover content">
                    Trigger
                </PopoverTrigger>
            </div>
        );
    `,
};
