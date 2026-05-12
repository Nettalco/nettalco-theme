import type { IconFieldDesignTokens, IconFieldTokenSections } from '@primeuix/themes/types/iconfield';

export const icon: IconFieldTokenSections.Icon = {
    color: '{form.field.icon.color}'
};

export const colorScheme: IconFieldTokenSections.ColorScheme = {
    light: {
        icon: {
            color: '{surface.400}'
        }
    }
};

export default {
    icon,
    colorScheme
} satisfies IconFieldDesignTokens;