import { act, fireEvent, render, screen } from "@testing-library/react";
import { DisclaimerLinks, Footer, FooterLinkProps } from "src/footer";
import {
    FooterHelper,
    InternalDisclaimerLinks,
} from "src/footer/footer-helper";
import { ResourceScheme } from "src/theme";
import { KeyOf } from "src/util/utility-types";
import { ThemeProvider } from "styled-components";
import { MOCK_THEME } from "../theme/mock-theme-data";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("Footer", () => {
    const defaultDisclaimerLinks = FooterHelper.getDisclaimerLinks(
        undefined,
        undefined
    );

    const linkTypes = Object.keys(
        defaultDisclaimerLinks
    ) as KeyOf<InternalDisclaimerLinks>[];

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

        for (const type of linkTypes) {
            const text = defaultDisclaimerLinks[type]?.children as string;
            expect(screen.getByText(text)).toBeInTheDocument();
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
                screen.queryByRole("link", {
                    name: "Download on the App Store",
                })
            ).not.toBeInTheDocument();
            expect(
                screen.queryByRole("link", { name: "Get it on Google Play" })
            ).not.toBeInTheDocument();
        });

        it("should render add ons if enabled", () => {
            render(<Footer showDownloadAddon />);

            expect(
                screen.getByRole("link", { name: "Download on the App Store" })
            ).toBeInTheDocument();
            expect(
                screen.getByRole("link", { name: "Get it on Google Play" })
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

            for (const type of linkTypes) {
                const text = defaultDisclaimerLinks[type]?.children as string;
                const anchor = getAnchorElement(text);

                expect(anchor.href).toBe(disclaimerLinks[type]?.href);
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
                    "© 2023 Government of Singapore. Last updated 1 January 2023"
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
            expect(copyrightText.textContent).not.toContain("Last updated");
        });

        it.each<[ResourceScheme, string]>([
            ["lifesg", "© 2023 LifeSG, Government of Singapore"],
            ["bookingsg", "© 2023 BookingSG, Government of Singapore"],
            ["mylegacy", "© 2023 MyLegacy@LifeSG, Government of Singapore"],
            [
                "ccube",
                "© 2023 Citizen Collective Common, Government of Singapore",
            ],
            ["imda", "© 2023 IMDA, Government of Singapore"],
        ])(
            "should render the copyright information for %s resourceScheme by default",
            (resourceScheme, expected) => {
                render(
                    <ThemeProvider theme={{ ...MOCK_THEME, resourceScheme }}>
                        <Footer />
                    </ThemeProvider>
                );

                const copyrightText = screen.getByTestId("copyright-text");
                expect(copyrightText.textContent).toContain(expected);
            }
        );
    });

    describe("logoSrc", () => {
        it("should not render a logo if the theme does not provides one", () => {
            render(<Footer links={CUSTOM_LINKS} />);

            expect(screen.queryByRole("img")).not.toBeInTheDocument();
        });

        it("should be able to render a custom logo", () => {
            const customLogo = "https://www.abc.com/test.png";
            render(<Footer links={CUSTOM_LINKS} logoSrc={customLogo} />);

            expect(screen.getByRole("img")).toHaveAttribute("src", customLogo);
        });

        it("should render a logo if the theme provides one and no logoSrc provided", () => {
            const themeLogo =
                "https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg";

            render(
                <ThemeProvider theme={MOCK_THEME}>
                    <Footer links={CUSTOM_LINKS} />
                </ThemeProvider>
            );
            expect(screen.getByRole("img")).toHaveAttribute("src", themeLogo);
        });
    });

    describe("lastUpdated", () => {
        it("should be able to render custom last updated date", () => {
            const lastUpdated = new Date(2023, 0, 15);
            render(<Footer lastUpdated={lastUpdated} />);

            expect(
                screen.getByText(
                    "© 2023 Government of Singapore. Last updated 15 January 2023"
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
