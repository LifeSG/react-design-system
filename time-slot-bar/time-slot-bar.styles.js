import{ChevronLeftIcon as o}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as e}from"@lifesg/react-icons/chevron-right";import r,{css as i}from"styled-components";import{ClickableIcon as t}from"../shared/clickable-icon/clickable-icon.js";import{Colour as l,Shadow as n,Border as a}from"../theme/index.js";import{Typography as g}from"../typography/typography.js";const $=1.25,s=o=>"minified"===o?12:40,d=o=>"minified"===o?12:40,p=r.div`
    position: relative;
    display: flex;
    align-items: center;
`,c=r(t)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:o})=>"default"===o?"0.25rem":"0rem"};
    background-color: ${l.bg};
    box-shadow: ${n["md-strong"]};
    border-radius: 100%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${o=>"right"===o.$direction?i`
                  right: 0;
              `:i`
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
`,h=r(e)`
    width: 1rem;
    height: 1rem;
    color: ${l["icon-primary"]};
`,b=r(o)`
    font-size: 1rem;
    color: ${l["icon-primary"]};
`,m=r.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:o})=>`${20+d(o)}px`};
`,f=r.div`
    position: relative;
    white-space: nowrap;
    height: ${$}rem;
`,v=r.div`
    display: flex;
    white-space: nowrap;
`,x=r.div`
    display: inline-block;
    width: ${({$variant:o})=>`${s(o)}px`};
    position: relative;
    border-left: ${a["width-010"]} ${a.solid}
        ${l["border-stronger"]};
    ${o=>{let e=0;switch(o.$variant){case"default":e=o.$isLongMarker?$:.625;break;case"minified":e=o.$isLongMarker?$:0;break;default:e=0}return i`
            height: ${e}rem;
        `}}
`,w=r(g.BodyXS)`
    color: ${l["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,u=r.div`
    ${o=>"vertical"===o.$type?i`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:i`
                position: absolute;
                height: ${d(o.$variant)}px;
                width: ${o.$width}px;
                left: ${o.$left}px;
            `}
    background-color: ${({$bgColor:o})=>o};
    cursor: ${({$clickable:o})=>o?"pointer":"default"};
    ${({$hoverBgColor:o,$clickable:e})=>o&&e&&i`
            &:hover {
                background-color: ${o};
            }
        `}

    ${o=>"stripes"===o.$styleType&&i`
            background: repeating-linear-gradient(
                135deg,
                ${o.$bgColor2||l["bg-strongest"]} 0px,
                ${o.$bgColor2||l["bg-strongest"]} 10px,
                ${o.$bgColor||l["bg-stronger"]} 10px,
                ${o.$bgColor||l["bg-stronger"]} 20px
            );
            ${(o.$hoverBgColor||o.$hoverBgColor2)&&o.$clickable&&i`
                &:hover {
                    background: repeating-linear-gradient(
                        135deg,
                        ${o.$hoverBgColor2||o.$bgColor2||l["bg-strongest"]}
                            0px,
                        ${o.$hoverBgColor2||o.$bgColor2||l["bg-strongest"]}
                            10px,
                        ${o.$hoverBgColor||o.$bgColor||l["bg-stronger"]}
                            10px,
                        ${o.$hoverBgColor||o.$bgColor||l["bg-stronger"]}
                            20px
                    );
                }
            `}
        `}
`,y=r.div`
    position: absolute;
    top: ${$}rem;
    height: ${({$variant:o})=>`${d(o)}px`};
    z-index: 1;
    border-right: ${a["width-010"]} ${a.solid}
        ${l["border-stronger"]};
`,k=r(g.BodyXS)`
    color: ${o=>o.$color||l.text(o)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;export{c as ArrowButton,b as ArrowIconLeft,h as ArrowIconRight,k as CellText,p as Container,w as TimeLabel,x as TimeMarker,f as TimeMarkerWrapper,u as TimeSlot,m as TimeSlotBarContainer,y as TimeSlotBorder,v as TimeSlotWrapper,d as getCellHeight,s as getCellWidth};
//# sourceMappingURL=time-slot-bar.styles.js.map
