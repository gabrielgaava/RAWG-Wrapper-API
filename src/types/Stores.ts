export const Stores = Object.freeze({
    STEAM: 1,
    PSN: 3,
    XBOX: 2,
    APPLE: 4,
    GOG: 5,
    NINTENDO: 6,
    GOOGLE_PLAY: 8,
    EPIC: 11,
});

export const FamousStores = `
    ${Stores.EPIC},
    ${Stores.PSN},
    ${Stores.XBOX},
    ${Stores.NINTENDO},
`.trim();

export const MobileStores = `
    ${Stores.GOOGLE_PLAY},
    ${Stores.APPLE}
`;