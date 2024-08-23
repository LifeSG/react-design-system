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
import { RowCellData } from "./types";

export interface RowCellProps extends RowCellData {
    intervalWidth: number;
    bgColour: string;
}

const gap = 2;
const interval = 15;

export const RowCell = ({
    id,
    startTime,
    endTime,
    title,
    subtitle,
    status,
    intervalWidth,
    bgColour,
}: RowCellProps) => {
    const isOnTheHour = dayjs(endTime, "HH:mm").get("minutes") === 0;
    const isNotAvailable = status !== "DEFAULT";
    const numberOfIntervals =
        DateHelper.getTimeDiffInMinutes(startTime, endTime) / interval;
    const totalCellWidth = numberOfIntervals * intervalWidth;
    const adjustedCellWidth = isNotAvailable
        ? totalCellWidth - gap
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
                        $bgColour={bgColour}
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
