import { Badge } from "../badge";

interface FilterBadgeProps {
    count?: number;
}

export const FilterBadge = ({ count }: FilterBadgeProps) =>
    count !== undefined && count > 0 ? (
        <Badge
            count={count}
            variant="square-number"
            aria-label={`${count} selected`}
        />
    ) : null;
