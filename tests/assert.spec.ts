import { test, expect } from '@playwright/test';

test('playing with assertions', async ({ page }) => {

    await page.goto('http://uitestingplayground.com/textinput');

    //verificar que el imput es visible
    await expect(page.locator("#newButtonName")).toBeVisible()
    //Seleccionar el imput y llenarlo
    await page.locator("#newButtonName").fill("probando")
    //Dar click
    await page.locator("#updatingButton").click()
    //Verificar que el boton cambió
    await expect(page.locator("#updatingButton")).toContainText("probando")

});