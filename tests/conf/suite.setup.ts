import { test as setup } from '@playwright/test';

const userFile = 'playwright/mobile_store/.auth/generaluser.json';

setup('authenticate general user', async ({ request }) => {
    // Send user authentication request.
    await request.post('https://webshop.mobiletestautomation.nl/login', {
        form: {
            'back': 'my-account',
            'email': 'generaluser@tad.nl',
            'password': '1qazxsw2',
            'submitLogin': '1'
        }
    });

    await request.storageState({ path: userFile });
});

const normalUserFile = 'playwright/mobile_store/.auth/normaluser.json';

setup('authenticate normal user', async ({ request }) => {
    // Send user authentication request.
    await request.post('https://webshop.mobiletestautomation.nl/login', {
        form: {
            'back': 'my-account',
            'email': 'normaluser@tad.nl',
            'password': '1qazxsw2',
            'submitLogin': '1'
        }
    });

    await request.storageState({ path: normalUserFile });
});

const adminFile = 'playwright/mobile_store/.auth/adminuser.json';

setup('authenticate admin', async ({ request }) => {
    // Send user authentication request.
    await request.post('https://webshop.mobiletestautomation.nl/login', {
        form: {
            'back': 'my-account',
            'email': 'adminuser@tad.nl',
            'password': '1qazxsw2',
            'submitLogin': '1'
        }
    });

    await request.storageState({ path: adminFile });
});

const superUserFile = 'playwright/mobile_store/.auth/superuser.json';

setup('authenticate super user', async ({ request }) => {
    // Send user authentication request.
    await request.post('https://webshop.mobiletestautomation.nl/login', {
        form: {
            'back': 'my-account',
            'email': 'superuser@tad.nl',
            'password': '1qazxsw2',
            'submitLogin': '1'
        }
    });

    await request.storageState({ path: superUserFile });
});

const storeUserFile = 'playwright/mobile_store/.auth/storeuser.json';

setup('authenticate store user', async ({ request }) => {
    // Send user authentication request.
    await request.post('https://webshop.mobiletestautomation.nl/login', {
        form: {
            'back': 'my-account',
            'email': 'storeuser@tad.nl',
            'password': '1qazxsw2',
            'submitLogin': '1'
        }
    });

    await request.storageState({ path: storeUserFile });
});