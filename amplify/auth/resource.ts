import { defineAuth } from '@aws-amplify/backend';

/**
 * Define authentication with email login.
 */
export const auth = defineAuth({
    loginWith: {
        email: true,
    },
});
