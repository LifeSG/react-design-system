import { fireEvent, render, screen } from "@testing-library/react";
import { LanguageSwitcher } from "../../src/language-switcher";

// =============================================================================
// DROPDOWN TESTS
// =============================================================================
describe("LanguageSwitcher (dropdown)", () => {
    it("should render the trigger with the selected language", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="en" />);

        expect(screen.getByText("English")).toBeInTheDocument();
    });

    it("should render with default language (English) when no selection provided", () => {
        render(<LanguageSwitcher variant="dropdown" />);

        expect(screen.getByText("English")).toBeInTheDocument();
    });

    it("should display the selected language name on the trigger", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="zh" />);

        expect(screen.getByText("中文")).toBeInTheDocument();
    });

    it("should have combobox role and aria attributes on trigger", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="en" />);

        const trigger = screen.getByTestId("language-switcher--trigger");
        expect(trigger).toHaveAttribute("role", "combobox");
        expect(trigger).toHaveAttribute("aria-expanded", "false");
        expect(trigger).toHaveAttribute("aria-haspopup", "listbox");
        expect(trigger).toHaveAttribute("aria-label");
    });

    it("should have aria-hidden on decorative icons", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="en" />);

        const trigger = screen.getByTestId("language-switcher--trigger");
        const hiddenIcons = trigger.querySelectorAll("[aria-hidden='true']");
        expect(hiddenIcons.length).toBeGreaterThanOrEqual(2);
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

        fireEvent.click(screen.getByTestId("language-switcher--trigger"));
        fireEvent.click(screen.getByTestId("language-switcher--item-zh"));

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

        fireEvent.click(screen.getByTestId("language-switcher--trigger"));
        fireEvent.click(screen.getByTestId("language-switcher--item-en"));

        expect(onSelectLanguage).not.toHaveBeenCalled();
    });

    it("should render all four language options in the dropdown", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="en" />);

        fireEvent.click(screen.getByTestId("language-switcher--trigger"));

        expect(
            screen.getByTestId("language-switcher--item-en")
        ).toBeInTheDocument();
        expect(
            screen.getByTestId("language-switcher--item-zh")
        ).toBeInTheDocument();
        expect(
            screen.getByTestId("language-switcher--item-ms")
        ).toBeInTheDocument();
        expect(
            screen.getByTestId("language-switcher--item-ta")
        ).toBeInTheDocument();
    });

    it("should set role=option, lang, and aria-selected on list items", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="en" />);

        fireEvent.click(screen.getByTestId("language-switcher--trigger"));

        const enItem = screen.getByTestId("language-switcher--item-en");
        expect(enItem).toHaveAttribute("role", "option");
        expect(enItem).toHaveAttribute("lang", "en");
        expect(enItem).toHaveAttribute("aria-selected", "true");

        const zhItem = screen.getByTestId("language-switcher--item-zh");
        expect(zhItem).toHaveAttribute("role", "option");
        expect(zhItem).toHaveAttribute("lang", "zh");
        expect(zhItem).toHaveAttribute("aria-selected", "false");
    });

    it("should use roving tabindex on list items", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="en" />);

        fireEvent.click(screen.getByTestId("language-switcher--trigger"));

        const enItem = screen.getByTestId("language-switcher--item-en");
        expect(enItem).toHaveAttribute("tabindex", "0");

        const zhItem = screen.getByTestId("language-switcher--item-zh");
        expect(zhItem).toHaveAttribute("tabindex", "-1");
    });

    it("should render a listbox with aria-label", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="en" />);

        fireEvent.click(screen.getByTestId("language-switcher--trigger"));

        const listbox = screen.getByRole("listbox");
        expect(listbox).toHaveAttribute("aria-label");
    });

    it("should navigate options with arrow keys", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="en" />);

        fireEvent.click(screen.getByTestId("language-switcher--trigger"));

        const listbox = screen.getByRole("listbox");

        // Arrow down should move focus
        fireEvent.keyDown(listbox, { key: "ArrowDown" });
        const zhItem = screen.getByTestId("language-switcher--item-zh");
        expect(zhItem).toHaveAttribute("tabindex", "0");

        // Arrow up should move back
        fireEvent.keyDown(listbox, { key: "ArrowUp" });
        const enItem = screen.getByTestId("language-switcher--item-en");
        expect(enItem).toHaveAttribute("tabindex", "0");
    });

    it("should navigate to first/last with Home/End keys", () => {
        render(<LanguageSwitcher variant="dropdown" selectedLanguage="en" />);

        fireEvent.click(screen.getByTestId("language-switcher--trigger"));

        const listbox = screen.getByRole("listbox");

        fireEvent.keyDown(listbox, { key: "End" });
        const taItem = screen.getByTestId("language-switcher--item-ta");
        expect(taItem).toHaveAttribute("tabindex", "0");

        fireEvent.keyDown(listbox, { key: "Home" });
        const enItem = screen.getByTestId("language-switcher--item-en");
        expect(enItem).toHaveAttribute("tabindex", "0");
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

        fireEvent.click(screen.getByTestId("language-switcher--trigger"));

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

        fireEvent.click(screen.getByTestId("language-switcher--trigger"));

        const listbox = screen.getByRole("listbox");
        fireEvent.keyDown(listbox, { key: "ArrowDown" });
        fireEvent.keyDown(listbox, { key: " " });

        expect(onSelectLanguage).toHaveBeenCalledWith("zh");
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

    it("should have group role and aria-label on wrapper", () => {
        render(
            <LanguageSwitcher variant="link-container" selectedLanguage="en" />
        );

        const wrapper = screen.getByTestId("language-switcher");
        expect(wrapper).toHaveAttribute("role", "group");
        expect(wrapper).toHaveAttribute("aria-label");
    });

    it("should render with default language (English) when no selection provided", () => {
        render(<LanguageSwitcher variant="link-container" />);

        const englishButton = screen.getByTestId("language-switcher--item-en");
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

        fireEvent.click(screen.getByTestId("language-switcher--item-ms"));

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

        fireEvent.click(screen.getByTestId("language-switcher--item-en"));

        expect(onSelectLanguage).not.toHaveBeenCalled();
    });

    it("should set aria-pressed on active language and not on others", () => {
        render(
            <LanguageSwitcher variant="link-container" selectedLanguage="ta" />
        );

        const tamilButton = screen.getByTestId("language-switcher--item-ta");
        expect(tamilButton).toHaveAttribute("aria-pressed", "true");

        const englishButton = screen.getByTestId("language-switcher--item-en");
        expect(englishButton).toHaveAttribute("aria-pressed", "false");
    });

    it("should set lang attribute on each option", () => {
        render(
            <LanguageSwitcher variant="link-container" selectedLanguage="en" />
        );

        expect(
            screen.getByTestId("language-switcher--item-en")
        ).toHaveAttribute("lang", "en");
        expect(
            screen.getByTestId("language-switcher--item-zh")
        ).toHaveAttribute("lang", "zh");
        expect(
            screen.getByTestId("language-switcher--item-ms")
        ).toHaveAttribute("lang", "ms");
        expect(
            screen.getByTestId("language-switcher--item-ta")
        ).toHaveAttribute("lang", "ta");
    });

    it("should have aria-hidden on separator dividers", () => {
        render(
            <LanguageSwitcher variant="link-container" selectedLanguage="en" />
        );

        const wrapper = screen.getByTestId("language-switcher");
        const hiddenItems = wrapper.querySelectorAll("[aria-hidden='true']");
        // 3 separators between 4 items
        expect(hiddenItems.length).toBe(3);
    });

    it("should navigate between options with arrow keys", () => {
        render(
            <LanguageSwitcher variant="link-container" selectedLanguage="en" />
        );

        const enButton = screen.getByTestId("language-switcher--item-en");
        enButton.focus();

        fireEvent.keyDown(enButton, { key: "ArrowRight" });
        expect(document.activeElement).toBe(
            screen.getByTestId("language-switcher--item-zh")
        );

        fireEvent.keyDown(screen.getByTestId("language-switcher--item-zh"), {
            key: "ArrowLeft",
        });
        expect(document.activeElement).toBe(
            screen.getByTestId("language-switcher--item-en")
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

        const zhButton = screen.getByTestId("language-switcher--item-zh");
        zhButton.focus();
        fireEvent.keyDown(zhButton, { key: "Enter" });

        expect(onSelectLanguage).toHaveBeenCalledWith("zh");
    });

    it("should render options inside a list element", () => {
        render(
            <LanguageSwitcher variant="link-container" selectedLanguage="en" />
        );

        const wrapper = screen.getByTestId("language-switcher");
        const list = wrapper.querySelector("ul");
        expect(list).toBeInTheDocument();

        const listItems = list!.querySelectorAll("li");
        // 4 language items + 3 separator items
        expect(listItems.length).toBe(7);
    });
});
