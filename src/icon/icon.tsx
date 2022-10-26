import { DocumentWithPencilIcon } from "./document-with-pencil-icon";
import { IconData } from "./icon-data";
import { SVG } from "./icon-style";
import { LocationUnknownIcon } from "./location-unknown-icon";
import { MailUnreadIcon } from "./mail-unread-icon";
import { IconProps } from "./types";

export const Icon = ({ type, ...props }: IconProps) => {
    /**
     * Complex structure icons
     */
    switch (type) {
        case "document-with-pencil":
            return <DocumentWithPencilIcon {...props} />;
        case "location-unknown":
            return <LocationUnknownIcon {...props} />;
        case "mail-unread":
            return <MailUnreadIcon {...props} />;
        default:
            break;
    }

    /**
     * General icons
     */
    const iconData = IconData[type];

    if (!iconData) return null;

    const renderPaths = () => {
        if (Array.isArray(iconData)) {
            return iconData.map((data, index) => {
                return (
                    <path
                        key={`${type}-${index}`}
                        fill="currentColor"
                        {...data}
                    />
                );
            });
        } else {
            return <path fill="currentColor" {...iconData} />;
        }
    };

    return (
        <SVG viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
            {renderPaths()}
        </SVG>
    );
};
