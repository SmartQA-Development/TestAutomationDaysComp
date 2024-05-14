import { test, expect, request } from '@playwright/test';

test('Trial - 01 - Verify user logged in email', async ({browser }) => {
    const context = await browser.newContext({ storageState: 'playwright/.auth/user.json' });

    const page = await context.newPage();

    await page.goto('https://webshop.mobiletestautomation.nl/');

    await expect(page).toHaveTitle('SmartQA Test Automation');

    await page.locator('a.account').click();

    await expect(page).toHaveTitle('My account');

    await expect(page.getByRole('heading', {name:'Your account'})).toContainText('Your account');

    await page.locator('a#identity-link').click();

    await expect(await page.locator('section input[name="email"]').getAttribute("value")).toEqual("adminuser@tester.com");
});