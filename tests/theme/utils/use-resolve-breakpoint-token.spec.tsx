import { render, screen } from "@testing-library/react";
import { useResolvedTokenValue } from "src/theme/utils/use-design-token";
import { useResolveBreakpointToken } from "src/theme/utils/use-resolve-breakpoint-token";

jest.mock("src/theme/utils/use-design-token", () => ({
    useDesignToken: jest.fn(),
    useResolvedTokenValue: jest.fn(),
}));

const mockUseResolvedTokenValue = jest.mocked(useResolvedTokenValue);

// Test consumer renders the hook result into the DOM so we can assert on it.
// This avoids needing renderHook, which is only available in @testing-library/react v13+.
const TestConsumer = ({
    tokenName,
    fallback,
}: {
    tokenName: string;
    fallback?: string;
}) => {
    const result = useResolveBreakpointToken(tokenName, fallback);

    return <div data-testid="result">{result}</div>;
};

const renderToken = (tokenName: string, fallback?: string) => {
    render(<TestConsumer tokenName={tokenName} fallback={fallback} />);

    return screen.getByTestId("result").textContent;
};

describe("useResolveBreakpointToken", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("when token resolves to a valid CSS length", () => {
        it("returns the resolved px value", () => {
            mockUseResolvedTokenValue.mockReturnValue("481px");

            expect(renderToken("md-min")).toBe("481px");
        });

        it("accepts unitless zero from CSS", () => {
            mockUseResolvedTokenValue.mockReturnValue("0");

            expect(renderToken("xxs-min")).toBe("0");
        });

        it("accepts rem values", () => {
            mockUseResolvedTokenValue.mockReturnValue("2rem");

            expect(renderToken("md-min")).toBe("2rem");
        });
    });

    describe("when token is unresolved and a fallback is provided", () => {
        it("returns the fallback when token resolves to empty string", () => {
            mockUseResolvedTokenValue.mockReturnValue("");

            expect(renderToken("md-min", "768px")).toBe("768px");
        });

        it("returns the fallback when token resolves to an invalid CSS length", () => {
            mockUseResolvedTokenValue.mockReturnValue("not-a-length");

            expect(renderToken("md-min", "768px")).toBe("768px");
        });

        it("trims whitespace from fallback", () => {
            mockUseResolvedTokenValue.mockReturnValue("");

            expect(renderToken("md-min", "  480px  ")).toBe("480px");
        });
    });

    describe("when token is unresolved and no valid fallback is given", () => {
        it("returns undefined when no fallback is provided", () => {
            mockUseResolvedTokenValue.mockReturnValue("");

            expect(renderToken("md-min")).toBe("");
        });

        it("returns undefined when fallback is not a valid CSS length", () => {
            mockUseResolvedTokenValue.mockReturnValue("");

            expect(renderToken("md-min", "invalid")).toBe("");
        });
    });

    describe("when tokenName is not a known breakpoint token", () => {
        it("returns fallback when token is unrecognised", () => {
            mockUseResolvedTokenValue.mockReturnValue("");

            expect(renderToken("not-a-breakpoint", "100px")).toBe("100px");
        });

        it("returns undefined when token is unrecognised and no fallback", () => {
            mockUseResolvedTokenValue.mockReturnValue("");

            expect(renderToken("not-a-breakpoint")).toBe("");
        });
    });
});
