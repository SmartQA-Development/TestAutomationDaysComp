import {test, expect} from "@playwright/test";
import {mk_dr} from "../../models/model";

test('Trail - 02 - Verify driver credentials', async ({ page}) => {
    await page.route('https://api.openf1.org/v1/drivers?driver_number=1&session_key=7763', async (route) => {
        const response = await route.fetch();
        const json = await response.json();
        json.push(mk_dr);
        await route.fulfill({ response, json });
    });

    await page.goto('https://smartqa-development.github.io/mock_api_modify/');

    await expect(page.getByText('Sergio')).toBeVisible();
});