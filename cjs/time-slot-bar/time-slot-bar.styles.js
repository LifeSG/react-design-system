"use strict";var e=require("@lifesg/react-icons/chevron-left"),o=require("@lifesg/react-icons/chevron-right"),r=require("styled-components"),t=require("../shared/clickable-icon/clickable-icon.js"),i=require("../theme/index.js"),l=require("../typography/typography.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=a(r);const n=1.25,d=e=>"minified"===e?12:40,g=e=>"minified"===e?12:40,p=s.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,$=s.default(t.ClickableIcon)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${i.Colour.bg};
    box-shadow: ${i.Shadow["md-strong"]};
    border-radius: 100%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?r.css`
                  right: 0;
              `:r.css`
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
`,c=s.default(o.ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${i.Colour["icon-primary"]};
`,h=s.default(e.ChevronLeftIcon)`
    font-size: 1rem;
    color: ${i.Colour["icon-primary"]};
`,u=s.default.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+g(e)}px`};
`,b=s.default.div`
    position: relative;
    white-space: nowrap;
    height: ${n}rem;
`,f=s.default.div`
    display: flex;
    white-space: nowrap;
`,x=s.default.div`
    display: inline-block;
    width: ${({$variant:e})=>`${d(e)}px`};
    position: relative;
    border-left: ${i.Border["width-010"]} ${i.Border.solid}
        ${i.Colour["border-stronger"]};
    ${e=>{let o=0;switch(e.$variant){case"default":o=e.$isLongMarker?n:.625;break;case"minified":o=e.$isLongMarker?n:0;break;default:o=0}return r.css`
            height: ${o}rem;
        `}}
`,C=s.default(l.Typography.BodyXS)`
    color: ${i.Colour["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,v=s.default.div`
    ${e=>"vertical"===e.$type?r.css`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:r.css`
                position: absolute;
                height: ${g(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};
    ${({$hoverBgColor:e,$clickable:o})=>e&&o&&r.css`
            &:hover {
                background-color: ${e};
            }
        `}

    ${e=>"stripes"===e.$styleType&&r.css`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||i.Colour["bg-strongest"]} 0px,
                ${e.$bgColor2||i.Colour["bg-strongest"]} 10px,
                ${e.$bgColor||i.Colour["bg-stronger"]} 10px,
                ${e.$bgColor||i.Colour["bg-stronger"]} 20px
            );
            ${(e.$hoverBgColor||e.$hoverBgColor2)&&e.$clickable&&r.css`
                &:hover {
                    background: repeating-linear-gradient(
                        135deg,
                        ${e.$hoverBgColor2||e.$bgColor2||i.Colour["bg-strongest"]}
                            0px,
                        ${e.$hoverBgColor2||e.$bgColor2||i.Colour["bg-strongest"]}
                            10px,
                        ${e.$hoverBgColor||e.$bgColor||i.Colour["bg-stronger"]}
                            10px,
                        ${e.$hoverBgColor||e.$bgColor||i.Colour["bg-stronger"]}
                            20px
                    );
                }
            `}
        `}
`,m=s.default.div`
    position: absolute;
    top: ${n}rem;
    height: ${({$variant:e})=>`${g(e)}px`};
    z-index: 1;
    border-right: ${i.Border["width-010"]} ${i.Border.solid}
        ${i.Colour["border-stronger"]};
`,w=s.default(l.Typography.BodyXS)`
    color: ${e=>e.$color||i.Colour.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;exports.ArrowButton=$,exports.ArrowIconLeft=h,exports.ArrowIconRight=c,exports.CellText=w,exports.Container=p,exports.TimeLabel=C,exports.TimeMarker=x,exports.TimeMarkerWrapper=b,exports.TimeSlot=v,exports.TimeSlotBarContainer=u,exports.TimeSlotBorder=m,exports.TimeSlotWrapper=f,exports.getCellHeight=g,exports.getCellWidth=d;
//# sourceMappingURL=time-slot-bar.styles.js.map
