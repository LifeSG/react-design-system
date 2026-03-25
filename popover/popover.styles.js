import t,{css as o}from"styled-components";import{ModalBox as a}from"../modal/modal-box.js";import{V2_MediaQuery as i}from"../v2_media/media.js";import{V2_Transition as r}from"../v2_transition/index.js";const e=t.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${t=>t.$visible?o`
            visibility: visible;
            opacity: 1;
            transition: ${r.Base};
            z-index: 50;
        `:o`
            visibility: hidden;
            opacity: 0;
            transition: ${r.Base};
            z-index: -1;
        `}
    ${t=>(t=>{switch(t){case"top-center":return o`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return o`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return o`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return o`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return o`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return o`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(t.$offset)}

	${i.MaxWidth.mobileL} {
        display: none;
    }
`,n=t(a)`
    padding: 3.5rem 1.25rem 2.5rem;
`,m=t.div`
    position: relative;
    width: fit-content;
`,s=t.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,l=t.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`;export{e as BubbleWrap,l as ContentWrapper,s as HOCTrigger,m as HOCWrapper,n as MobileModalBox};
//# sourceMappingURL=popover.styles.js.map
