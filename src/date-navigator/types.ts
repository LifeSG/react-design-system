export interface DateNavigatorProps {
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    selectedDate: string;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    loading?: boolean | undefined;
    onLeftArrowClick?: ((currentDate: string) => void) | undefined;
    onRightArrowClick?: ((currentDate: string) => void) | undefined;
}
