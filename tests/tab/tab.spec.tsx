import { render, screen } from "@testing-library/react";
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
                <Tab.Item key={1} title="Section A">
                    <p>Contents of A</p>
                </Tab.Item>
                <Tab.Item key={2} title="Section B">
                    <p>Contents of B</p>
                </Tab.Item>
            </Tab>
        );

        expect(screen.queryByText("Contents of A")).toBeInTheDocument();
        expect(screen.queryByText("Contents of B")).not.toBeInTheDocument();
    });

    it("should render the correct tab item if show is specified", () => {
        render(
            <Tab>
                <Tab.Item key={1} title="Section A">
                    <p>Contents of A</p>
                </Tab.Item>
                <Tab.Item key={2} title="Section B" show>
                    <p>Contents of B</p>
                </Tab.Item>
            </Tab>
        );

        expect(screen.queryByText("Contents of A")).not.toBeInTheDocument();
        expect(screen.queryByText("Contents of B")).toBeInTheDocument();
    });
});
