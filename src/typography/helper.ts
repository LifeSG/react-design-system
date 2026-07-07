export const createFontSizeStyles = ({
    size,
    lineHeight,
    letterSpacing,
}: {
    size: string;
    lineHeight: string;
    letterSpacing: string;
}) => {
    return `font-size: ${size}; line-height: ${lineHeight}; letter-spacing: ${letterSpacing};`;
};

export const createFontWeightStyles = (weight: string) => {
    return `font-weight: ${weight};`;
};
