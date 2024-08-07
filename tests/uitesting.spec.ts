import { test, expect } from '@playwright/test';

test('checks the selectors', async ({ page }) => {
    await page.goto('about:blank');
    await page.goto('http://uitestingplayground.com/');

    //await page.getByText('Aristotle').click();
    await page.locator("text=Aristotle").click()
    
    await page.getByRole('link', { name: 'Resources' }).click();

    await page.getByRole('link', { name: 'Home' }).click();

    await page.getByRole('link', { name: 'Click' }).click();

    await page.getByRole('button', { name: 'Button That Ignores DOM Click' }).click();
});