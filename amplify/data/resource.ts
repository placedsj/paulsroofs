import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * Define the data schema for saving sheds.
 */
const schema = a.schema({
    ShedDesign: a
        .model({
            style: a.string().required(),
            width: a.integer().required(),
            depth: a.integer().required(),
            wallColor: a.string(),
            sidingType: a.string(),
            // JSON stringify complex objects for simplicity in v1, or break them out
            addonsJson: a.string(),
            specJson: a.string().required(), // Full spec backup

            // Metadata
            name: a.string(),
            isOrdered: a.boolean(),
        })
        .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: 'userPool',
    },
});
