import i,{css as t}from"styled-components";import{ClickableIcon as e}from"../shared/clickable-icon/clickable-icon.js";import{ImagePlaceholder as o}from"../shared/image-placeholder/image-placeholder.js";import{Typography as n}from"../typography/index.js";import{V3_Colour as r,V3_Shadow as a,V3_MediaQuery as s,V3_Spacing as c,V3_Radius as d,V3_Border as p}from"../v3_theme/index.js";import{StatefulImage as h}from"./stateful-image.js";const l=i(e)`
    padding: 0;
    border-radius: 100%;
    background: ${r.bg};
    color: ${r["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;
    box-shadow: ${a["md-strong"]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,$=i(l)`
    position: absolute;
    top: ${i=>t`calc(${c["spacing-48"]} + ${i.$insetTop||0}px)`};
    right: ${i=>t`calc(${c["spacing-48"]} + ${i.$insetRight||0}px)`};
    z-index: 5;

    ${s.MaxWidth.sm} {
        top: ${i=>t`calc(${c["spacing-20"]} + ${i.$insetTop||0}px)`};
        right: ${i=>t`calc(${c["spacing-20"]} + ${i.$insetRight||0}px)`};
    }
`,g=i(l)`
    position: absolute;
    top: ${i=>t`calc(${c["spacing-48"]} + ${i.$insetTop||0}px)`};
    right: ${i=>t`calc(2.5rem + ${c["spacing-48"]} + ${c["spacing-16"]} + ${i.$insetRight||0}px)`};

    z-index: 5;

    ${s.MaxWidth.sm} {
        top: ${i=>t`calc(${c["spacing-20"]} + ${i.$insetTop||0}px)`};
        right: ${i=>t`calc(2.5rem + ${c["spacing-20"]} + ${c["spacing-16"]} + ${i.$insetRight||0}px)`};
    }
`,x=i(l)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${i=>"left"===i.$position&&t`
            left: calc(
                ${c["spacing-48"]} + ${i.$insetLeft||0}px
            );
            ${s.MaxWidth.sm} {
                left: calc(
                    ${c["spacing-20"]} + ${i.$insetLeft||0}px
                );
            }
        `}

    ${i=>"right"===i.$position&&t`
            right: calc(
                ${c["spacing-48"]} + ${i.$insetRight||0}px
            );
            ${s.MaxWidth.sm} {
                right: calc(
                    ${c["spacing-20"]} + ${i.$insetRight||0}px
                );
            }
        `}
`,m=i.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,f=i.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,b=i.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,u=i.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,w=i.div`
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
`,v=i(h)`
    height: 100%;
    width: 100%;
    border-radius: ${d.none};
`,y=i(o)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    border-radius: ${d.none};
    aspect-ratio: 4 / 3;
`,j=i.div`
    display: flex;
    justify-content: center;
    padding: ${c["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,k=i(n.BodyXS)`
    display: inline-flex;
    padding: ${c["spacing-4"]} ${c["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${d.full};
    background-color: ${r.bg};
    text-align: center;
`,M=i.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${r["bg-inverse"]};
    padding: ${i=>t`
                ${c["spacing-24"]} ${c["spacing-16"]} calc(${c["spacing-24"]} + ${i.$insetBottom||0}px);
            `}
        ${s.MaxWidth.sm} {
        padding: ${i=>t`
                ${c["spacing-16"]} ${c["spacing-20"]} calc(${c["spacing-16"]} + ${i.$insetBottom||0}px);
            `};
    }
`,W=i.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${c["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,z=i.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${s.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,R=i.div`
    cursor: pointer;
    background-color: ${r["bg-inverse"]};
    border-radius: ${d.md};
    border: ${p.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${s.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${i=>i.$active?t`
                  border-width: ${p["width-040"]};
                  border-color: ${r["border-selected"]};

                  ${s.MaxWidth.sm} {
                      border-width: ${p["width-020"]};
                  }

                  &:hover {
                      border-color: ${r["border-selected-hover"]};
                  }
              `:t`
                  border-width: ${p["width-010"]};

                  &:hover {
                      border-color: ${r["border-hover"]};
                  }
              `};
`,T=i(h)`
    height: 100%;
    width: 100%;
`;export{x as ArrowButton,j as BoxChip,k as Chip,$ as CloseButton,m as ImageGalleryContainer,w as ImageGallerySlide,u as ImageGallerySlides,b as ImageGallerySwipe,f as ImageGalleryWrapper,g as MagnifierButton,v as SlideImage,y as SlidePlaceholderImage,M as ThumbnailContainer,T as ThumbnailImage,R as ThumbnailItem,z as ThumbnailItemContainer,W as ThumbnailWrapper};
//# sourceMappingURL=fullscreen-image-carousel.style.js.map
