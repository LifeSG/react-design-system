import i,{css as e}from"styled-components";import{ClickableIcon as t}from"../shared/clickable-icon/clickable-icon.js";import{ImagePlaceholder as o}from"../shared/image-placeholder/image-placeholder.js";import{Colour as n,Shadow as r,Border as s,Spacing as d,MediaQuery as a,Radius as c,Font as l}from"../theme/index.js";import{Typography as p}from"../typography/typography.js";import{StatefulImage as h}from"./stateful-image.js";const g=i(t)`
    padding: 0;
    border-radius: 100%;
    background: ${n.bg};
    color: ${n["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;
    box-shadow: ${r["md-strong"]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: ${s["width-020"]} solid ${n["border-selected"]};
        outline-offset: 2px;
    }
`,$=i.div`
    order: -1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${d["spacing-16"]};

    ${i=>i.$hasFileInfo?e`
                  flex-shrink: 0;
                  background-color: ${n["bg-inverse"]};
                  padding-top: calc(
                      ${d["spacing-24"]} + ${i.$insetTop||0}px
                  );
                  padding-bottom: ${d["spacing-24"]};
                  padding-left: calc(
                      ${d["spacing-32"]} + ${i.$insetLeft||0}px
                  );
                  padding-right: calc(
                      ${d["spacing-32"]} + ${i.$insetRight||0}px
                  );

                  ${a.MaxWidth.sm} {
                      padding-top: calc(
                          ${d["spacing-16"]} + ${i.$insetTop||0}px
                      );
                      padding-bottom: ${d["spacing-16"]};
                      padding-left: calc(
                          ${d["spacing-20"]} + ${i.$insetLeft||0}px
                      );
                      padding-right: calc(
                          ${d["spacing-20"]} + ${i.$insetRight||0}px
                      );
                  }
              `:e`
                  position: absolute;
                  top: calc(
                      ${d["spacing-48"]} + ${i.$insetTop||0}px
                  );
                  right: calc(
                      ${d["spacing-48"]} + ${i.$insetRight||0}px
                  );
                  z-index: 5;

                  ${a.MaxWidth.sm} {
                      top: calc(
                          ${d["spacing-20"]} + ${i.$insetTop||0}px
                      );
                      right: calc(
                          ${d["spacing-20"]} + ${i.$insetRight||0}px
                      );
                  }
              `}
`,x=i(g)``,f=i(g)`
    color: ${n["icon-error"]};
`,m=i(g)``,b=i(g)``,u=i(g)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${i=>"left"===i.$position&&e`
            left: calc(${d["spacing-48"]} + ${i.$insetLeft||0}px);

            ${a.MaxWidth.sm} {
                left: calc(
                    ${d["spacing-20"]} + ${i.$insetLeft||0}px
                );
            }
        `}

    ${i=>"right"===i.$position&&e`
            right: calc(${d["spacing-48"]} + ${i.$insetRight||0}px);

            ${a.MaxWidth.sm} {
                right: calc(
                    ${d["spacing-20"]} + ${i.$insetRight||0}px
                );
            }
        `}
`,w=i.div`
    position: relative;
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
`,v=i.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    min-height: 0;
`,y=i.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    flex: 1;
    min-height: 0;
`,j=i.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,k=i.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,M=i.div`
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
`,W=i.div`
    height: 100%;
    width: 100%;
    outline: none;

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: ${s["width-020"]} solid ${n["border-selected"]};
        outline-offset: -2px;
    }
`,z=i(h)`
    height: 100%;
    width: 100%;
    border-radius: ${c.none};
`,B=i(o)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    border-radius: ${c.none};
    aspect-ratio: 4 / 3;
`,R=i.div`
    display: flex;
    justify-content: center;
    padding: ${d["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,L=i(p.BodyXS)`
    display: inline-flex;
    padding: ${d["spacing-4"]} ${d["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${c.full};
    background-color: ${n.bg};
    text-align: center;
`,T=i.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${n["bg-inverse"]};
    padding: ${i=>e`
                ${d["spacing-24"]} ${d["spacing-16"]} calc(${d["spacing-24"]} + ${i.$insetBottom||0}px);
            `}
        ${a.MaxWidth.sm} {
        padding: ${i=>e`
                ${d["spacing-16"]} ${d["spacing-20"]} calc(${d["spacing-16"]} + ${i.$insetBottom||0}px);
            `};
    }
`,S=i.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${d["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,C=i.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${a.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,D=i.div`
    cursor: pointer;
    background-color: ${n["bg-inverse"]};
    border-radius: ${c.md};
    border: ${s.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${a.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${i=>i.$active?e`
                  border-width: ${s["width-040"]};
                  border-color: ${n["border-selected"]};

                  ${a.MaxWidth.sm} {
                      border-width: ${s["width-020"]};
                  }

                  &:hover {
                      border-color: ${n["border-selected-hover"]};
                  }
              `:e`
                  border-width: ${s["width-010"]};

                  &:hover {
                      border-color: ${n["border-hover"]};
                  }
              `};
`,F=i(h)`
    height: 100%;
    width: 100%;
`,I=i.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${d["spacing-8"]};
    overflow: hidden;
    min-width: 0;
    min-height: calc(
        ${l.Spec["body-lh-baseline"]} + ${d["spacing-8"]} +
            ${l.Spec["body-lh-md"]}
    );
    ${i=>i.$centerContent&&e`
            justify-content: center;
        `}
`,X=i(p.BodyBL)`
    color: ${n["text-inverse"]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
`,Y=i(p.BodyMD)`
    color: ${n["text-inverse"]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
`;export{u as ArrowButton,R as BoxChip,w as CarouselModalContent,L as Chip,x as CloseButton,b as CustomActionButton,f as DeleteButton,X as FileInfoFileName,Y as FileInfoFileSize,I as FileInfoTextWrapper,W as FocusableImageRegion,v as ImageGalleryContainer,M as ImageGallerySlide,k as ImageGallerySlides,j as ImageGallerySwipe,y as ImageGalleryWrapper,m as MagnifierButton,z as SlideImage,B as SlidePlaceholderImage,T as ThumbnailContainer,F as ThumbnailImage,D as ThumbnailItem,C as ThumbnailItemContainer,S as ThumbnailWrapper,$ as TopActionButtons};
//# sourceMappingURL=fullscreen-image-carousel.style.js.map
