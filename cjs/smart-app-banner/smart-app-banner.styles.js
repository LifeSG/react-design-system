"use strict";var e=require("@lifesg/react-icons/cross"),r=require("@lifesg/react-icons/star"),t=require("@lifesg/react-icons/star-fill"),i=require("@lifesg/react-icons/star-half"),o=require("styled-components"),a=require("../button/button.js"),n=require("../shared/clickable-icon/clickable-icon.js"),s=require("../typography/index.js"),d=require("../v3_theme/index.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=l(o);const f=o.keyframes`
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
    flex-direction: row;
    align-items: stretch;
    position: fixed;
    margin: 0.5rem 1.25rem;
    ${e=>`top: ${e.$offset}px;`}
    left: 0;
    width: calc(100% - 2.5rem);
    min-height: 5.5rem;
    z-index: 9001;
    background: ${d.V3_Colour.bg};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?o.css`
                  border: ${d.V3_Border["width-010"]} ${d.V3_Border.solid}
                      ${d.V3_Colour.border};
              `:o.css`
                  box-shadow: ${d.V3_Shadow["md-subtle"]};
              `}}
    border-radius: ${d.V3_Radius.md};
    ${e=>{if(e.$isAnimated)return o.css`
                animation: ${f} 0.3s;
            `}}
`,u=c.default.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,p=c.default(n.ClickableIcon)`
    padding: 0;
`,x=c.default(e.CrossIcon)`
    color: ${d.V3_Colour.icon};
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
    ${d.V3_MediaQuery.MaxWidth.xs} {
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
        ${d.V3_Font["body-xs-semibold"]}
    }
`,b=c.default(s.Typography.BodySM)`
    font-weight: ${d.V3_Font.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${d.V3_MediaQuery.MaxWidth.xs} {
        ${d.V3_Font["body-xs-bold"]}
    }
`,v=c.default(s.Typography.BodyXS)`
    overflow-wrap: anywhere;
`,S=c.default.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,_=o.css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,C=c.default(t.StarFillIcon)`
    ${_}
`,V=c.default(i.StarHalfIcon)`
    ${_}
`,B=c.default(r.StarIcon)`
    ${_}
`;exports.BannerIcon=y,exports.ButtonContainer=$,exports.Cross=x,exports.Description=v,exports.DismissButton=p,exports.DismissContainer=u,exports.ProceedContainer=g,exports.RatingContainer=S,exports.SmartAppBannerContainer=m,exports.Star=C,exports.StarEmpty=B,exports.StarHalf=V,exports.StyledButton=w,exports.TextContainer=h,exports.Title=b;
//# sourceMappingURL=smart-app-banner.styles.js.map
