import type { ProgressSpinnerDesignTokens, ProgressSpinnerTokenSections } from '@primeuix/themes/types/progressspinner';

export const colorScheme: ProgressSpinnerTokenSections.ColorScheme = {
    light: {
        root: {
            colorOne: '{error.color}',
            colorTwo: '{info.color}',
            colorThree: '{success.color}',
            colorFour: '{warn.color}'
        }
    },
    dark: {
        root: {
            colorOne: '{error.color}',
            colorTwo: '{info.color}',
            colorThree: '{success.color}',
            colorFour: '{warn.color}'
        }
    }
};

export default {
    colorScheme
} satisfies ProgressSpinnerDesignTokens;
