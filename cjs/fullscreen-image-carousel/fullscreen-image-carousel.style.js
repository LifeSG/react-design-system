"use strict";var e=require("styled-components"),i=require("../shared/clickable-icon/clickable-icon.js"),t=require("../shared/image-placeholder/image-placeholder.js"),a=require("../typography/index.js"),r=require("../v3_theme/index.js"),o=require("./stateful-image.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=n(e);const c=s.default(i.ClickableIcon)`
    padding: 0;
    border-radius: 100%;
    background: ${r.V3_Colour.bg};
    color: ${r.V3_Colour["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;
    box-shadow: ${r.V3_Shadow["md-strong"]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,d=s.default(c)`
    position: absolute;
    top: ${i=>e.css`calc(${r.V3_Spacing["spacing-48"]} + ${i.$insetTop||0}px)`};
    right: ${i=>e.css`calc(${r.V3_Spacing["spacing-48"]} + ${i.$insetRight||0}px)`};
    z-index: 5;

    ${r.V3_MediaQuery.MaxWidth.sm} {
        top: ${i=>e.css`calc(${r.V3_Spacing["spacing-20"]} + ${i.$insetTop||0}px)`};
        right: ${i=>e.css`calc(${r.V3_Spacing["spacing-20"]} + ${i.$insetRight||0}px)`};
    }
`,l=s.default(c)`
    position: absolute;
    top: ${i=>e.css`calc(${r.V3_Spacing["spacing-48"]} + ${i.$insetTop||0}px)`};
    right: ${i=>e.css`calc(2.5rem + ${r.V3_Spacing["spacing-48"]} + ${r.V3_Spacing["spacing-16"]} + ${i.$insetRight||0}px)`};

    z-index: 5;

    ${r.V3_MediaQuery.MaxWidth.sm} {
        top: ${i=>e.css`calc(${r.V3_Spacing["spacing-20"]} + ${i.$insetTop||0}px)`};
        right: ${i=>e.css`calc(2.5rem + ${r.V3_Spacing["spacing-20"]} + ${r.V3_Spacing["spacing-16"]} + ${i.$insetRight||0}px)`};
    }
`,p=s.default(c)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${i=>"left"===i.$position&&e.css`
            left: calc(
                ${r.V3_Spacing["spacing-48"]} + ${i.$insetLeft||0}px
            );
            ${r.V3_MediaQuery.MaxWidth.sm} {
                left: calc(
                    ${r.V3_Spacing["spacing-20"]} + ${i.$insetLeft||0}px
                );
            }
        `}

    ${i=>"right"===i.$position&&e.css`
            right: calc(
                ${r.V3_Spacing["spacing-48"]} + ${i.$insetRight||0}px
            );
            ${r.V3_MediaQuery.MaxWidth.sm} {
                right: calc(
                    ${r.V3_Spacing["spacing-20"]} + ${i.$insetRight||0}px
                );
            }
        `}
`,g=s.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,h=s.default.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,u=s.default.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,$=s.default.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,x=s.default.div`
    flex: 0 0 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .react-transform-wrapper {
        height: 100%;
        width: 100%;
    }
    .react-transform-component {
        height: 100%;
        width: 100%;
    }
`,f=s.default(o.StatefulImage)`
    height: 100%;
    width: 100%;
    border-radius: ${r.V3_Radius.none};
`,m=s.default(t.ImagePlaceholder)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    border-radius: ${r.V3_Radius.none};
    aspect-ratio: 4 / 3;
`,_=s.default.div`
    display: flex;
    justify-content: center;
    padding: ${r.V3_Spacing["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,V=s.default(a.Typography.BodyXS)`
    display: inline-flex;
    padding: ${r.V3_Spacing["spacing-4"]} ${r.V3_Spacing["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${r.V3_Radius.full};
    background-color: ${r.V3_Colour.bg};
    text-align: center;
`,b=s.default.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${r.V3_Colour["bg-inverse"]};
    padding: ${i=>e.css`
                ${r.V3_Spacing["spacing-24"]} ${r.V3_Spacing["spacing-16"]} calc(${r.V3_Spacing["spacing-24"]} + ${i.$insetBottom||0}px);
            `}
        ${r.V3_MediaQuery.MaxWidth.sm} {
        padding: ${i=>e.css`
                ${r.V3_Spacing["spacing-16"]} ${r.V3_Spacing["spacing-20"]} calc(${r.V3_Spacing["spacing-16"]} + ${i.$insetBottom||0}px);
            `};
    }
`,y=s.default.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${r.V3_Spacing["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,S=s.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${r.V3_MediaQuery.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,w=s.default.div`
    cursor: pointer;
    background-color: ${r.V3_Colour["bg-inverse"]};
    border-radius: ${r.V3_Radius.md};
    border: ${r.V3_Border.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${r.V3_MediaQuery.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${i=>i.$active?e.css`
                  border-width: ${r.V3_Border["width-040"]};
                  border-color: ${r.V3_Colour["border-selected"]};

                  ${r.V3_MediaQuery.MaxWidth.sm} {
                      border-width: ${r.V3_Border["width-020"]};
                  }

                  &:hover {
                      border-color: ${r.V3_Colour["border-selected-hover"]};
                  }
              `:e.css`
                  border-width: ${r.V3_Border["width-010"]};

                  &:hover {
                      border-color: ${r.V3_Colour["border-hover"]};
                  }
              `};
`,v=s.default(o.StatefulImage)`
    height: 100%;
    width: 100%;
`;exports.ArrowButton=p,exports.BoxChip=_,exports.Chip=V,exports.CloseButton=d,exports.ImageGalleryContainer=g,exports.ImageGallerySlide=x,exports.ImageGallerySlides=$,exports.ImageGallerySwipe=u,exports.ImageGalleryWrapper=h,exports.MagnifierButton=l,exports.SlideImage=f,exports.SlidePlaceholderImage=m,exports.ThumbnailContainer=b,exports.ThumbnailImage=v,exports.ThumbnailItem=w,exports.ThumbnailItemContainer=S,exports.ThumbnailWrapper=y;
//# sourceMappingURL=fullscreen-image-carousel.style.js.map
