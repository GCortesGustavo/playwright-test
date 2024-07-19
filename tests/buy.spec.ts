import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://automationexercise.com/');

    await page.mouse.wheel(0, 500);
    await page.locator('.choose > .nav > li > a').first().click();
    await page.locator('#quantity').click();
    await page.getByRole('button', { name: ' Add to cart' }).click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await expect (page.locator("#modal-content")).toBeHidden()
    await page.getByRole('link', { name: ' Home' }).click();

    await page.getByRole('link', { name: ' Cart' }).click();

});