import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://platzi.com/');
  await page.getByRole('link', { name: 'Explorar' }).click();
  await page.goto('https://platzi.com/empresas/');
  await page.goto('https://platzi.com/empresas/?__cf_chl_rt_tk=b_PFSbyxuKFO4CS.hMmlNDVjuyqqNkqz3qQt7mvAWCs-1721188391-0.0.1.1-4970');
  await page.goto('https://platzi.com/empresas/');
  await page.getByRole('img', { name: 'Platzi', exact: true }).click();
  await page.getByRole('img', { name: 'Platzi', exact: true }).click();
  await page.goto('https://platzi.com/');
  await page.getByRole('button', { name: 'Comunidad' }).click();
  await page.getByRole('link', { name: 'Eventos' }).click();
});