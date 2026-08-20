import { Locator, Page } from "@playwright/test";

export async function getSliderValue(slider: Locator) {
    const value = await slider.inputValue();
    return parseInt(value);
}

export async function getSliderDelta(locator: Locator, range: number) {
    const box = await locator.boundingBox();
    return box?.width ? box.width / range : 0;
}

export async function dragSlider(page: Page, thumb: Locator, deltaX: number) {
    const boundingBox = await thumb.boundingBox();
    if (!boundingBox) {
        throw new Error("Slider thumb does not have a bounding box");
    }
    await thumb.hover();
    await page.mouse.down();
    await page.mouse.move(boundingBox.x + deltaX, boundingBox.y);
    await page.mouse.up();
}
