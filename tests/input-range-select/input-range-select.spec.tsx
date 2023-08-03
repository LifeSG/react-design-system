import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormRangeSelect } from "src/form/form-range-select";
import { InputRangeSelect } from "src/input-range-select";
import styled from "styled-components";

// =============================================================================
// UNIT TESTS
// =============================================================================
const Wrapper = styled.div`
    width: 600px;
`;
const getListItemByText = (text: string) => {
    // Workround to get list item by truncated text.
    return screen.getAllByText(text)[0];
};
describe("InputRangeSelect", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render the component", () => {
        render(
            <Wrapper>
                <InputRangeSelect
                    options={{
                        from: [
                            { value: "A", label: "From Option A" },
                            { value: "B", label: "From Option B" },
                            { value: "C", label: "From Option C" },
                            { value: "D", label: "From Option D" },
                        ],
                        to: [
                            { value: "TA", label: "To Option A" },
                            { value: "TB", label: "To Option B" },
                        ],
                    }}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    placeholders={{ from: "From", to: "To" }}
                />
            </Wrapper>
        );

        expect(screen.getByText("From")).toBeInTheDocument();
        expect(screen.getByText("To")).toBeInTheDocument();
    });

    describe("truncation of display values", () => {
        it("should truncate long option values", () => {
            render(
                <Wrapper>
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                {
                                    value: "B",
                                    label: "A Very Long Option Value That Should Be Truncated",
                                },
                            ],
                            to: [
                                { value: "TA", label: "To Option A" },
                                { value: "TB", label: "To Option B" },
                            ],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        selectedOptions={{
                            from: {
                                value: "B",
                                label: "A Very Long Option Value That Should Be Truncated",
                            },
                        }}
                        placeholders={{ from: "From", to: "To" }}
                    />
                </Wrapper>
            );

            const truncatedOptionValue = "A Ve ... ated";
            expect(screen.getByText(truncatedOptionValue)).toBeInTheDocument();
        });

        it("should truncate long placeholder values", () => {
            render(
                <Wrapper>
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                { value: "B", label: "From Option B" },
                            ],
                            to: [
                                { value: "TA", label: "To Option A" },
                                { value: "TB", label: "To Option B" },
                            ],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{
                            from: "From:This is a very long placeholder for the 'from' input",
                            to: "To:This is a very long placeholder for the 'to' input",
                        }}
                    />
                </Wrapper>
            );

            const fromPlaceholder = screen.getByText("From ... nput");
            const toPlaceholder = screen.getByText("To:T ... nput");

            expect(fromPlaceholder).toBeInTheDocument();
            expect(fromPlaceholder).toHaveStyle("overflow: hidden");

            expect(toPlaceholder).toBeInTheDocument();
            expect(toPlaceholder).toHaveStyle("overflow: hidden");
        });
    });

    describe("select behaviour", () => {
        it("should open dropdown list when selector is clicked", () => {
            render(
                <Wrapper>
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                { value: "B", label: "From Option B" },
                            ],
                            to: [
                                { value: "TA", label: "To Option A" },
                                { value: "TB", label: "To Option B" },
                            ],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "From", to: "To" }}
                    />
                </Wrapper>
            );

            fireEvent.click(screen.getByText("From"));
            expect(getListItemByText("From Option A")).toBeVisible();
        });

        it("should open 'to' dropdown list when 'from' value is selected", async () => {
            render(
                <Wrapper>
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                { value: "B", label: "From Option B" },
                            ],
                            to: [
                                { value: "TA", label: "To Option A" },
                                { value: "TB", label: "To Option B" },
                            ],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "From", to: "To" }}
                    />
                </Wrapper>
            );

            fireEvent.click(screen.getByText("From"));
            fireEvent.click(getListItemByText("From Option A"));
            expect(screen.getByText("From ... on A")).toBeInTheDocument();
            await waitFor(() => {
                expect(getListItemByText("To Option A")).toBeInTheDocument();
            });
        });

        it("should be able to complete filling up the field by selectin from and to values respectively.", async () => {
            render(
                <Wrapper>
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                { value: "B", label: "From Option B" },
                            ],
                            to: [
                                { value: "TA", label: "To Option A" },
                                { value: "TB", label: "To Option B" },
                            ],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "From", to: "To" }}
                    />
                </Wrapper>
            );

            fireEvent.click(screen.getByText("From"));
            fireEvent.click(getListItemByText("From Option A"));
            expect(screen.getByText("From ... on A")).toBeInTheDocument();
            await waitFor(() => {
                expect(getListItemByText("To Option A")).toBeInTheDocument();
            });
            fireEvent.click(getListItemByText("To Option A"));
            expect(screen.getByText("From ... on A")).toBeInTheDocument();
            expect(screen.getByText("To O ... on A")).toBeInTheDocument();
        });

        it("should open 'from' dropdown list when 'to' selector is clicked and 'from' value is not selected", () => {
            render(
                <Wrapper>
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                { value: "B", label: "From Option B" },
                            ],
                            to: [
                                { value: "TA", label: "To Option A" },
                                { value: "TB", label: "To Option B" },
                            ],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "From", to: "To" }}
                        enableSearch
                    />
                </Wrapper>
            );

            fireEvent.click(screen.getByText("To"));
            expect(getListItemByText("From Option A")).toBeInTheDocument();
            expect(screen.queryAllByText("To Option A")).toHaveLength(0);
        });

        it("should be disabled when 'disabled' prop is true", () => {
            render(
                <Wrapper>
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                { value: "B", label: "From Option B" },
                            ],
                            to: [
                                { value: "TA", label: "To Option A" },
                                { value: "TB", label: "To Option B" },
                            ],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "From", to: "To" }}
                        disabled={true} // Set the disabled prop to true
                    />
                </Wrapper>
            );

            const selector = screen.getByTestId(
                "selector"
            ) as HTMLButtonElement;

            expect(selector).toBeDisabled();

            userEvent.click(selector); // Try to open the dropdown
            expect(screen.queryAllByText("From Option A")).toHaveLength(0);
        });

        it("should be readonly when 'readOnly' prop is true", () => {
            render(
                <Wrapper>
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                { value: "B", label: "From Option B" },
                            ],
                            to: [
                                { value: "TA", label: "To Option A" },
                                { value: "TB", label: "To Option B" },
                            ],
                        }}
                        data-testid={"input-range-select"}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "From", to: "To" }}
                        readOnly={true} // Set the readOnly prop to true
                    />
                </Wrapper>
            );

            const selector = screen.getByTestId(
                "selector"
            ) as HTMLButtonElement;
            userEvent.click(selector); // Try to open the dropdown
            expect(screen.queryAllByText("From Option A")).toHaveLength(0);
        });

        it("should display error message when 'error' prop is true", () => {
            render(
                <Wrapper>
                    <FormRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                { value: "B", label: "From Option B" },
                            ],
                            to: [
                                { value: "TA", label: "To Option A" },
                                { value: "TB", label: "To Option B" },
                            ],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "From", to: "To" }}
                        errorMessage={"Error Message"}
                    />
                </Wrapper>
            );

            const errorElement = screen.getByText("Error Message"); // Replace "Error Message" with your actual error message

            expect(errorElement).toBeInTheDocument();
        });
    });
});
