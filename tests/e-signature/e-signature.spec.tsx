import { fireEvent, render, screen } from "@testing-library/react";
import { ESignature } from "src/e-signature";
import { ThemeProvider } from "../../src/theme";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("ESignature", () => {
    it("should render the default component", () => {
        render(
            <ThemeProvider>
                <ESignature />
            </ThemeProvider>
        );

        expect(getAddSignatureButton()).toBeInTheDocument();
    });

    it("should render the component with value", () => {
        render(
            <ThemeProvider>
                <ESignature value={PNG_BASE64} />
            </ThemeProvider>
        );

        expect(screen.getByAltText("Signature preview")).toHaveAttribute(
            "src",
            PNG_BASE64
        );
    });

    it("should show the progress indicator if loadingProgress is specified", () => {
        render(
            <ThemeProvider>
                <ESignature loadingProgress={0.5} />
            </ThemeProvider>
        );

        expect(
            screen.getByTestId("e-signature-progress-bar")
        ).toBeInTheDocument();
        expect(screen.getByText("Uploading...")).toBeInTheDocument();
        expect(queryAddSignatureButton()).not.toBeInTheDocument();
    });

    it("should render the loading text according to the loadingLabel", () => {
        render(
            <ThemeProvider>
                <ESignature loadingLabel="Loading" loadingProgress={0.5} />
            </ThemeProvider>
        );

        expect(screen.getByText("Loading")).toBeInTheDocument();
    });

    it("should show edit button instead of add signature button if field has a value", () => {
        render(
            <ThemeProvider>
                <ESignature value={PNG_BASE64} />
            </ThemeProvider>
        );

        expect(queryAddSignatureButton()).not.toBeInTheDocument();
        expect(getEditSignatureButton()).toBeInTheDocument();
    });

    it("should show signature modal on clicking add signature button", () => {
        render(
            <ThemeProvider>
                <ESignature />
            </ThemeProvider>
        );
        fireEvent.click(getAddSignatureButton());

        expect(getSignatureModal()).toBeVisible();
    });

    it("should show signature modal on clicking edit button", () => {
        render(
            <ThemeProvider>
                <ESignature value={PNG_BASE64} />
            </ThemeProvider>
        );
        fireEvent.click(getEditSignatureButton());

        expect(getSignatureModal()).toBeVisible();
    });

    it("should dismiss the signature modal, call onChange callback and show the signature preview on clicking save button", () => {
        const changeFn = jest.fn();
        render(
            <ThemeProvider>
                <ESignature onChange={changeFn} />
            </ThemeProvider>
        );

        fireEvent.click(getAddSignatureButton());
        drawSignature();
        fireEvent.click(screen.getByRole("button", { name: "Save" }));

        expect(getSignatureModal()).not.toBeVisible();
        expect(queryAddSignatureButton()).not.toBeInTheDocument();
        expect(getEditSignatureButton()).toBeInTheDocument();
        expect(changeFn).toHaveBeenCalled();
        expect(screen.getByAltText("Signature preview")).toBeInTheDocument();
    });

    it("should dismiss the signature modal and discard unsaved changes on clicking cross button in modal", () => {
        render(
            <ThemeProvider>
                <ESignature value={PNG_BASE64} />
            </ThemeProvider>
        );

        fireEvent.click(getEditSignatureButton());
        drawSignature();
        fireEvent.click(screen.getByTestId("close-button"));

        expect(screen.getByAltText("Signature preview")).toHaveAttribute(
            "src",
            PNG_BASE64
        );
    });

    it("should clear the field value on clicking clear button and save button subsequently", () => {
        render(
            <ThemeProvider>
                <ESignature />
            </ThemeProvider>
        );

        fireEvent.click(getAddSignatureButton());
        drawSignature();
        fireEvent.click(screen.getByRole("button", { name: "Clear" }));
        fireEvent.click(screen.getByRole("button", { name: "Save" }));

        expect(getSignatureModal()).not.toBeVisible();
        expect(getAddSignatureButton()).toBeInTheDocument();
    });
});

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const queryAddSignatureButton = () =>
    screen.queryByRole("button", { name: "Add signature" });
const getAddSignatureButton = () =>
    screen.getByRole("button", { name: "Add signature" });
const getEditSignatureButton = () =>
    screen.getByRole("button", { name: "Edit signature" });
const getSignatureModal = () => screen.queryByTestId("signature-modal");

const drawSignature = () => {
    const canvas = document.querySelector(".upper-canvas")!;
    fireEvent.mouseDown(canvas, { clientX: 20, clientY: 20 });
    fireEvent.mouseMove(canvas, { clientX: 100, clientY: 100 });
    fireEvent.mouseUp(canvas, { clientX: 120, clientY: 120 });
};
// =============================================================================
// CONSTANTS
// =============================================================================
const PNG_BASE64 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+GdT9x8ABqwCuJzKui8AAAAASUVORK5CYII=";
