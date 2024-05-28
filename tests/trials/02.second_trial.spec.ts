import {test, expect} from "@playwright/test";
import {mk_dr} from "../../models/model";

test('Trail - 02 - Verify driver credentials', async ({ page}) => {
    // Mock the api call before navigating
    await page.route('https://api.openf1.org/v1/drivers?driver_number=1&session_key=7763', async (route) => {
        const response = await route.fetch();
        const json = await response.json();
        json.push(mk_dr);

        // Fulfill using the original response, while patching the response body
        // with the given JSON object.
        await route.fulfill({ response, json });
    });

    // Go to the page
    await page.goto('https://smartqa-development.github.io/mock_api_modify/');

    // Assert that the second driver is visible fruit is visible
    await expect(page.getByText('Sergio')).toBeVisible();
});