import { useEffect, useState } from "react";
import { VisuallyHidden } from ".";

interface LiveAnnouncerProps {
    message?: string;
    politeness?: "polite" | "assertive";
    atomic?: boolean;
    delay?: number;
}

export const LiveAnnouncer = ({
    message,
    politeness = "polite",
    atomic = true,
    delay = 50,
}: LiveAnnouncerProps): JSX.Element => {
    const [announcedMessage, setAnnouncedMessage] = useState("");

    useEffect(() => {
        if (!message) return;

        setAnnouncedMessage("");

        const timer = window.setTimeout(() => {
            setAnnouncedMessage(message);
        }, delay);

        return () => window.clearTimeout(timer);
    }, [message, delay]);

    return (
        <VisuallyHidden
            role="status"
            aria-live={politeness}
            aria-atomic={atomic}
        >
            {announcedMessage}
        </VisuallyHidden>
    );
};
