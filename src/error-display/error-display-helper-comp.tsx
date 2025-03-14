import {
    InactivityAdditionalAttributes,
    MaintenanceAdditionalAttributes,
} from "./types";

export const renderDescriptionWithProps =
    (type: "maintenance" | "inactivity") =>
    // eslint-disable-next-line react/display-name
    (
        attrs?: MaintenanceAdditionalAttributes | InactivityAdditionalAttributes
    ) => {
        switch (type) {
            case "maintenance": {
                const descriptionAttrs =
                    attrs as MaintenanceAdditionalAttributes;
                return (
                    <>
                        This service is currently unavailable. Please try again
                        after&nbsp;
                        <strong>{descriptionAttrs.dateString}</strong>.
                    </>
                );
            }
            case "inactivity": {
                const descriptionAttrs =
                    attrs as InactivityAdditionalAttributes;
                const minutes = Math.floor(descriptionAttrs.secondsLeft / 60);
                const seconds = descriptionAttrs.secondsLeft % 60;
                return (
                    <>
                        You&rsquo;ve been inactive for a while. To protect your
                        privacy, you&rsquo;ll be logged out in {minutes} minutes{" "}
                        {seconds} seconds.
                        <br />
                        <br />
                        If you wish to stay on this page, let us know now.
                    </>
                );
            }
        }
    };
