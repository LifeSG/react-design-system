import{ChevronLeftIcon as e}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as i}from"@lifesg/react-icons/chevron-right";import t,{css as o}from"styled-components";import{ClickableIcon as r}from"../shared/clickable-icon/clickable-icon.js";import{Typography as n}from"../typography/index.js";import{V3_Colour as l,V3_Shadow as a,V3_Border as s}from"../v3_theme/index.js";const d=1.25,p=e=>"minified"===e?12:40,$=e=>"minified"===e?12:40,g=t.div`
    position: relative;
    display: flex;
    align-items: center;
`,c=t(r)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${l.bg};
    box-shadow: ${a["md-strong"]};
    border-radius: 100%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?o`
                  right: 0;
              `:o`
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
`,h=t(i)`
    width: 1rem;
    height: 1rem;
    color: ${l["icon-primary"]};
`,m=t(e)`
    font-size: 1rem;
    color: ${l["icon-primary"]};
`,b=t.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+$(e)}px`};
`,f=t.div`
    position: relative;
    white-space: nowrap;
    height: ${d}rem;
`,x=t.div`
    display: flex;
    white-space: nowrap;
`,v=t.div`
    display: inline-block;
    width: ${({$variant:e})=>`${p(e)}px`};
    position: relative;
    border-left: ${s["width-010"]} ${s.solid}
        ${l["border-stronger"]};
    ${e=>{let i=0;switch(e.$variant){case"default":i=e.$isLongMarker?d:.625;break;case"minified":i=e.$isLongMarker?d:0;break;default:i=0}return o`
            height: ${i}rem;
        `}}
`,w=t(n.BodyXS)`
    color: ${l["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,u=t.div`
    ${e=>"vertical"===e.$type?o`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:o`
                position: absolute;
                height: ${$(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&o`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||l["bg-strongest"]} 0px,
                ${e.$bgColor2||l["bg-strongest"]} 10px,
                ${e.$bgColor||l["bg-stronger"]} 10px,
                ${e.$bgColor||l["bg-stronger"]} 20px
            );
        `}
`,y=t.div`
    position: absolute;
    top: ${d}rem;
    height: ${({$variant:e})=>`${$(e)}px`};
    z-index: 1;
    border-right: ${s["width-010"]} ${s.solid}
        ${l["border-stronger"]};
`,k=t(n.BodyXS)`
    color: ${e=>e.$color||l.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;export{c as ArrowButton,m as ArrowIconLeft,h as ArrowIconRight,k as CellText,g as Container,w as TimeLabel,v as TimeMarker,f as TimeMarkerWrapper,u as TimeSlot,b as TimeSlotBarContainer,y as TimeSlotBorder,x as TimeSlotWrapper,$ as getCellHeight,p as getCellWidth};
//# sourceMappingURL=time-slot-bar.styles.js.map
