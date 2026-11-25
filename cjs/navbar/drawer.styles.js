"use strict";var e=require("@lifesg/react-icons/cross"),i=require("styled-components"),t=require("../shared/clickable-icon/clickable-icon.js"),o=require("../theme/index.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(i);const s=a.default.div`
    display: none;

    ${o.MediaQuery.MaxWidth.lg} {
        display: flex;
    }
`,r=a.default.nav`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${o.Spacing["spacing-16"]};
    background-color: ${o.Colour.bg};
    box-shadow: ${o.Shadow["xs-subtle"]};
    visibility: ${e=>e.$show?"visible":"hidden"};
    outline: none;

    ${e=>e.$show?i.css`
            right: 0;
            transition: all 300ms ${o.Motion["ease-entrance"]};
            transition-delay: 200ms;
        `:i.css`
        right: -100%;
        transition: all 300ms ${o.Motion["ease-exit"]};
    `}
    ${e=>{let t="1vh";return e.$viewHeight&&(t=`${e.$viewHeight}px`),i.css`
            height: calc(${t} * 100);
        `}}

	${o.MediaQuery.MaxWidth.lg} {
        width: 75%;
    }

    ${o.MediaQuery.MaxWidth.sm} {
        width: 100%;
    }
`,l=a.default.div`
    display: flex;
    flex-direction: column;
`,c=a.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${o.Spacing["spacing-40"]} ${o.Spacing["spacing-20"]}
        ${o.Spacing["spacing-32"]};
`,d=a.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`,p=a.default(e.CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
`,h=a.default(t.ClickableIcon)`
    position: absolute;
    right: -${o.Spacing["spacing-4"]};
    color: ${o.Colour.icon};

    &:active,
    &:focus {
        color: ${o.Colour["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`;exports.BrandAddonContainer=d,exports.CloseButton=h,exports.CloseIcon=p,exports.Container=r,exports.Content=l,exports.TopBar=c,exports.Wrapper=s;
//# sourceMappingURL=drawer.styles.js.map
