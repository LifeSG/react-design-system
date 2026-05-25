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
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            component: page.getByTestId("file-upload"),
            dropzone: page.getByTestId("file-upload"),
            uploadInput: page.getByTestId("file-upload-input"),
            uploadButton: page.getByRole("button", { name: "Upload files" }),
            dragOverlayText: page.getByText("Drop files here"),
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
});
