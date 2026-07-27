"use strict";var e=require("styled-components"),i=require("../shared/clickable-icon/clickable-icon.js"),t=require("../shared/image-placeholder/image-placeholder.js"),o=require("../theme/index.js"),a=require("../typography/typography.js"),n=require("./stateful-image.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=r(e);const s=l.default(i.ClickableIcon)`
    padding: 0;
    border-radius: 100%;
    background: ${o.Colour.bg};
    color: ${o.Colour["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;
    box-shadow: ${o.Shadow["md-strong"]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: ${o.Border["width-020"]} solid ${o.Colour["border-selected"]};
        outline-offset: 2px;
    }
`,d=l.default.div`
    order: -1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${o.Spacing["spacing-16"]};

    ${i=>i.$hasFileInfo?e.css`
                  flex-shrink: 0;
                  background-color: ${o.Colour["bg-inverse"]};
                  padding-top: calc(
                      ${o.Spacing["spacing-24"]} + ${i.$insetTop||0}px
                  );
                  padding-bottom: ${o.Spacing["spacing-24"]};
                  padding-left: calc(
                      ${o.Spacing["spacing-32"]} + ${i.$insetLeft||0}px
                  );
                  padding-right: calc(
                      ${o.Spacing["spacing-32"]} + ${i.$insetRight||0}px
                  );

                  ${o.MediaQuery.MaxWidth.sm} {
                      padding-top: calc(
                          ${o.Spacing["spacing-16"]} + ${i.$insetTop||0}px
                      );
                      padding-bottom: ${o.Spacing["spacing-16"]};
                      padding-left: calc(
                          ${o.Spacing["spacing-20"]} + ${i.$insetLeft||0}px
                      );
                      padding-right: calc(
                          ${o.Spacing["spacing-20"]} + ${i.$insetRight||0}px
                      );
                  }
              `:e.css`
                  position: absolute;
                  top: calc(
                      ${o.Spacing["spacing-48"]} + ${i.$insetTop||0}px
                  );
                  right: calc(
                      ${o.Spacing["spacing-48"]} + ${i.$insetRight||0}px
                  );
                  z-index: 5;

                  ${o.MediaQuery.MaxWidth.sm} {
                      top: calc(
                          ${o.Spacing["spacing-20"]} + ${i.$insetTop||0}px
                      );
                      right: calc(
                          ${o.Spacing["spacing-20"]} + ${i.$insetRight||0}px
                      );
                  }
              `}
`,p=l.default(s)``,c=l.default(s)`
    color: ${o.Colour["icon-error"]};
`,g=l.default(s)``,h=l.default(s)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${i=>"left"===i.$position&&e.css`
            left: calc(${o.Spacing["spacing-48"]} + ${i.$insetLeft||0}px);

            ${o.MediaQuery.MaxWidth.sm} {
                left: calc(
                    ${o.Spacing["spacing-20"]} + ${i.$insetLeft||0}px
                );
            }
        `}

    ${i=>"right"===i.$position&&e.css`
            right: calc(${o.Spacing["spacing-48"]} + ${i.$insetRight||0}px);

            ${o.MediaQuery.MaxWidth.sm} {
                right: calc(
                    ${o.Spacing["spacing-20"]} + ${i.$insetRight||0}px
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
`,f=l.default.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    flex: 1;
    min-height: 0;
`,x=l.default.div`
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
`,b=l.default.div`
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
`,y=l.default.div`
    height: 100%;
    width: 100%;
    outline: none;

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: ${o.Border["width-020"]} solid ${o.Colour["border-selected"]};
        outline-offset: -2px;
    }
`,w=l.default(n.StatefulImage)`
    height: 100%;
    width: 100%;
    border-radius: ${o.Radius.none};
`,v=l.default(t.ImagePlaceholder)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    border-radius: ${o.Radius.none};
    aspect-ratio: 4 / 3;
`,S=l.default.div`
    display: flex;
    justify-content: center;
    padding: ${o.Spacing["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,C=l.default(a.Typography.BodyXS)`
    display: inline-flex;
    padding: ${o.Spacing["spacing-4"]} ${o.Spacing["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${o.Radius.full};
    background-color: ${o.Colour.bg};
    text-align: center;
`,I=l.default.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${o.Colour["bg-inverse"]};
    padding: ${i=>e.css`
                ${o.Spacing["spacing-24"]} ${o.Spacing["spacing-16"]} calc(${o.Spacing["spacing-24"]} + ${i.$insetBottom||0}px);
            `}
        ${o.MediaQuery.MaxWidth.sm} {
        padding: ${i=>e.css`
                ${o.Spacing["spacing-16"]} ${o.Spacing["spacing-20"]} calc(${o.Spacing["spacing-16"]} + ${i.$insetBottom||0}px);
            `};
    }
`,M=l.default.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${o.Spacing["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,B=l.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${o.MediaQuery.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,j=l.default.div`
    cursor: pointer;
    background-color: ${o.Colour["bg-inverse"]};
    border-radius: ${o.Radius.md};
    border: ${o.Border.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${o.MediaQuery.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${i=>i.$active?e.css`
                  border-width: ${o.Border["width-040"]};
                  border-color: ${o.Colour["border-selected"]};

                  ${o.MediaQuery.MaxWidth.sm} {
                      border-width: ${o.Border["width-020"]};
                  }

                  &:hover {
                      border-color: ${o.Colour["border-selected-hover"]};
                  }
              `:e.css`
                  border-width: ${o.Border["width-010"]};

                  &:hover {
                      border-color: ${o.Colour["border-hover"]};
                  }
              `};
`,T=l.default(n.StatefulImage)`
    height: 100%;
    width: 100%;
`,k=l.default.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${o.Spacing["spacing-8"]};
    overflow: hidden;
    min-width: 0;
    min-height: calc(
        ${o.Font.Spec["body-lh-baseline"]} + ${o.Spacing["spacing-8"]} +
            ${o.Font.Spec["body-lh-md"]}
    );
    ${i=>i.$centerContent&&e.css`
            justify-content: center;
        `}
`,R=l.default(a.Typography.BodyBL)`
    color: ${o.Colour["text-inverse"]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
`,W=l.default(a.Typography.BodyMD)`
    color: ${o.Colour["text-inverse"]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
`;exports.ArrowButton=h,exports.BoxChip=S,exports.CarouselModalContent=u,exports.Chip=C,exports.CloseButton=p,exports.DeleteButton=c,exports.FileInfoFileName=R,exports.FileInfoFileSize=W,exports.FileInfoTextWrapper=k,exports.FocusableImageRegion=y,exports.ImageGalleryContainer=$,exports.ImageGallerySlide=b,exports.ImageGallerySlides=m,exports.ImageGallerySwipe=x,exports.ImageGalleryWrapper=f,exports.MagnifierButton=g,exports.SlideImage=w,exports.SlidePlaceholderImage=v,exports.ThumbnailContainer=I,exports.ThumbnailImage=T,exports.ThumbnailItem=j,exports.ThumbnailItemContainer=B,exports.ThumbnailWrapper=M,exports.TopActionButtons=d;
//# sourceMappingURL=fullscreen-image-carousel.style.js.map
