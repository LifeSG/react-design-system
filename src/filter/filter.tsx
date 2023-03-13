import { FilterIcon } from "@lifesg/react-icons/filter";
import { CrossIcon } from "@lifesg/react-icons/cross";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "../button/button";
import { Overlay } from "../overlay/overlay";
import { MediaWidths } from "../spec/media-spec";
import { FilterItem } from "./filter-item";
import { FilterProps } from "./types";

export const Filter = ({ items }: FilterProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });
    const [visible, setVisible] = useState(false);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleShowFilter = () => {
        setVisible(true);
    };

    const handleDoneClick = () => {
        setVisible(false);
    };

    const handleDismissClick = () => {
        setVisible(false);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderFilterItems = () => (
        <div>
            {items.map((item, index) => {
                return (
                    <FilterItem
                        key={index}
                        {...item}
                        mode={isMobile ? "mobile" : "default"}
                    />
                );
            })}
        </div>
    );

    const renderMobile = () => {
        return (
            <>
                <Button.Default styleType="light" onClick={handleShowFilter}>
                    <FilterIcon /> Sort & Filters
                </Button.Default>
                {visible && (
                    <Overlay show>
                        <div style={{ background: "#fff" }}>
                            <Button.Default onClick={handleDismissClick}>
                                <CrossIcon />
                            </Button.Default>
                            <div>Filters</div>
                            <Button.Default styleType="link">
                                Clear
                            </Button.Default>
                            <div>{renderFilterItems()}</div>
                            <Button.Default onClick={handleDoneClick}>
                                Done
                            </Button.Default>
                        </div>
                    </Overlay>
                )}
            </>
        );
    };

    const renderDesktop = () => {
        return (
            <div>
                <div>Filters</div>
                <Button.Default styleType="link">Clear</Button.Default>
                {renderFilterItems()}
            </div>
        );
    };

    return isMobile ? renderMobile() : renderDesktop();
};
