import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";

import * as filterStyles from "./filter.styles";
import * as styles from "./filter-item-page.styles";
import type { FilterPageProps } from "./types";

export const FilterItemPage = ({
    onDismiss,
    onDone,
    children,
}: FilterPageProps) => {
    return (
        <styles.FilterItemPageContainer>
            <filterStyles.FilterHeaderButton
                onClick={onDismiss}
                focusOutline="browser"
                focusHighlight={false}
                aria-label="Dismiss"
            >
                <ChevronLeftIcon />
            </filterStyles.FilterHeaderButton>
            <filterStyles.FilterBody>{children}</filterStyles.FilterBody>
            <filterStyles.FilterFooter>
                <filterStyles.FilterDoneButton onClick={onDone} type="button">
                    Done
                </filterStyles.FilterDoneButton>
            </filterStyles.FilterFooter>
        </styles.FilterItemPageContainer>
    );
};

FilterItemPage.displayName = "Filter.Page";
