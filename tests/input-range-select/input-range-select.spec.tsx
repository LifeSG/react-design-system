import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { FormRangeSelect } from "src/form/form-range-select";
import { InputRangeSelect } from "src/input-range-select";
import styled from "styled-components";

jest.mock("react-resize-detector");

// TODO: act can be removed after upgrading react-testing-library
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
const testId = "input-range-select-test-id";

describe("InputRangeSelect", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
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
                    data-testid={testId}
                />
            </Wrapper>
        );

        expect(screen.queryByTestId(testId)).toBeInTheDocument();
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
        it("should open dropdown list when selector is clicked", async () => {
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
                        data-testid={testId}
                    />
                </Wrapper>
            );

            fireEvent.click(screen.getByText("From"));

            await waitFor(() => {
                expect(
                    screen.queryByTestId("dropdown-list")
                ).toBeInTheDocument();
            });
            expect(getListItemByText("From Option A")).toBeInTheDocument();
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

        it("should be able to complete filling up the field by selecting from and to values respectively.", async () => {
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

        it("should be disabled when 'disabled' prop is true", async () => {
            const user = userEvent.setup();

            render(
                <Wrapper>
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                { value: "B", label: "From Option B" },
                            ],
                            to: [{ value: "TA", label: "To Option A" }],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "From", to: "To" }}
                        disabled
                    />
                </Wrapper>
            );

            await user.click(screen.getByText("From"));
            expect(screen.queryByText("From Option A")).not.toBeInTheDocument();

            await user.click(screen.getByText("To"));
            expect(screen.queryByText("From Option A")).not.toBeInTheDocument();
            expect(screen.queryByText("To Option A")).not.toBeInTheDocument();
        });

        it("should be readonly when 'readOnly' prop is true", async () => {
            const user = userEvent.setup();

            render(
                <Wrapper>
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                { value: "B", label: "From Option B" },
                            ],
                            to: [{ value: "TA", label: "To Option A" }],
                        }}
                        data-testid={testId}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "From", to: "To" }}
                        readOnly
                    />
                </Wrapper>
            );

            await user.click(screen.getByText("From"));
            expect(screen.queryByText("From Option A")).not.toBeInTheDocument();

            await user.click(screen.getByText("To"));
            expect(screen.queryByText("From Option A")).not.toBeInTheDocument();
            expect(screen.queryByText("To Option A")).not.toBeInTheDocument();
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

    describe("focus/blur behaviour", () => {
        it("should close dropdown when clicking outside", async () => {
            const user = userEvent.setup();

            render(
                <Wrapper>
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                { value: "B", label: "From Option B" },
                            ],
                            to: [{ value: "TA", label: "To Option A" }],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "From", to: "To" }}
                        data-testid={testId}
                    />
                </Wrapper>
            );

            await user.tab();

            await act(async () => {
                await user.keyboard("{Enter}");
            });
            const firstOption = await screen.findByRole("option", {
                name: "From Option A",
            });
            await waitFor(() => expect(firstOption).toHaveFocus());

            await act(async () => {
                await user.click(document.body);
            });

            await waitFor(() => {
                expect(
                    screen.queryByTestId("dropdown-list")
                ).not.toBeInTheDocument();
                expect(firstOption).not.toBeInTheDocument();
            });
        });

        it("should reset selections when dismissed with incomplete range (only 'from' selected)", async () => {
            const user = userEvent.setup();

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

            await user.tab();

            await act(async () => {
                await user.keyboard("{Enter}");
            });
            const firstOption = await screen.findByRole("option", {
                name: "From Option A",
            });
            await waitFor(() => expect(firstOption).toHaveFocus());

            await act(async () => {
                await user.keyboard("{Enter}");
            });
            expect(screen.getByText("From ... on A")).toBeInTheDocument();

            await screen.findByText("To Option A");
            await act(async () => {
                await user.click(document.body);
            });

            await waitFor(() => {
                expect(screen.getByText("From")).toBeInTheDocument();
                expect(screen.getByText("To")).toBeInTheDocument();
                expect(
                    screen.queryByText("From ... on A")
                ).not.toBeInTheDocument();
            });
        });
    });

    describe("keyboard navigation", () => {
        const getListItems = () => screen.getAllByTestId("list-item");

        it("should move focus with ArrowDown/ArrowUp and select with Enter", async () => {
            const user = userEvent.setup();

            render(
                <Wrapper>
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                { value: "B", label: "From Option B" },
                                { value: "C", label: "From Option C" },
                            ],
                            to: [{ value: "TA", label: "To Option A" }],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "From", to: "To" }}
                    />
                </Wrapper>
            );

            await user.tab();
            await act(async () => {
                await user.keyboard("{Enter}");
            });

            await waitFor(() => {
                expect(getListItemByText("From Option A")).toBeInTheDocument();
            });

            const items = getListItems();
            await waitFor(() => {
                expect(items[0]).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("{ArrowDown}");
            });
            expect(items[1]).toHaveFocus();

            await act(async () => {
                await user.keyboard("{ArrowDown}");
            });
            expect(items[2]).toHaveFocus();

            await act(async () => {
                await user.keyboard("{ArrowUp}");
            });
            expect(items[1]).toHaveFocus();

            await act(async () => {
                await user.keyboard("{Enter}");
            });
            expect(screen.getByText("From ... on B")).toBeInTheDocument();
            await waitFor(() => {
                expect(getListItemByText("To Option A")).toBeInTheDocument();
            });
        });

        it("should move focus to search input when enableSearch=true", async () => {
            const user = userEvent.setup();

            render(
                <Wrapper>
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "From Option A" },
                                { value: "B", label: "From Option B" },
                            ],
                            to: [{ value: "TA", label: "To Option A" }],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "From", to: "To" }}
                        enableSearch
                    />
                </Wrapper>
            );

            await user.tab();
            await act(async () => {
                await user.keyboard("{Enter}");
            });

            const searchInput = await screen.findByTestId("search-input");
            await waitFor(() => {
                expect(searchInput).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("{ArrowDown}");
            });

            const firstOption = await screen.findByRole("option", {
                name: "From Option A",
            });

            await waitFor(() => {
                expect(firstOption).toHaveFocus();
            });
        });

        it("should allow user to finish the entire selection process via keyboard alone", async () => {
            const user = userEvent.setup();

            render(
                <Wrapper>
                    <InputRangeSelect
                        data-testid="input-range-select"
                        options={{
                            from: [{ value: "A", label: "From Option A" }],
                            to: [{ value: "TA", label: "To Option A" }],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "From", to: "To" }}
                    />
                </Wrapper>
            );

            await user.tab();
            const wrapper = screen.getByTestId("input-range-select");
            expect(wrapper).toHaveFocus();

            await act(async () => {
                await user.keyboard("{Enter}");
            });
            const fromOption = await screen.findByRole("option", {
                name: "From Option A",
            });
            await waitFor(() => {
                expect(fromOption).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("{Enter}");
            });
            const toOption = await screen.findByRole("option", {
                name: "To Option A",
            });
            await waitFor(() => {
                expect(toOption).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("{Enter}");
            });
            await waitFor(() => {
                expect(
                    screen.queryByTestId("dropdown-container")
                ).not.toBeInTheDocument();
            });

            expect(screen.getByText("From ... on A")).toBeInTheDocument();
            expect(screen.getByText("To O ... on A")).toBeInTheDocument();
        });
    });
});
