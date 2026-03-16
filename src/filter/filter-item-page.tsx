import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";

import {
    FilterBody,
    FilterDoneButton,
    FilterFooter,
    FilterHeaderButton,
} from "./filter.styles";
import { FilterItemPageContainer } from "./filter-item-page.styles";
import type { FilterPageProps } from "./types";

export const FilterItemPage = ({
    onDismiss,
    onDone,
    children,
}: FilterPageProps) => {
    return (
        <FilterItemPageContainer>
            <FilterHeaderButton
                onClick={onDismiss}
                focusOutline="browser"
                focusHighlight={false}
                aria-label="Dismiss"
            >
                <ChevronLeftIcon />
            </FilterHeaderButton>
            <FilterBody>{children}</FilterBody>
            <FilterFooter>
                <FilterDoneButton onClick={onDone} type="button">
                    Done
                </FilterDoneButton>
            </FilterFooter>
        </FilterItemPageContainer>
    );
};

FilterItemPage.displayName = "Filter.Page";
