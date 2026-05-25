import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "file-upload";

    public readonly locators: {
        component: Locator;
        dropzone: Locator;
        uploadInput: Locator;
        uploadButton: Locator;
        dragOverlayText: Locator;
        readonlyComponent: Locator;
        disabledComponent: Locator;
        disabledUploadInput: Locator;
        errorComponent: Locator;
        fileUpload: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            component: page.getByTestId("file-upload"),
            dropzone: page.getByTestId("file-upload"),
            uploadInput: page.getByTestId("file-upload-input"),
            uploadButton: page.getByRole("button", { name: "Upload files" }),
            dragOverlayText: page.getByText("Drop files here"),
            readonlyComponent: page.getByTestId("file-upload-readonly"),
            disabledComponent: page.getByTestId("file-upload-disabled"),
            disabledUploadInput: page.getByTestId("file-upload-disabled-input"),
            errorComponent: page.getByTestId("file-upload-error"),
            fileUpload: page.getByTestId("file-upload"),
        };
    }

    public getFileName(name: string) {
        return this.page.getByText(name, { exact: true });
    }

    public async createDataTransfer(file: {
        name: string;
        type: string;
        content: string;
    }) {
        return this.page.evaluateHandle(({ name, type, content }) => {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(new File([content], name, { type }));
            return dataTransfer;
        }, file);
    }

    public async reorderSortableItem(sourceId: string, targetId: string) {
        const getItemIds = async () => {
            return await this.locators.fileUpload
                .locator("li[id]")
                .evaluateAll((elements) =>
                    elements.map((element) => element.id)
                );
        };

        const itemIds = await getItemIds();

        const sourceIndex = itemIds.indexOf(sourceId);
        const targetIndex = itemIds.indexOf(targetId);

        if (sourceIndex < 0 || targetIndex < 0) {
            throw new Error("Unable to find sortable item ids");
        }

        const source = this.locators.fileUpload.locator(`#${sourceId}`);
        await expect(source).toBeVisible();

        await source.focus();
        await expect(source).toBeFocused();
        await this.page.keyboard.press("Space");

        const moveKey = targetIndex > sourceIndex ? "ArrowDown" : "ArrowUp";
        const maxMoves = Math.abs(targetIndex - sourceIndex) + 2;
        let currentIds = itemIds;
        let currentSourceIndex = sourceIndex;

        for (
            let i = 0;
            i < maxMoves && currentSourceIndex !== targetIndex;
            i += 1
        ) {
            await this.page.keyboard.press(moveKey);
            currentIds = await getItemIds();
            currentSourceIndex = currentIds.indexOf(sourceId);
        }

        await this.page.keyboard.press("Space");
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, mountStory) => {
        const story = new StoryPage(page);
        await mountStory(story);
    },
});

test.describe("FileUpload", () => {
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("upload-interactions");
        });

        test("Upload interactions", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.component,
                });
            });

            await test.step("Upload through button", async () => {
                const fileChooserPromise =
                    story.page.waitForEvent("filechooser");
                await story.locators.uploadButton.click();

                const fileChooser = await fileChooserPromise;
                await fileChooser.setFiles("public/img/colour-tokens.png");

                await expect(
                    story.getFileName("colour-tokens.png")
                ).toBeVisible();
                await compareScreenshot(story, "uploaded-through-button", {
                    locator: story.locators.component,
                });
            });

            await test.step("Upload through drag and drop", async () => {
                const dataTransfer = await story.createDataTransfer({
                    name: "drag-upload.png",
                    type: "image/png",
                    content: "drag upload file",
                });

                await story.locators.dropzone.dispatchEvent("dragenter", {
                    dataTransfer,
                });
                await expect(story.locators.dragOverlayText).toBeVisible();

                await compareScreenshot(story, "drag-overlay", {
                    locator: story.locators.dropzone,
                });

                await story.locators.dropzone.dispatchEvent("dragover", {
                    dataTransfer,
                });
                await story.locators.dropzone.dispatchEvent("drop", {
                    dataTransfer,
                });

                await expect(
                    story.getFileName("drag-upload.png")
                ).toBeVisible();
                await expect(story.locators.dragOverlayText).not.toBeVisible();

                await dataTransfer.dispose();
                await compareScreenshot(
                    story,
                    "uploaded-through-drag-and-drop",
                    {
                        locator: story.locators.component,
                    }
                );
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("readonly-disabled-error");
        });

        test("Readonly disabled error", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                fullscreen: true,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("editable");
        });

        test("Editable", async ({ story }) => {
            await test.step("States mount", async () => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.fileUpload,
                });
            });

            await test.step("Save description", async () => {
                await expect(
                    story.locators.fileUpload.getByTestId(
                        "editable-image-edit-display"
                    )
                ).toBeVisible();

                const textarea = story.locators.fileUpload.getByTestId(
                    "editable-image-textarea-base"
                );
                const saveButton = story.locators.fileUpload.getByTestId(
                    "editable-image-save-button"
                );

                await expect(saveButton).toBeDisabled();
                await expect(textarea).toBeVisible();

                await textarea.fill("A person walking beside a tree");

                await expect(saveButton).not.toBeDisabled();
                await saveButton.click();
                await expect(
                    story.locators.fileUpload.getByTestId(
                        "editable-image-edit-button"
                    )
                ).toBeVisible();

                await compareScreenshot(story, "edited", {
                    locator: story.locators.fileUpload,
                });
            });

            await test.step("Cancel edit keeps saved description", async () => {
                await story.locators.fileUpload
                    .getByTestId("editable-image-edit-button")
                    .click();

                const textarea = story.locators.fileUpload.getByTestId(
                    "editable-image-textarea-base"
                );

                await textarea.fill("Temporary change");
                await story.locators.fileUpload
                    .getByTestId("editable-image-cancel-button")
                    .click();

                await expect(
                    story.locators.fileUpload.getByText(
                        "A person walking beside a tree"
                    )
                ).toBeVisible();
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("sortable");
        });

        test("Sortable", async ({ story }) => {
            await test.step("States mount", async () => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.fileUpload,
                });
            });

            await test.step("Drag item to reorder", async () => {
                await story.reorderSortableItem("sort-1", "sort-3");

                await story.page.mouse.click(0, 0);

                await compareScreenshot(story, "reordered", {
                    locator: story.locators.fileUpload,
                });
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("file-thumbnail");
        });

        test("Thumbnail", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.fileUpload,
            });

            await expect(
                story.locators.fileUpload.getByTestId(
                    "pdf-icon-thumbnail-image"
                )
            ).toHaveAttribute(
                "src",
                "https://assets.life.gov.sg/react-design-system/img/upload/pdf.svg"
            );

            await expect(
                story.locators.fileUpload.getByTestId(
                    "pdf-thumbnail-thumbnail-image"
                )
            ).toHaveAttribute(
                "src",
                "https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png"
            );

            await expect(
                story.locators.fileUpload.getByTestId(
                    "image-thumbnail-thumbnail-image"
                )
            ).toHaveAttribute(
                "src",
                "https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png"
            );
        });
    });
});
