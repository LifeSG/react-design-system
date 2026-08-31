import { act, fireEvent, render, screen } from "@testing-library/react";
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

        expect(mockFn).toHaveBeenCalledWith("Section B", 1);
    });
});

const StandaloneTab = ({
    currentActive,
    initialActive,
    onTabClick,
}: {
    currentActive?: number;
    initialActive?: number;
    onTabClick?: (title: string, index: number) => void;
}) => (
    <Tab.Context
        currentActive={currentActive}
        initialActive={initialActive}
        onTabClick={onTabClick}
    >
        <Tab.TabList>
            <Tab.TabListItem title="Section A" />
            <Tab.TabListItem title="Section B" />
        </Tab.TabList>
        <Tab.Panel index={0}>
            <p>Contents of A</p>
        </Tab.Panel>
        <Tab.Panel index={1}>
            <p>Contents of B</p>
        </Tab.Panel>
    </Tab.Context>
);

describe("Tab.Context (standalone)", () => {
    beforeEach(() => {
        jest.resetAllMocks();

        globalThis.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the first panel by default", () => {
        render(<StandaloneTab />);

        expect(screen.queryByText("Contents of A")).toBeInTheDocument();
        expect(screen.queryByText("Contents of B")).not.toBeInTheDocument();
    });

    it("should render the correct panel when initialActive is specified", () => {
        render(<StandaloneTab initialActive={1} />);

        expect(screen.queryByText("Contents of A")).not.toBeInTheDocument();
        expect(screen.queryByText("Contents of B")).toBeInTheDocument();
    });

    it("should render the correct panel when currentActive is specified", () => {
        render(<StandaloneTab currentActive={1} />);

        expect(screen.queryByText("Contents of A")).not.toBeInTheDocument();
        expect(screen.queryByText("Contents of B")).toBeInTheDocument();
    });

    it("should switch the active panel when a tab is clicked (uncontrolled)", () => {
        render(<StandaloneTab />);

        expect(screen.queryByText("Contents of B")).not.toBeInTheDocument();

        act(() => {
            fireEvent.click(screen.getByRole("tab", { name: /Section B/i }));
        });

        expect(screen.queryByText("Contents of B")).toBeInTheDocument();
        expect(screen.queryByText("Contents of A")).not.toBeInTheDocument();
    });

    it("should call onTabClick with the correct title and index when a tab is clicked", () => {
        const mockFn = jest.fn();
        render(<StandaloneTab onTabClick={mockFn} />);

        act(() => {
            fireEvent.click(screen.getByRole("tab", { name: /Section B/i }));
        });

        expect(mockFn).toHaveBeenCalledWith("Section B", 1);
    });

    it("should not switch the active panel when used in controlled mode", () => {
        const mockFn = jest.fn();
        render(<StandaloneTab currentActive={0} onTabClick={mockFn} />);

        act(() => {
            fireEvent.click(screen.getByRole("tab", { name: /Section B/i }));
        });

        expect(screen.queryByText("Contents of A")).toBeInTheDocument();
        expect(screen.queryByText("Contents of B")).not.toBeInTheDocument();
        expect(mockFn).toHaveBeenCalledWith("Section B", 1);
    });

    it("should use currentActive over initialActive when both are specified", () => {
        render(<StandaloneTab currentActive={0} initialActive={1} />);

        expect(screen.queryByText("Contents of A")).toBeInTheDocument();
        expect(screen.queryByText("Contents of B")).not.toBeInTheDocument();
    });

    it("should update the active panel when currentActive prop changes", () => {
        const { rerender } = render(<StandaloneTab currentActive={0} />);

        expect(screen.queryByText("Contents of A")).toBeInTheDocument();

        rerender(<StandaloneTab currentActive={1} />);

        expect(screen.queryByText("Contents of B")).toBeInTheDocument();
        expect(screen.queryByText("Contents of A")).not.toBeInTheDocument();
    });
});
