import { Badge } from "../badge";

export const renderFilterBadge = (count?: number) =>
    count !== undefined && count > 0 ? (
        <Badge
            count={count}
            variant="square-number"
            aria-label={`${count} selected`}
        />
    ) : null;
