import { test as base, expect, Locator, Page } from "@playwright/test";
import { AbstractStoryPage, compareScreenshot } from "../../utils";

const SAMPLE_UPLOAD_FILE_PATH = "e2e/tests/fixtures/file-upload/sample.png";
const SAMPLE_UPLOAD_FILE_NAME = "sample.png";

class StoryPage extends AbstractStoryPage {
    protected readonly component = "file-upload";

    public readonly locators: {
        internal: {
            dropzone: Locator;
            uploadInput: Locator;
            uploadButton: Locator;
            dragOverlayText: Locator;
        };
        readonlyComponent: Locator;
        disabledComponent: Locator;
        disabledUploadInput: Locator;
        errorComponent: Locator;
        fileUpload: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            internal: {
                dropzone: page.getByTestId("file-upload"),
                uploadInput: page.getByTestId("file-upload-input"),
                uploadButton: page.getByRole("button", {
                    name: "Upload files",
                }),
                dragOverlayText: page.getByText("Drop files here"),
            },
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

    public async getSortableItemIds() {
        return await this.locators.fileUpload
            .locator('[data-testid$="-item"]')
            .evaluateAll((elements) => elements.map((element) => element.id));
    }

    public async reorderSortableItemWithKeyboard(
        sourceId: string,
        targetId: string
    ) {
        const itemIds = await this.getSortableItemIds();

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
            currentIds = await this.getSortableItemIds();
            currentSourceIndex = currentIds.indexOf(sourceId);
        }
    }

    public async reorderSortableItemWithMouse(
        sourceId: string,
        targetId: string
    ) {
        const itemIds = await this.getSortableItemIds();

        const sourceIndex = itemIds.indexOf(sourceId);
        const targetIndex = itemIds.indexOf(targetId);

        if (sourceIndex < 0 || targetIndex < 0) {
            throw new Error("Unable to find sortable item ids");
        }

        const source = this.locators.fileUpload.getByTestId(`${sourceId}-item`);
        const target = this.locators.fileUpload.getByTestId(`${targetId}-item`);
        const sourceHandle = this.locators.fileUpload.getByTestId(
            `${sourceId}-drag-handle`
        );

        await expect(source).toBeVisible();
        await expect(target).toBeVisible();
        await expect(sourceHandle).toBeVisible();

        const sourceHandleBox = await sourceHandle.boundingBox();
        const targetBox = await target.boundingBox();

        if (!sourceHandleBox || !targetBox) {
            throw new Error("Sortable item does not have a bounding box");
        }

        const sourceX = sourceHandleBox.x + sourceHandleBox.width / 2;
        const sourceY = sourceHandleBox.y + sourceHandleBox.height / 2;
        const targetX = targetBox.x + targetBox.width / 2;
        const targetY = targetBox.y + targetBox.height / 2;

        await this.page.mouse.move(sourceX, sourceY);
        await this.page.mouse.down();
        await this.page.mouse.move(sourceX, sourceY);
        // mouse sensor requires pointer movement over the activation distance.
        await this.page.mouse.move(targetX, targetY, { steps: 2 });
        await this.page.mouse.up();

        const reorderedIds = await this.getSortableItemIds();
        const reorderedSourceIndex = reorderedIds.indexOf(sourceId);

        expect(reorderedSourceIndex).toBe(targetIndex);
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
                    locator: story.locators.fileUpload,
                });
            });

            await test.step("Upload through button", async () => {
                const fileChooserPromise =
                    story.page.waitForEvent("filechooser");
                await story.locators.internal.uploadButton.click();

                const fileChooser = await fileChooserPromise;
                await fileChooser.setFiles(SAMPLE_UPLOAD_FILE_PATH);

                await expect(
                    story.getFileName(SAMPLE_UPLOAD_FILE_NAME)
                ).toBeVisible();
                await compareScreenshot(story, "uploaded-through-button", {
                    locator: story.locators.fileUpload,
                });
            });

            await test.step("Upload through drag and drop", async () => {
                const dataTransfer = await story.createDataTransfer({
                    name: "drag-upload.png",
                    type: "image/png",
                    content: "drag upload file",
                });

                await story.locators.internal.dropzone.dispatchEvent(
                    "dragenter",
                    {
                        dataTransfer,
                    }
                );
                await expect(
                    story.locators.internal.dragOverlayText
                ).toBeVisible();

                await compareScreenshot(story, "drag-overlay", {
                    locator: story.locators.internal.dropzone,
                });

                await story.locators.internal.dropzone.dispatchEvent(
                    "dragover",
                    {
                        dataTransfer,
                    }
                );
                await story.locators.internal.dropzone.dispatchEvent("drop", {
                    dataTransfer,
                });

                await expect(
                    story.getFileName("drag-upload.png")
                ).toBeVisible();
                await expect(
                    story.locators.internal.dragOverlayText
                ).not.toBeVisible();

                await dataTransfer.dispose();
                await compareScreenshot(
                    story,
                    "uploaded-through-drag-and-drop",
                    {
                        locator: story.locators.fileUpload,
                    }
                );
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("upload-interactions", { mode: "dark" });
        });

        test("Upload interactions - dark mode", async ({ story }) => {
            await test.step("Component mounts", async () => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.fileUpload,
                });
            });

            await test.step("Upload through drag and drop", async () => {
                const dataTransfer = await story.createDataTransfer({
                    name: "drag-upload.png",
                    type: "image/png",
                    content: "drag upload file",
                });

                await story.locators.internal.dropzone.dispatchEvent(
                    "dragenter",
                    {
                        dataTransfer,
                    }
                );
                await expect(
                    story.locators.internal.dragOverlayText
                ).toBeVisible();

                await compareScreenshot(story, "drag-overlay", {
                    locator: story.locators.internal.dropzone,
                });
            });
        });
    });

    test.describe("Form states", () => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-states");
            });

            test("Visual", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-states", { size: "mobile" });
            });

            test("Mobile", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("form-states", { mode: "dark" });
            });

            test("Dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount");
            });
        });
    });

    test.describe(() => {
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
                await story.init("editable", { size: "mobile" });
            });

            test("Editable - mobile", async ({ story }) => {
                await test.step("States mount", async () => {
                    await compareScreenshot(story, "mount", {
                        locator: story.locators.fileUpload,
                    });
                });
            });
        });
    });

    test.describe("Sortable", () => {
        test.beforeEach(async ({ story }) => {
            await story.init("sortable");
        });

        test("Visual", async ({ story }) => {
            await compareScreenshot(story, "mount", {
                locator: story.locators.fileUpload,
            });
        });

        test("Keyboard sorting", async ({ story }) => {
            await story.reorderSortableItemWithKeyboard("sort-1", "sort-3");

            await story.page.mouse.click(0, 0);

            await compareScreenshot(story, "reordered", {
                locator: story.locators.fileUpload,
            });
        });

        test("Mouse sorting", async ({ story }) => {
            await story.reorderSortableItemWithMouse("sort-1", "sort-3");

            await story.page.mouse.click(0, 0);

            await compareScreenshot(story, "reordered", {
                locator: story.locators.fileUpload,
            });
        });

        test("Focus states", async ({ story }) => {
            const sortableItem = story.locators.fileUpload.locator("#sort-1");

            await expect(sortableItem).toBeVisible();
            await sortableItem.focus();
            await expect(sortableItem).toBeFocused();

            await compareScreenshot(story, "focus-item", {
                locator: story.locators.fileUpload,
            });

            await story.page.keyboard.press("Space");

            await compareScreenshot(story, "focus-sorting", {
                locator: story.locators.fileUpload,
            });

            await story.page.keyboard.press("Space");
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
        });
    });

    test.describe(() => {
        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("progress-indicator");
            });

            test("Progress indicator", async ({ story }) => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.fileUpload,
                });
            });
        });

        test.describe(() => {
            test.beforeEach(async ({ story }) => {
                await story.init("progress-indicator", { mode: "dark" });
            });

            test("Progress indicator - dark mode", async ({ story }) => {
                await compareScreenshot(story, "mount", {
                    locator: story.locators.fileUpload,
                });
            });
        });
    });
});
