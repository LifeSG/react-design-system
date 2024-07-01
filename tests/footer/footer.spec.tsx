import { act, fireEvent, render, screen } from "@testing-library/react";
import { DisclaimerLinks, Footer, FooterLinkProps } from "../../src";
import { FooterHelper } from "../../src/footer/footer-helper";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Footer", () => {
    beforeEach(() => {
        jest.resetAllMocks();
        jest.useFakeTimers();
        jest.setSystemTime(new Date(2023, 0, 1));
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("should be able to render the component", () => {
        render(<Footer />);

        const defaultDisclaimerLinks = FooterHelper.getDisclaimerLinks();

        for (const link in defaultDisclaimerLinks) {
            expect(
                screen.getByText(defaultDisclaimerLinks[link].children)
            ).toBeInTheDocument();
        }
    });

    describe("children", () => {
        it("should be able to render custom JSX.Element", () => {
            const customText = "custom text";
            render(
                <Footer>
                    <div>{customText}</div>
                </Footer>
            );

            expect(screen.getByText(customText)).toBeInTheDocument();
        });

        it("should be able to render custom JSX.Element[]", () => {
            const customTextOne = "custom text one";
            const customTextTwo = "custom text two";

            render(
                <Footer>
                    <div>{customTextOne}</div>
                    <div>{customTextTwo}</div>
                </Footer>
            );

            expect(screen.getByText(customTextOne)).toBeInTheDocument();
            expect(screen.getByText(customTextTwo)).toBeInTheDocument();
        });
    });

    describe("showDownloadAddon", () => {
        it("should not render add ons by default", () => {
            render(<Footer />);

            expect(
                screen.queryByRole("link", { name: "apple-app-store" })
            ).not.toBeInTheDocument();
            expect(
                screen.queryByRole("link", { name: "google-play-store" })
            ).not.toBeInTheDocument();
        });

        it("should render add ons if enabled", () => {
            render(<Footer showDownloadAddon />);

            expect(
                screen.getByRole("link", { name: "apple-app-store" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("link", { name: "google-play-store" })
            ).toBeInTheDocument();
        });
    });

    describe("disclaimerLinks", () => {
        it("should be able to override the link props", () => {
            const disclaimerLinks: DisclaimerLinks = {
                privacy: {
                    href: "https://www.abc.com/one",
                    target: "_blank",
                    rel: "noopener",
                },
                termsOfUse: {
                    href: "https://www.abc.com/two",
                    target: "_blank",
                    rel: "noopener",
                },
                reportVulnerability: {
                    href: "https://www.abc.com/three",
                    target: "_blank",
                    rel: "noopener",
                },
            };

            render(<Footer disclaimerLinks={disclaimerLinks} />);

            const defaultDisclaimerLinks = FooterHelper.getDisclaimerLinks();

            for (const link in defaultDisclaimerLinks) {
                const anchor = getAnchorElement(
                    defaultDisclaimerLinks[link].children
                );

                expect(anchor.href).toBe(disclaimerLinks[link].href);
            }
        });

        it("should not allow overriding of link text", () => {
            const disclaimerLinks = {
                privacy: {
                    children: "Test",
                    href: "https://www.abc.com/one",
                    target: "_blank",
                    rel: "noopener",
                },
            };

            render(<Footer disclaimerLinks={disclaimerLinks} />);

            const defaultPrivacyText = screen.getByText("Privacy Statement");
            const overridenPrivacyText = screen.queryByText("Test");
            expect(defaultPrivacyText).toBeInTheDocument();
            expect(overridenPrivacyText).not.toBeInTheDocument();
        });
    });

    describe("copyrightInfo", () => {
        it("should render the copyright information by default", () => {
            render(<Footer />);

            expect(
                screen.getByText(
                    "© 2023 LifeSG, Government of Singapore. Last Updated 1 January 2023"
                )
            ).toBeInTheDocument();
        });

        it("should allow custom copyright information", () => {
            const copyrightInfo = "custom copyright info";
            render(<Footer copyrightInfo={copyrightInfo} />);

            expect(screen.getByText(copyrightInfo)).toBeInTheDocument();
        });

        it("should not render lastUpdated if custom copyright information is provided", () => {
            const copyrightInfo = "custom copyright info";
            render(<Footer copyrightInfo={copyrightInfo} />);

            const copyrightText = screen.getByTestId("copyright-text");
            expect(copyrightText.textContent).not.toContain("Last Updated");
        });
    });

    describe("logoSrc", () => {
        it("should render a logo by default", () => {
            render(<Footer links={CUSTOM_LINKS} />);

            expect(screen.getByRole("img")).toHaveAttribute(
                "src",
                LIFESG_LOGO_SRC
            );
        });

        it("should be able to render a custom logo", () => {
            const customLogo = "https://www.abc.com/test.png";
            render(<Footer links={CUSTOM_LINKS} logoSrc={customLogo} />);

            expect(screen.getByRole("img")).toHaveAttribute("src", customLogo);
        });
    });

    describe("lastUpdated", () => {
        it("should be able to render custom last updated date", () => {
            const lastUpdated = new Date(2023, 0, 15);
            render(<Footer lastUpdated={lastUpdated} />);

            expect(
                screen.getByText(
                    "© 2023 LifeSG, Government of Singapore. Last Updated 15 January 2023"
                )
            ).toBeInTheDocument();
        });
    });

    describe("footerLinks", () => {
        it("should be able to render custom links on the top section", () => {
            render(<Footer links={CUSTOM_LINKS} />);

            for (const link of CUSTOM_LINKS[0]) {
                const anchor = getAnchorElement(link.children as string);

                expect(anchor).toBeInTheDocument();
                expect(anchor.href).toBe(link.href);
            }
        });

        it("should be support onFooterLinkClick", () => {
            const spy = jest.fn();
            render(<Footer links={CUSTOM_LINKS} onFooterLinkClick={spy} />);

            const anchor = getAnchorElement("Test one");
            act(() => {
                fireEvent.click(anchor);
            });

            expect(spy).toHaveBeenCalledTimes(1);
        });
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const LIFESG_LOGO_SRC =
    "https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg";
const CUSTOM_LINKS: FooterLinkProps[][] = [
    [
        {
            children: "Test one",
            href: "https://www.abc.com/one",
        },
        {
            children: "Test two",
            href: "https://www.abc.com/two",
        },
    ],
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const getAnchorElement = (name: string): HTMLAnchorElement => {
    return screen.getByRole("link", { name });
};
