"use strict";var e=require("styled-components"),i=require("../shared/clickable-icon/clickable-icon.js"),t=require("../shared/image-placeholder/image-placeholder.js"),o=require("../typography/index.js"),a=require("../v3_theme/index.js"),n=require("./stateful-image.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=r(e);const d=l.default(i.ClickableIcon)`
    padding: 0;
    border-radius: 100%;
    background: ${a.V3_Colour.bg};
    color: ${a.V3_Colour["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;
    box-shadow: ${a.V3_Shadow["md-strong"]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: ${a.V3_Border["width-020"]} solid ${a.V3_Colour["border-selected"]};
        outline-offset: 2px;
    }
`,s=l.default.div`
    order: -1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${a.V3_Spacing["spacing-16"]};

    ${i=>i.$hasFileInfo?e.css`
                  flex-shrink: 0;
                  background-color: ${a.V3_Colour["bg-inverse"]};
                  padding-top: calc(
                      ${a.V3_Spacing["spacing-24"]} + ${i.$insetTop||0}px
                  );
                  padding-bottom: ${a.V3_Spacing["spacing-24"]};
                  padding-left: calc(
                      ${a.V3_Spacing["spacing-32"]} + ${i.$insetLeft||0}px
                  );
                  padding-right: calc(
                      ${a.V3_Spacing["spacing-32"]} + ${i.$insetRight||0}px
                  );

                  ${a.V3_MediaQuery.MaxWidth.sm} {
                      padding-top: calc(
                          ${a.V3_Spacing["spacing-16"]} + ${i.$insetTop||0}px
                      );
                      padding-bottom: ${a.V3_Spacing["spacing-16"]};
                      padding-left: calc(
                          ${a.V3_Spacing["spacing-20"]} + ${i.$insetLeft||0}px
                      );
                      padding-right: calc(
                          ${a.V3_Spacing["spacing-20"]} + ${i.$insetRight||0}px
                      );
                  }
              `:e.css`
                  position: absolute;
                  top: calc(
                      ${a.V3_Spacing["spacing-48"]} + ${i.$insetTop||0}px
                  );
                  right: calc(
                      ${a.V3_Spacing["spacing-48"]} + ${i.$insetRight||0}px
                  );
                  z-index: 5;

                  ${a.V3_MediaQuery.MaxWidth.sm} {
                      top: calc(
                          ${a.V3_Spacing["spacing-20"]} + ${i.$insetTop||0}px
                      );
                      right: calc(
                          ${a.V3_Spacing["spacing-20"]} + ${i.$insetRight||0}px
                      );
                  }
              `}
`,c=l.default(d)``,p=l.default(d)`
    color: ${a.V3_Colour["icon-error"]};
`,g=l.default(d)``,h=l.default(d)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${i=>"left"===i.$position&&e.css`
            left: calc(
                ${a.V3_Spacing["spacing-48"]} + ${i.$insetLeft||0}px
            );

            ${a.V3_MediaQuery.MaxWidth.sm} {
                left: calc(
                    ${a.V3_Spacing["spacing-20"]} + ${i.$insetLeft||0}px
                );
            }
        `}

    ${i=>"right"===i.$position&&e.css`
            right: calc(
                ${a.V3_Spacing["spacing-48"]} + ${i.$insetRight||0}px
            );

            ${a.V3_MediaQuery.MaxWidth.sm} {
                right: calc(
                    ${a.V3_Spacing["spacing-20"]} + ${i.$insetRight||0}px
                );
            }
        `}
`,u=l.default.div`
    position: relative;
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
`,$=l.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    min-height: 0;
`,x=l.default.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    flex: 1;
    min-height: 0;
`,f=l.default.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,m=l.default.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,_=l.default.div`
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
`,V=l.default.div`
    height: 100%;
    width: 100%;
    outline: none;

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: ${a.V3_Border["width-020"]} solid ${a.V3_Colour["border-selected"]};
        outline-offset: -2px;
    }
`,b=l.default(n.StatefulImage)`
    height: 100%;
    width: 100%;
    border-radius: ${a.V3_Radius.none};
`,y=l.default(t.ImagePlaceholder)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    border-radius: ${a.V3_Radius.none};
    aspect-ratio: 4 / 3;
`,w=l.default.div`
    display: flex;
    justify-content: center;
    padding: ${a.V3_Spacing["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,v=l.default(o.Typography.BodyXS)`
    display: inline-flex;
    padding: ${a.V3_Spacing["spacing-4"]} ${a.V3_Spacing["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${a.V3_Radius.full};
    background-color: ${a.V3_Colour.bg};
    text-align: center;
`,S=l.default.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${a.V3_Colour["bg-inverse"]};
    padding: ${i=>e.css`
                ${a.V3_Spacing["spacing-24"]} ${a.V3_Spacing["spacing-16"]} calc(${a.V3_Spacing["spacing-24"]} + ${i.$insetBottom||0}px);
            `}
        ${a.V3_MediaQuery.MaxWidth.sm} {
        padding: ${i=>e.css`
                ${a.V3_Spacing["spacing-16"]} ${a.V3_Spacing["spacing-20"]} calc(${a.V3_Spacing["spacing-16"]} + ${i.$insetBottom||0}px);
            `};
    }
`,C=l.default.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${a.V3_Spacing["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,I=l.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${a.V3_MediaQuery.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,M=l.default.div`
    cursor: pointer;
    background-color: ${a.V3_Colour["bg-inverse"]};
    border-radius: ${a.V3_Radius.md};
    border: ${a.V3_Border.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${a.V3_MediaQuery.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${i=>i.$active?e.css`
                  border-width: ${a.V3_Border["width-040"]};
                  border-color: ${a.V3_Colour["border-selected"]};

                  ${a.V3_MediaQuery.MaxWidth.sm} {
                      border-width: ${a.V3_Border["width-020"]};
                  }

                  &:hover {
                      border-color: ${a.V3_Colour["border-selected-hover"]};
                  }
              `:e.css`
                  border-width: ${a.V3_Border["width-010"]};

                  &:hover {
                      border-color: ${a.V3_Colour["border-hover"]};
                  }
              `};
`,B=l.default(n.StatefulImage)`
    height: 100%;
    width: 100%;
`,j=l.default.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${a.V3_Spacing["spacing-8"]};
    overflow: hidden;
    min-width: 0;
    min-height: calc(
        ${a.V3_Font.Spec["body-lh-baseline"]} + ${a.V3_Spacing["spacing-8"]} +
            ${a.V3_Font.Spec["body-lh-md"]}
    );
    ${i=>i.$centerContent&&e.css`
            justify-content: center;
        `}
`,T=l.default(o.Typography.BodyBL)`
    color: ${a.V3_Colour["text-inverse"]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
`,k=l.default(o.Typography.BodyMD)`
    color: ${a.V3_Colour["text-inverse"]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
`;exports.ArrowButton=h,exports.BoxChip=w,exports.CarouselModalContent=u,exports.Chip=v,exports.CloseButton=c,exports.DeleteButton=p,exports.FileInfoFileName=T,exports.FileInfoFileSize=k,exports.FileInfoTextWrapper=j,exports.FocusableImageRegion=V,exports.ImageGalleryContainer=$,exports.ImageGallerySlide=_,exports.ImageGallerySlides=m,exports.ImageGallerySwipe=f,exports.ImageGalleryWrapper=x,exports.MagnifierButton=g,exports.SlideImage=b,exports.SlidePlaceholderImage=y,exports.ThumbnailContainer=S,exports.ThumbnailImage=B,exports.ThumbnailItem=M,exports.ThumbnailItemContainer=I,exports.ThumbnailWrapper=C,exports.TopActionButtons=s;
//# sourceMappingURL=fullscreen-image-carousel.style.js.map
