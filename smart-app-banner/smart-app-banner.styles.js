import{CrossIcon as e}from"@lifesg/react-icons/cross";import{StarIcon as r}from"@lifesg/react-icons/star";import{StarFillIcon as i}from"@lifesg/react-icons/star-fill";import{StarHalfIcon as o}from"@lifesg/react-icons/star-half";import t,{keyframes as m,css as a}from"styled-components";import{Button as d}from"../button/button.js";import{ClickableIcon as n}from"../shared/clickable-icon/clickable-icon.js";import{Colour as l,Radius as s,Border as f,Shadow as c,MediaQuery as p,Font as g}from"../theme/index.js";import{Typography as h}from"../typography/typography.js";const x=m`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,$=t.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;
    position: fixed;
    margin: 0.5rem 1.25rem;
    ${e=>`top: ${e.$offset}px;`}
    left: 0;
    width: calc(100% - 2.5rem);
    min-height: 5.5rem;
    z-index: 9001;
    background: ${l.bg};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?a`
                  border: ${f["width-010"]} ${f.solid}
                      ${l.border};
              `:a`
                  box-shadow: ${c["md-subtle"]};
              `}}
    border-radius: ${s.md};
    ${e=>{if(e.$isAnimated)return a`
                animation: ${x} 0.3s;
            `}}
`,w=t.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,y=t(n)`
    padding: 0;
`,b=t(e)`
    color: ${l.icon};
    height: 1.25rem;
    width: 1.25rem;
`,u=t.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,v=t.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${p.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,j=t.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,k=t.div`
    max-width: 30%;
`,M=t(d.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${g["body-xs-semibold"]}
    }
`,S=t(h.BodySM)`
    font-weight: ${g.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${p.MaxWidth.xs} {
        ${g["body-xs-bold"]}
    }
`,B=t(h.BodyXS)`
    overflow-wrap: anywhere;
`,W=t.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,Y=a`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,z=t(i)`
    ${Y}
`,A=t(o)`
    ${Y}
`,X=t(r)`
    ${Y}
`;export{j as BannerIcon,k as ButtonContainer,b as Cross,B as Description,y as DismissButton,w as DismissContainer,u as ProceedContainer,W as RatingContainer,$ as SmartAppBannerContainer,z as Star,X as StarEmpty,A as StarHalf,M as StyledButton,v as TextContainer,S as Title};
//# sourceMappingURL=smart-app-banner.styles.js.map
