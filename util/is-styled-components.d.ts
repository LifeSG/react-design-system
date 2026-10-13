type StyledComponentBrand = {
    readonly _sc: symbol;
};
export default function isStyledComponent(target: any): target is StyledComponentBrand;
export {};
