import { useContext, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { MediaWidths } from "../media";
import { TabContext } from "./tab-context";
import {
    BoldLabel,
    Chain,
    ChainItem,
    ChainLink,
    CustomFadeWrapper,
    Label,
} from "./tab-link-chain.style";
import { ResizeCallbackParams } from "../shared/fade-wrapper";

interface Props {
    controlledMode?: boolean | undefined;
    "data-testid"?: string | undefined;
    onTabClick?: ((title: string, order: number) => void) | undefined;
    fullWidthIndicatorLine?: boolean | undefined;
}

export const TabLinkChain = ({
    controlledMode,
    "data-testid": testId,
    onTabClick,
    fullWidthIndicatorLine,
}: Props) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const { setCurrentActiveIndex, currentActiveIndex, tabLinks } =
        useContext(TabContext);
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

    const activeLinkRef = useRef<HTMLLIElement>(null);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleChainLinkClick =
        (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            if (!controlledMode) {
                setCurrentActiveIndex(index);
            }

            if (onTabClick) {
                onTabClick(tabLinks[index].title, index);
            }
        };

    const handleResize = ({ content, wrapper }: ResizeCallbackParams) => {
        if (
            content &&
            wrapper &&
            window.innerWidth <= MediaWidths.tablet &&
            activeLinkRef
        ) {
            content.scrollLeft =
                activeLinkRef.current.getBoundingClientRect().left;
        }
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const truncateText = (value: string) => {
        if (isMobile) {
            return value.length > 20 ? `${value.substring(0, 20)}...` : value;
        }

        return value;
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <CustomFadeWrapper onResize={handleResize} data-testid={testId}>
            <Chain
                role="tablist"
                $fullWidthIndicatorLine={fullWidthIndicatorLine}
            >
                {tabLinks.map((linkChain, index) => {
                    const isActive = currentActiveIndex === index;

                    return (
                        <ChainItem
                            key={index}
                            role="none"
                            $active={isActive}
                            ref={isActive ? activeLinkRef : null}
                        >
                            <ChainLink
                                role="tab"
                                type="button"
                                aria-selected={isActive}
                                onClick={handleChainLinkClick(index)}
                                data-testid={`${testId}-link-${index}`}
                            >
                                <Label $active={isActive} weight="regular">
                                    {truncateText(linkChain.title)}
                                </Label>
                                <BoldLabel
                                    $active={isActive}
                                    weight="semibold"
                                    aria-hidden="true"
                                >
                                    {truncateText(linkChain.title)}
                                </BoldLabel>
                            </ChainLink>
                        </ChainItem>
                    );
                })}
            </Chain>
        </CustomFadeWrapper>
    );
};
