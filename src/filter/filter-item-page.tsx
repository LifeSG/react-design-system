import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";

import { Button } from "../button";
import { ClickableIcon } from "../shared/clickable-icon";
import * as filterStyles from "./filter.styles";
import * as styles from "./filter-item-page.styles";
import type { FilterPageProps } from "./types";

export const FilterItemPage = ({
    onDismiss,
    onDone,
    children,
    "data-testid": dataTestId,
}: FilterPageProps) => {
    return (
        <div
            className={styles.filterItemPageContainer}
            data-testid={dataTestId}
        >
            <ClickableIcon
                className={filterStyles.filterHeaderButton}
                onClick={onDismiss}
                focusOutline="browser"
                focusHighlight={false}
                aria-label="Dismiss"
            >
                <ChevronLeftIcon />
            </ClickableIcon>
            <div className={filterStyles.filterBody}>{children}</div>
            <div className={filterStyles.filterFooter}>
                <Button
                    className={filterStyles.filterDoneButton}
                    onClick={onDone}
                    type="button"
                >
                    Done
                </Button>
            </div>
        </div>
    );
};

FilterItemPage.displayName = "Filter.Page";
