export interface DateNavigatorProps {
    selectedDate: string;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    isLoading?: boolean | undefined;
    onLeftArrowClick?: (currentDate: string) => void | undefined;
    onRightArrowClick?: (currentDate: string) => void | undefined;
}
