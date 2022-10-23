import { SVG } from "./icon-style";
import { IconProps } from "./types";

type Props = Omit<IconProps, "type">;

export const MailUnreadIcon = (props: Props) => {
    return (
        <SVG viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.0205 7.50012H5.78366C4.80103 7.50012 4 8.32441 4 9.33778V22.6591C4 23.6742 4.80103 24.5001 5.78366 24.5001H26.2147C27.1974 24.5001 28 23.6742 28 22.6591V13.6586C27.3744 13.8797 26.7013 14 26 14C25.9813 14 25.9626 13.9999 25.9439 13.9997V22.387H6.05447V11.0576L14.929 17.0996C15.6068 17.564 16.4776 17.5623 17.1424 17.0996L22.9087 13.1434C22.2907 12.7712 21.7454 12.2908 21.2988 11.7285L16.0657 15.3432L7.65002 9.60964H20.2184C20.0761 9.0974 20 8.55758 20 8C20 7.83166 20.0069 7.66495 20.0205 7.50012Z"
                fill="currentColor"
            />
            <circle cx="26" cy="8" r="4" fill="#F57F17" />
        </SVG>
    );
};
