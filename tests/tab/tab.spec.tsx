import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import { Tab } from "src/tab";

describe("Tab", () => {
    beforeEach(() => {
        jest.resetAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the correct tab item", () => {
        render(
            <Tab>
                <Tab.Item title="Section A">
                    <p>Contents of A</p>
                </Tab.Item>
                <Tab.Item title="Section B">
                    <p>Contents of B</p>
                </Tab.Item>
            </Tab>
        );

        expect(screen.queryAllByText("Section A")).toHaveLength(2); // 2 elements are actually rendered for display purposes
        expect(screen.queryAllByText("Section B")).toHaveLength(2);
        expect(screen.queryByText("Contents of A")).toBeInTheDocument();
        expect(screen.queryByText("Contents of B")).not.toBeInTheDocument();
    });

    it("should render the correct tab item if initialActive is specified", () => {
        render(
            <Tab initialActive={1}>
                <Tab.Item title="Section A">
                    <p>Contents of A</p>
                </Tab.Item>
                <Tab.Item title="Section B">
                    <p>Contents of B</p>
                </Tab.Item>
            </Tab>
        );

        expect(screen.queryByText("Contents of A")).not.toBeInTheDocument();
        expect(screen.queryByText("Contents of B")).toBeInTheDocument();
    });

    it("should render the correct tab item if currentActive is specified", () => {
        render(
            <Tab currentActive={1}>
                <Tab.Item title="Section A">
                    <p>Contents of A</p>
                </Tab.Item>
                <Tab.Item title="Section B">
                    <p>Contents of B</p>
                </Tab.Item>
            </Tab>
        );

        expect(screen.queryByText("Contents of A")).not.toBeInTheDocument();
        expect(screen.queryByText("Contents of B")).toBeInTheDocument();
    });

    it("should render the correct tab item if both initialActive and currentActive are specified. (currentActive to take precedence)", async () => {
        render(
            <Tab initialActive={1} currentActive={0}>
                <Tab.Item title="Section A">
                    <p>Contents of A</p>
                </Tab.Item>
                <Tab.Item title="Section B">
                    <p>Contents of B</p>
                </Tab.Item>
            </Tab>
        );

        expect(screen.queryByText("Contents of A")).toBeInTheDocument();
        expect(screen.queryByText("Contents of B")).not.toBeInTheDocument();
    });

    it("should render the correct tab item when clicked", () => {
        render(
            <Tab>
                <Tab.Item title="Section A">
                    <p>Contents of A</p>
                </Tab.Item>
                <Tab.Item title="Section B">
                    <p>Contents of B</p>
                </Tab.Item>
            </Tab>
        );

        expect(screen.queryByText("Contents of B")).not.toBeInTheDocument();

        const button = screen.getByRole("tab", { name: /Section B/i });
        act(() => {
            fireEvent.click(button);
        });

        expect(screen.queryByText("Contents of B")).toBeInTheDocument();
    });

    it("should call the onTabClick if specified when a tab item is clicked", () => {
        const mockFn = jest.fn();
        render(
            <Tab onTabClick={mockFn}>
                <Tab.Item title="Section A">
                    <p>Contents of A</p>
                </Tab.Item>
                <Tab.Item title="Section B">
                    <p>Contents of B</p>
                </Tab.Item>
            </Tab>
        );

        const button = screen.getByRole("tab", { name: /Section B/i });
        act(() => {
            fireEvent.click(button);
        });

        expect(mockFn).toBeCalledWith("Section B", 1);
    });
});
