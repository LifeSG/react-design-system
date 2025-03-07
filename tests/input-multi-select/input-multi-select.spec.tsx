import {
    act,
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputMultiSelect } from "../../src/input-multi-select";
import { MockVirtuosoContextWrapper } from "../test-mocks/virtuoso/virtuoso-test-mocks";

const FIELD_TESTID = "test";
const SELECTOR_TESTID = "selector";
const DROPDOWN_TESTID = "dropdown-list";
const OPTIONS = ["Option 1", "Option 2", "Option 3"];

describe("InputMultiSelect", () => {
    const renderDropdown = (dropdown: JSX.Element) => {
        return render(dropdown, { wrapper: MockVirtuosoContextWrapper });
    };

    beforeEach(() => {
        jest.clearAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the component", async () => {
        renderDropdown(
            <InputMultiSelect data-testid={FIELD_TESTID} options={OPTIONS} />
        );

        expect(screen.getByText("Select")).toBeVisible();
        expect(screen.queryByTestId(DROPDOWN_TESTID)).not.toBeInTheDocument();
    });

    it("should open dropdown list when selector is clicked", async () => {
        const user = userEvent.setup();

        renderDropdown(
            <InputMultiSelect data-testid={FIELD_TESTID} options={OPTIONS} />
        );

        await user.click(screen.queryByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        expect(screen.queryByText("Option 1")).toBeVisible();
        expect(screen.queryByText("Option 2")).toBeVisible();
        expect(screen.queryByText("Option 3")).toBeVisible();
    });

    it("should toggle dropdown list when selector is clicked", async () => {
        const user = userEvent.setup();

        renderDropdown(
            <InputMultiSelect data-testid={FIELD_TESTID} options={OPTIONS} />
        );

        await user.click(screen.queryByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.queryByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(
                screen.queryByTestId(DROPDOWN_TESTID)
            ).not.toBeInTheDocument();
        });
    });

    it("should select list item correctly", async () => {
        const user = userEvent.setup();
        const mockOnSelectOptions = jest.fn();

        renderDropdown(
            <InputMultiSelect
                data-testid={FIELD_TESTID}
                options={OPTIONS}
                onSelectOptions={mockOnSelectOptions}
            />
        );

        await user.click(screen.queryByTestId(FIELD_TESTID));

        await waitFor(() => {
            expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        });

        await user.click(screen.queryByText("Option 1"));

        expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
        expect(mockOnSelectOptions).toHaveBeenCalledWith(["Option 1"]);
    });

    describe("focus/blur behaviour", () => {
        it("should call onBlur via outside click", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            renderDropdown(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.queryByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
            await waitFor(() =>
                expect(
                    screen.queryByRole("option", { name: "Option 1" })
                ).toHaveFocus()
            );

            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await user.click(screen.queryByTestId(FIELD_TESTID));

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await user.click(document.body);

            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should dismiss dropdown if it is open", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            renderDropdown(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    onBlur={mockOnBlur}
                />
            );

            await user.click(screen.queryByTestId(FIELD_TESTID));

            await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
            await waitFor(() =>
                expect(
                    screen.queryByRole("option", { name: "Option 1" })
                ).toHaveFocus()
            );

            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await user.click(document.body);

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should dismiss dropdown via Esc key", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            renderDropdown(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    onBlur={mockOnBlur}
                />
            );

            await act(async () => {
                await user.click(screen.queryByTestId(FIELD_TESTID));
            });

            await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
            await waitFor(() =>
                expect(
                    screen.queryByRole("option", { name: "Option 1" })
                ).toHaveFocus()
            );

            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await act(async () => {
                await user.keyboard("{Escape}");
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            expect(screen.queryByTestId(SELECTOR_TESTID)).toHaveFocus();
            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await act(async () => {
                await user.click(document.body);
            });

            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it("should call onFocus and onBlur when cycling through the tab sequence", async () => {
            const user = userEvent.setup();
            const mockOnBlur = jest.fn();

            renderDropdown(
                <>
                    <button data-testid="before" />
                    <InputMultiSelect
                        data-testid={FIELD_TESTID}
                        options={OPTIONS}
                        onBlur={mockOnBlur}
                        enableSearch
                    />
                    <button data-testid="after" />
                </>
            );

            await user.keyboard("{Tab}");

            expect(screen.getByTestId("before")).toHaveFocus();

            await user.keyboard("{Tab} ");

            await waitFor(() => screen.getByTestId(DROPDOWN_TESTID));
            await waitFor(() => {
                expect(
                    screen.getByLabelText("Enter text to search")
                ).toHaveFocus();
            });
            expect(mockOnBlur).toHaveBeenCalledTimes(0);

            await act(async () => {
                await user.keyboard("{Tab}{Tab}");
            });

            await waitForElementToBeRemoved(() =>
                screen.queryByTestId(DROPDOWN_TESTID)
            );

            expect(screen.getByTestId("after")).toHaveFocus();
            expect(mockOnBlur).toHaveBeenCalledTimes(1);

            await act(async () => {
                await user.keyboard("{Shift>}{Tab}{/Shift}");
            });

            await waitFor(() => {
                expect(screen.queryByTestId(SELECTOR_TESTID)).toHaveFocus();
                expect(
                    screen.queryByTestId(DROPDOWN_TESTID)
                ).not.toBeInTheDocument();
                expect(mockOnBlur).toHaveBeenCalledTimes(1);
            });
        });
    });

    describe("search behaviour", () => {
        it("should support default search for string options", async () => {
            const user = userEvent.setup();

            renderDropdown(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    enableSearch
                />
            );

            await user.click(screen.queryByTestId(FIELD_TESTID));

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });
            await waitFor(() => {
                expect(
                    screen.getByLabelText("Enter text to search")
                ).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("1");
            });

            expect(screen.queryByText("Option 1")).toBeVisible();
            expect(screen.queryByText("Option 2")).not.toBeInTheDocument();
        });

        it("should support default search for title", async () => {
            const user = userEvent.setup();

            renderDropdown(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    listExtractor={(item) => ({
                        title: item + " title",
                        secondaryLabel: item + " label",
                    })}
                    enableSearch
                />
            );

            await user.click(screen.queryByTestId(FIELD_TESTID));

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });
            await waitFor(() => {
                expect(
                    screen.getByLabelText("Enter text to search")
                ).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("1 t");
            });

            expect(screen.getByText("Option 1 title")).toBeVisible();
            expect(
                screen.queryByText("Option 2 title")
            ).not.toBeInTheDocument();
        });

        it("should support default search for label", async () => {
            const user = userEvent.setup();

            renderDropdown(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    listExtractor={(item) => ({
                        title: item + " title",
                        secondaryLabel: item + " label",
                    })}
                    enableSearch
                />
            );

            await user.click(screen.queryByTestId(FIELD_TESTID));

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });
            await waitFor(() => {
                expect(
                    screen.getByLabelText("Enter text to search")
                ).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("1 l");
            });

            expect(screen.getByText("Option 1 label")).toBeVisible();
            expect(
                screen.queryByText("Option 2 label")
            ).not.toBeInTheDocument();
        });

        it("should support custom search", async () => {
            const user = userEvent.setup();

            renderDropdown(
                <InputMultiSelect
                    data-testid={FIELD_TESTID}
                    options={OPTIONS}
                    enableSearch
                    searchFunction={() => ["custom 1"]}
                />
            );

            await user.click(screen.queryByTestId(FIELD_TESTID));

            await waitFor(() => {
                expect(screen.queryByTestId(DROPDOWN_TESTID)).toBeVisible();
            });
            await waitFor(() => {
                expect(
                    screen.getByLabelText("Enter text to search")
                ).toHaveFocus();
            });

            await act(async () => {
                await user.keyboard("custom");
            });

            expect(screen.queryByText("custom 1")).toBeVisible();
            expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
        });
    });
});
