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
import { RowBlock } from "./types";

export interface RowCellProps extends RowBlock {
    blockUnit: number;
    bgColour: string;
}

const gap = 2;

export const RowCell = ({
    startTime,
    endTime,
    title,
    subtitle,
    status,
    blockUnit,
    bgColour,
}: RowCellProps) => {
    const isOnTheHour = dayjs(endTime, "HH:mm").get("minutes") === 0;
    const isNotAvailableCell = status !== "DEFAULT";
    const numberOfBlocks =
        DateHelper.getTimeDiffInMinutes(startTime, endTime) / 15;
    const width = numberOfBlocks * blockUnit;
    const adjustedWidth = isNotAvailableCell ? width - gap : width;

    return (
        <>
            <BlockContainer $isOnTheHour={isOnTheHour}>
                <Wrapper>
                    <Block
                        $width={adjustedWidth}
                        $status={status}
                        $bgColour={bgColour}
                    >
                        <BlockTitle weight={"semibold"}>{title}</BlockTitle>
                        <BlockDescription weight={"bold"}>
                            {subtitle}
                        </BlockDescription>
                    </Block>
                    {isNotAvailableCell && <Gap />}
                </Wrapper>
            </BlockContainer>
        </>
    );
};
