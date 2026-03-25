"use strict";var e=require("@lifesg/react-icons/chevron-left"),r=require("@lifesg/react-icons/chevron-right"),o=require("styled-components"),t=require("../shared/clickable-icon/clickable-icon.js"),i=require("../typography/index.js"),l=require("../v3_theme/index.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=a(o);const n=1.25,d=e=>"minified"===e?12:40,p=e=>"minified"===e?12:40,c=s.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,g=s.default(t.ClickableIcon)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${l.V3_Colour.bg};
    box-shadow: ${l.V3_Shadow["md-strong"]};
    border-radius: 100%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?o.css`
                  right: 0;
              `:o.css`
                  left: 0;
              `}

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:focus {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
`,$=s.default(r.ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${l.V3_Colour["icon-primary"]};
`,u=s.default(e.ChevronLeftIcon)`
    font-size: 1rem;
    color: ${l.V3_Colour["icon-primary"]};
`,h=s.default.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+p(e)}px`};
`,f=s.default.div`
    position: relative;
    white-space: nowrap;
    height: ${n}rem;
`,x=s.default.div`
    display: flex;
    white-space: nowrap;
`,b=s.default.div`
    display: inline-block;
    width: ${({$variant:e})=>`${d(e)}px`};
    position: relative;
    border-left: ${l.V3_Border["width-010"]} ${l.V3_Border.solid}
        ${l.V3_Colour["border-stronger"]};
    ${e=>{let r=0;switch(e.$variant){case"default":r=e.$isLongMarker?n:.625;break;case"minified":r=e.$isLongMarker?n:0;break;default:r=0}return o.css`
            height: ${r}rem;
        `}}
`,m=s.default(i.Typography.BodyXS)`
    color: ${l.V3_Colour["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,v=s.default.div`
    ${e=>"vertical"===e.$type?o.css`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:o.css`
                position: absolute;
                height: ${p(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&o.css`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||l.V3_Colour["bg-strongest"]} 0px,
                ${e.$bgColor2||l.V3_Colour["bg-strongest"]} 10px,
                ${e.$bgColor||l.V3_Colour["bg-stronger"]} 10px,
                ${e.$bgColor||l.V3_Colour["bg-stronger"]} 20px
            );
        `}
`,w=s.default.div`
    position: absolute;
    top: ${n}rem;
    height: ${({$variant:e})=>`${p(e)}px`};
    z-index: 1;
    border-right: ${l.V3_Border["width-010"]} ${l.V3_Border.solid}
        ${l.V3_Colour["border-stronger"]};
`,C=s.default(i.Typography.BodyXS)`
    color: ${e=>e.$color||l.V3_Colour.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;exports.ArrowButton=g,exports.ArrowIconLeft=u,exports.ArrowIconRight=$,exports.CellText=C,exports.Container=c,exports.TimeLabel=m,exports.TimeMarker=b,exports.TimeMarkerWrapper=f,exports.TimeSlot=v,exports.TimeSlotBarContainer=h,exports.TimeSlotBorder=w,exports.TimeSlotWrapper=x,exports.getCellHeight=p,exports.getCellWidth=d;
//# sourceMappingURL=time-slot-bar.styles.js.map
