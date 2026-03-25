"use strict";var e=require("@lifesg/react-icons/cross"),i=require("styled-components"),t=require("../shared/clickable-icon/clickable-icon.js"),o=require("../v3_theme/index.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=s(i);const a=n.default.div`
    display: none;

    ${o.V3_MediaQuery.MaxWidth.lg} {
        display: flex;
    }
`,r=n.default.nav`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${o.V3_Spacing["spacing-16"]};
    background-color: ${o.V3_Colour.bg};
    box-shadow: ${o.V3_Shadow["xs-subtle"]};
    visibility: ${e=>e.$show?"visible":"hidden"};
    outline: none;

    ${e=>e.$show?i.css`
            right: 0;
            transition: all 300ms ${o.V3_Motion["ease-entrance"]};
            transition-delay: 200ms;
        `:i.css`
        right: -100%;
        transition: all 300ms ${o.V3_Motion["ease-exit"]};
    `}
    ${e=>{let t="1vh";return e.$viewHeight&&(t=`${e.$viewHeight}px`),i.css`
            height: calc(${t} * 100);
        `}}

	${o.V3_MediaQuery.MaxWidth.lg} {
        width: 75%;
    }

    ${o.V3_MediaQuery.MaxWidth.sm} {
        width: 100%;
    }
`,l=n.default.div`
    display: flex;
    flex-direction: column;
`,c=n.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${o.V3_Spacing["spacing-40"]} ${o.V3_Spacing["spacing-20"]}
        ${o.V3_Spacing["spacing-32"]};
`,d=n.default(e.CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
`,p=n.default(t.ClickableIcon)`
    position: absolute;
    right: -${o.V3_Spacing["spacing-4"]};
    color: ${o.V3_Colour.icon};

    &:active,
    &:focus {
        color: ${o.V3_Colour["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`;exports.CloseButton=p,exports.CloseIcon=d,exports.Container=r,exports.Content=l,exports.TopBar=c,exports.Wrapper=a;
//# sourceMappingURL=drawer.styles.js.map
