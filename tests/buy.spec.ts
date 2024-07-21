import { test, expect } from '@playwright/test';

test('Añadir producto al carrito', async ({ page }) => {
    await page.goto('https://automationexercise.com/');

    await page.mouse.wheel(0, 500);
    await page.hover('.choose > .nav > li > a')
    await page.locator('.choose > .nav > li > a').first().click();
    // await page.locator('#quantity').click();

    //hacer click 2 veces
    await page.locator('#quantity').click();
    await page.locator('#quantity').fill('2');  

    await page.getByRole('button', { name: ' Add to cart' }).click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await expect (page.locator("#modal-content")).toBeHidden()
    await page.getByRole('link', { name: ' Home' }).click();

    await page.getByRole('link', { name: ' Cart' }).click();

});