import dayjs from "dayjs";
import { DateHelper } from "../util";
import {
    Block,
    BlockContainer,
    BlockDescription,
    BlockTitle,
    Gap,
    Wrapper,
} from "./row-cell.style";
import { ROW_CELL_GAP, ROW_INTERVAL, RowCellData } from "./types";

export interface RowCellProps extends RowCellData {
    intervalWidth: number;
    rowBarColor: string;
}

export const RowCell = ({
    startTime,
    endTime,
    title,
    subtitle,
    status,
    intervalWidth,
    rowBarColor,
}: RowCellProps) => {
    const isOnTheHour = dayjs(endTime, "HH:mm").get("minutes") === 0;
    const isNotAvailable = status !== "DEFAULT";
    const numberOfIntervals =
        DateHelper.getTimeDiffInMinutes(startTime, endTime) / ROW_INTERVAL;
    const totalCellWidth = numberOfIntervals * intervalWidth;
    const adjustedCellWidth = isNotAvailable
        ? totalCellWidth - ROW_CELL_GAP
        : totalCellWidth;

    return (
        <>
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
                    >
                        <BlockTitle weight={"semibold"}>{title}</BlockTitle>
                        <BlockDescription weight={"bold"}>
                            {subtitle}
                        </BlockDescription>
                    </Block>
                    {isNotAvailable && <Gap />}
                </Wrapper>
            </BlockContainer>
        </>
    );
};
