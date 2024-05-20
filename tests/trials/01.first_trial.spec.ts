import { test, expect, request } from '@playwright/test';

test('Trial - 01 - Verify user logged in email', async ({page }) => {
    await page.goto('https://webshop.mobiletestautomation.nl/');

    await expect(page).toHaveTitle('SmartQA Test Automation');

    await page.locator('a.account').click();

    await expect(page).toHaveTitle('My account');

    await expect(page.getByRole('heading', {name:'Your account'})).toContainText('Your account');

    await page.locator('a#identity-link').click();

    const locator = page.locator('section input[name="email"]');
    await expect(locator).toHaveValue("storeuser@tad.nl");
});
