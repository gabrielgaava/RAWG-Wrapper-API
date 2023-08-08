export const Plataforms = Object.freeze({
    PC: 4,
    PS5: 187,
    PS4: 18,
    XONE: 1,
    XSERIES: 186,
    SWITCH: 7,
    IOS: 3,
    ANDROID: 21,
});

export const CurrentGeneration = `
    ${Plataforms.PC}, ${Plataforms.PS4}, ${Plataforms.PS5},
    ${Plataforms.XONE}, ${Plataforms.XSERIES}, ${Plataforms.SWITCH}
`.trim();