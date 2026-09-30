"use strict";var e=require("@lifesg/react-icons/cross"),r=require("@lifesg/react-icons/star"),t=require("@lifesg/react-icons/star-fill"),o=require("@lifesg/react-icons/star-half"),i=require("styled-components"),a=require("../button/button.js"),s=require("../shared/clickable-icon/clickable-icon.js"),n=require("../theme/index.js"),d=require("../typography/typography.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=l(i);const f=i.keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,m=c.default.div`
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
    background: ${n.Colour.bg};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?i.css`
                  border: ${n.Border["width-010"]} ${n.Border.solid}
                      ${n.Colour.border};
              `:i.css`
                  box-shadow: ${n.Shadow["md-subtle"]};
              `}}
    border-radius: ${n.Radius.md};
    ${e=>{if(e.$isAnimated)return i.css`
                animation: ${f} 0.3s;
            `}}
`,u=c.default.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,p=c.default(s.ClickableIcon)`
    padding: 0;
`,x=c.default(e.CrossIcon)`
    color: ${n.Colour.icon};
    height: 1.25rem;
    width: 1.25rem;
`,g=c.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,h=c.default.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${n.MediaQuery.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,y=c.default.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,$=c.default.div`
    max-width: 30%;
`,w=c.default(a.Button.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${n.Font["body-xs-semibold"]}
    }
`,b=c.default(d.Typography.BodySM)`
    font-weight: ${n.Font.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${n.MediaQuery.MaxWidth.xs} {
        ${n.Font["body-xs-bold"]}
    }
`,v=c.default(d.Typography.BodyXS)`
    overflow-wrap: anywhere;
`,S=c.default.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,C=i.css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,B=c.default(t.StarFillIcon)`
    ${C}
`,q=c.default(o.StarHalfIcon)`
    ${C}
`,k=c.default(r.StarIcon)`
    ${C}
`;exports.BannerIcon=y,exports.ButtonContainer=$,exports.Cross=x,exports.Description=v,exports.DismissButton=p,exports.DismissContainer=u,exports.ProceedContainer=g,exports.RatingContainer=S,exports.SmartAppBannerContainer=m,exports.Star=B,exports.StarEmpty=k,exports.StarHalf=q,exports.StyledButton=w,exports.TextContainer=h,exports.Title=b;
//# sourceMappingURL=smart-app-banner.styles.js.map
