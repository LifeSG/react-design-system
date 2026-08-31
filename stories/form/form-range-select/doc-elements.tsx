import { TickIcon } from "@lifesg/react-icons/tick";
import styled from "styled-components";
import { Colour } from "src/theme";

const ImageWrapper = styled.div`
    display: flex;
    border-radius: 4px;
    border: 1px solid black;
    overflow: hidden;
    align-items: center;
`;

const Img = styled.img`
    height: 40px;
    width: 184px;
`;

export const CustomImage = ({
    className,
    imageSrc,
    imageAlt,
    ...props
}: React.ComponentPropsWithoutRef<"div"> & {
    imageSrc: string;
    imageAlt: string;
}) => (
    <ImageWrapper {...props} className={className}>
        <Img src={imageSrc} alt={imageAlt ?? ""} />
    </ImageWrapper>
);

const ImageOption = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

export const CustomOption = ({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => (
    <ImageOption {...props} className={className} />
);

export const Checkmark = styled(TickIcon)`
    height: 32px;
    width: 32px;
    color: ${Colour["icon-primary"]};
`;
