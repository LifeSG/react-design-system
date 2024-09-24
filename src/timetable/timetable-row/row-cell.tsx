import dayjs from "dayjs";
import React, { MutableRefObject } from "react";
import { PopoverTrigger, PopoverV2TriggerProps } from "../../popover-v2";
import { DateHelper } from "../../util";
import {
    Block,
    BlockContainer,
    BlockDescription,
    BlockTitle,
    Gap,
    StyledPopoverContent,
    Wrapper,
} from "./row-cell.style";
import { ROW_CELL_GAP, ROW_INTERVAL, RowCellData } from "../types";

interface RowCellProps extends RowCellData {
    containerRef: MutableRefObject<HTMLDivElement>;
    intervalWidth: number;
    rowBarColor: string;
    onCellClick?: (
        data: RowCellData,
        e: React.MouseEvent
        //cellStart/cellEnd
    ) => void;
}

const Component = ({
    id,
    startTime,
    endTime,
    title,
    subtitle,
    status,
    intervalWidth,
    rowBarColor,
    containerRef,
    customPopover,
    onCellClick,
}: RowCellProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const isOnTheHour = dayjs(endTime, "HH:mm").get("minutes") === 0;
    const isNotAvailable = status !== "default" || !status;
    const numberOfIntervals =
        DateHelper.getTimeDiffInMinutes(startTime, endTime) / ROW_INTERVAL;
    const totalCellWidth = numberOfIntervals * intervalWidth;
    const adjustedCellWidth = isNotAvailable
        ? totalCellWidth - ROW_CELL_GAP
        : totalCellWidth;

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const ConditionalCellWrapper = ({
        wrapper,
        children,
    }: {
        wrapper: (child: JSX.Element) => JSX.Element;
        children: JSX.Element;
    }) => {
        switch (status) {
            case "filled": {
                return wrapper(children);
            }
            case "blocked": {
                return wrapper(children);
            }
            default: {
                return children;
            }
        }
    };

    const buildPopoverContent = (content: string | JSX.Element) => {
        return (
            <StyledPopoverContent
                $padding={customPopover.padding}
                $width={customPopover.width}
            >
                {content}
            </StyledPopoverContent>
        );
    };

    const buildPopoverTrigger = (child: JSX.Element) => {
        if (!customPopover) {
            return child;
        }

        const popoverTriggerProps: PopoverV2TriggerProps = {
            position: "bottom-start",
            rootNode: containerRef,
            removePadding: true,
            offset: 0,
            children: child,
            trigger: customPopover.trigger,
            delay: customPopover.delay ?? 1250,
            popoverContent: () => buildPopoverContent(customPopover.content),
        };

        return (
            <PopoverTrigger {...popoverTriggerProps}>{child}</PopoverTrigger>
        );
    };

    return (
        <ConditionalCellWrapper
            wrapper={(child: JSX.Element) => buildPopoverTrigger(child)}
        >
            <BlockContainer
                key={`block-container-key`}
                data-testid={`block-container`}
                $isOnTheHour={isOnTheHour}
            >
                <Wrapper>
                    <Block
                        $width={adjustedCellWidth}
                        $status={status}
                        $bgColour={rowBarColor}
                        $clickableEmptyCell={!!status}
                        onClick={
                            status
                                ? (e: React.MouseEvent) =>
                                      onCellClick(
                                          {
                                              id,
                                              startTime,
                                              endTime,
                                              status,
                                              title,
                                              subtitle,
                                              customPopover,
                                          },
                                          e
                                      )
                                : undefined
                        }
                    >
                        {title && (
                            <BlockTitle weight={"semibold"}>{title}</BlockTitle>
                        )}
                        {subtitle && (
                            <BlockDescription weight={"bold"}>
                                {subtitle}
                            </BlockDescription>
                        )}
                    </Block>
                    {isNotAvailable && <Gap />}
                </Wrapper>
            </BlockContainer>
        </ConditionalCellWrapper>
    );
};

export const RowCell = React.memo(Component);
