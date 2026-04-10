import { fireEvent, render, screen } from "@testing-library/react";
import { announce } from "@react-aria/live-announcer";
import { LanguageSwitcher } from "../../src/language-switcher";

jest.mock("@react-aria/live-announcer", () => ({
    announce: jest.fn(),
}));

// =============================================================================
// SETUP
// =============================================================================
beforeEach(() => {
    jest.resetAllMocks();

    global.ResizeObserver = jest.fn().mockImplementation(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    }));
});

// =============================================================================
// DROPDOWN TESTS
// =============================================================================
describe("LanguageSwitcher (dropdown)", () => {
    it("should render with default language (English) when no selection provided", () => {
        render(<LanguageSwitcher variant="dropdown" />);

        expect(screen.getByText("English")).toBeInTheDocument();
    });

    it("should display the selected language name on the trigger", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="zh" />);

        expect(screen.getByText("中文")).toBeInTheDocument();
    });

    it("should call onSelectLanguage when a language item is clicked", () => {
        const onSelectLanguage = jest.fn();
        render(
            <LanguageSwitcher
                variant="dropdown"
                selectedLanguage="en"
                onSelectLanguage={onSelectLanguage}
            />
        );

        fireEvent.click(screen.getByRole("combobox"));
        fireEvent.click(screen.getByRole("option", { name: "中文" }));

        expect(onSelectLanguage).toHaveBeenCalledWith("zh");
    });

    it("should not call onSelectLanguage when the already-selected language is clicked", () => {
        const onSelectLanguage = jest.fn();
        render(
            <LanguageSwitcher
                variant="dropdown"
                selectedLanguage="en"
                onSelectLanguage={onSelectLanguage}
            />
        );

        fireEvent.click(screen.getByRole("combobox"));
        fireEvent.click(screen.getByRole("option", { name: "English" }));

        expect(onSelectLanguage).not.toHaveBeenCalled();
    });

    it("should render all four language options in the dropdown", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="en" />);

        fireEvent.click(screen.getByRole("combobox"));

        expect(
            screen.getByRole("option", { name: "English" })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("option", { name: "中文" })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("option", { name: "Melayu" })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("option", { name: "தமிழ்" })
        ).toBeInTheDocument();
    });

    it("should use roving tabindex on list items", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="en" />);

        fireEvent.click(screen.getByRole("combobox"));

        const enItem = screen.getByRole("option", { name: "English" });
        expect(enItem).toHaveAttribute("tabindex", "0");

        const zhItem = screen.getByRole("option", { name: "中文" });
        expect(zhItem).toHaveAttribute("tabindex", "-1");
    });

    it("should navigate options with arrow keys", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="en" />);

        fireEvent.click(screen.getByRole("combobox"));

        const listbox = screen.getByRole("listbox");

        // Arrow down should move focus
        fireEvent.keyDown(listbox, { key: "ArrowDown" });
        expect(screen.getByRole("option", { name: "中文" })).toHaveAttribute(
            "tabindex",
            "0"
        );

        // Arrow up should move back
        fireEvent.keyDown(listbox, { key: "ArrowUp" });
        expect(screen.getByRole("option", { name: "English" })).toHaveAttribute(
            "tabindex",
            "0"
        );
    });

    it("should navigate to first/last with Home/End keys", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="en" />);

        fireEvent.click(screen.getByRole("combobox"));

        const listbox = screen.getByRole("listbox");

        fireEvent.keyDown(listbox, { key: "End" });
        expect(screen.getByRole("option", { name: "தமிழ்" })).toHaveAttribute(
            "tabindex",
            "0"
        );

        fireEvent.keyDown(listbox, { key: "Home" });
        expect(screen.getByRole("option", { name: "English" })).toHaveAttribute(
            "tabindex",
            "0"
        );
    });

    it("should select focused option with Enter key", () => {
        const onSelectLanguage = jest.fn();
        render(
            <LanguageSwitcher
                variant="dropdown"
                selectedLanguage="en"
                onSelectLanguage={onSelectLanguage}
            />
        );

        fireEvent.click(screen.getByRole("combobox"));

        const listbox = screen.getByRole("listbox");
        fireEvent.keyDown(listbox, { key: "ArrowDown" });
        fireEvent.keyDown(listbox, { key: "Enter" });

        expect(onSelectLanguage).toHaveBeenCalledWith("zh");
    });

    it("should select focused option with Space key", () => {
        const onSelectLanguage = jest.fn();
        render(
            <LanguageSwitcher
                variant="dropdown"
                selectedLanguage="en"
                onSelectLanguage={onSelectLanguage}
            />
        );

        fireEvent.click(screen.getByRole("combobox"));

        const listbox = screen.getByRole("listbox");
        fireEvent.keyDown(listbox, { key: "ArrowDown" });
        fireEvent.keyDown(listbox, { key: " " });

        expect(onSelectLanguage).toHaveBeenCalledWith("zh");
    });

    it("should announce selected language for screen readers", () => {
        const onSelectLanguage = jest.fn();
        render(
            <LanguageSwitcher
                variant="dropdown"
                selectedLanguage="en"
                onSelectLanguage={onSelectLanguage}
            />
        );

        fireEvent.click(screen.getByRole("combobox"));
        fireEvent.click(screen.getByRole("option", { name: "中文" }));

        expect(announce).toHaveBeenCalledWith("中文 selected", "polite");
    });
});

// =============================================================================
// LINK CONTAINER TESTS
// =============================================================================
describe("LanguageSwitcher (link-container)", () => {
    it("should render all four language options", () => {
        render(
            <LanguageSwitcher variant="link-container" selectedLanguage="en" />
        );

        expect(screen.getByText("English")).toBeInTheDocument();
        expect(screen.getByText("中文")).toBeInTheDocument();
        expect(screen.getByText("Melayu")).toBeInTheDocument();
        expect(screen.getByText("தமிழ்")).toBeInTheDocument();
    });

    it("should have group role and aria-label on the link list", () => {
        render(
            <LanguageSwitcher variant="link-container" selectedLanguage="en" />
        );

        const group = screen.getByRole("group");
        expect(group).toHaveAttribute("aria-label");
    });

    it("should render with default language (English) when no selection provided", () => {
        render(<LanguageSwitcher variant="link-container" />);

        const englishButton = screen.getByRole("button", { name: "English" });
        expect(englishButton).toHaveAttribute("aria-pressed", "true");
    });

    it("should call onSelectLanguage when an inactive language is clicked", () => {
        const onSelectLanguage = jest.fn();
        render(
            <LanguageSwitcher
                variant="link-container"
                selectedLanguage="en"
                onSelectLanguage={onSelectLanguage}
            />
        );

        fireEvent.click(screen.getByRole("button", { name: "Melayu" }));

        expect(onSelectLanguage).toHaveBeenCalledWith("ms");
    });

    it("should not call onSelectLanguage when the active language is clicked", () => {
        const onSelectLanguage = jest.fn();
        render(
            <LanguageSwitcher
                variant="link-container"
                selectedLanguage="en"
                onSelectLanguage={onSelectLanguage}
            />
        );

        fireEvent.click(screen.getByRole("button", { name: "English" }));

        expect(onSelectLanguage).not.toHaveBeenCalled();
    });

    it("should announce selected language for screen readers", () => {
        const onSelectLanguage = jest.fn();
        render(
            <LanguageSwitcher
                variant="link-container"
                selectedLanguage="en"
                onSelectLanguage={onSelectLanguage}
            />
        );

        fireEvent.click(screen.getByRole("button", { name: "Melayu" }));

        expect(announce).toHaveBeenCalledWith("Melayu selected", "polite");
    });

    it("should set aria-pressed on active language and not on others", () => {
        render(
            <LanguageSwitcher variant="link-container" selectedLanguage="ta" />
        );

        const tamilButton = screen.getByRole("button", { name: "தமிழ்" });
        expect(tamilButton).toHaveAttribute("aria-pressed", "true");

        const englishButton = screen.getByRole("button", { name: "English" });
        expect(englishButton).toHaveAttribute("aria-pressed", "false");
    });

    it("should set lang attribute on each option", () => {
        render(
            <LanguageSwitcher variant="link-container" selectedLanguage="en" />
        );

        expect(screen.getByRole("button", { name: "English" })).toHaveAttribute(
            "lang",
            "en"
        );
        expect(screen.getByRole("button", { name: "中文" })).toHaveAttribute(
            "lang",
            "zh"
        );
        expect(screen.getByRole("button", { name: "Melayu" })).toHaveAttribute(
            "lang",
            "ms"
        );
        expect(screen.getByRole("button", { name: "தமிழ்" })).toHaveAttribute(
            "lang",
            "ta"
        );
    });

    it("should have aria-hidden on separator dividers", () => {
        render(
            <LanguageSwitcher variant="link-container" selectedLanguage="en" />
        );

        const group = screen.getByRole("group");
        const hiddenItems = group.querySelectorAll("[aria-hidden='true']");
        // 3 separators between 4 items
        expect(hiddenItems.length).toBe(3);
    });

    it("should navigate between options with arrow keys", () => {
        render(
            <LanguageSwitcher variant="link-container" selectedLanguage="en" />
        );

        const enButton = screen.getByRole("button", { name: "English" });
        enButton.focus();

        fireEvent.keyDown(enButton, { key: "ArrowRight" });
        expect(document.activeElement).toBe(
            screen.getByRole("button", { name: "中文" })
        );

        fireEvent.keyDown(screen.getByRole("button", { name: "中文" }), {
            key: "ArrowLeft",
        });
        expect(document.activeElement).toBe(
            screen.getByRole("button", { name: "English" })
        );
    });

    it("should select option with Enter key", () => {
        const onSelectLanguage = jest.fn();
        render(
            <LanguageSwitcher
                variant="link-container"
                selectedLanguage="en"
                onSelectLanguage={onSelectLanguage}
            />
        );

        const zhButton = screen.getByRole("button", { name: "中文" });
        zhButton.focus();
        fireEvent.keyDown(zhButton, { key: "Enter" });

        expect(onSelectLanguage).toHaveBeenCalledWith("zh");
    });

    it("should render options inside a list element", () => {
        render(
            <LanguageSwitcher variant="link-container" selectedLanguage="en" />
        );

        const group = screen.getByRole("group");
        const list = group.closest("ul") || group.querySelector("ul");
        expect(list).toBeInTheDocument();

        const listItems = list!.querySelectorAll("li");
        // 4 language items + 3 separator items
        expect(listItems.length).toBe(7);
    });
});
