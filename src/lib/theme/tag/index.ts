import type { TagDesignTokens, TagTokenSections } from '@primeuix/themes/types/tag';

export const root: TagTokenSections.Root = {
    fontSize: '0.875rem',
    fontWeight: '700',
    padding: '0.25rem 0.5rem',
    gap: '0.25rem',
    borderRadius: '{content.border.radius}',
    roundedBorderRadius: '{border.radius.xl}'
};

export const icon: TagTokenSections.Icon = {
    size: '0.75rem'
};

export const colorScheme: TagTokenSections.ColorScheme = {
    light: {
        primary: {
            background: '{primary.100}',
            color: '{primary.700}'
        },
        secondary: {
            background: '{surface.100}',
            color: '{surface.600}'
        },
        success: {
            background: '{success.100}',
            color: '{success.700}'
        },
        info: {
            background: '{info.100}',
            color: '{info.700}'
        },
        warn: {
            background: '{warn.100}',
            color: '{warn.700}'
        },
        danger: {
            background: '{error.100}',
            color: '{error.700}'
        },
        contrast: {
            background: '{surface.950}',
            color: '{surface.0}'
        }
    },
    dark: {
        primary: {
            background: 'color-mix(in srgb, {primary.500}, transparent 84%)',
            color: '{primary.300}'
        },
        secondary: {
            background: '{surface.800}',
            color: '{surface.300}'
        },
        success: {
            background: 'color-mix(in srgb, {success.500}, transparent 84%)',
            color: '{success.300}'
        },
        info: {
            background: 'color-mix(in srgb, {info.500}, transparent 84%)',
            color: '{info.300}'
        },
        warn: {
            background: 'color-mix(in srgb, {warn.500}, transparent 84%)',
            color: '{warn.300}'
        },
        danger: {
            background: 'color-mix(in srgb, {error.500}, transparent 84%)',
            color: '{error.300}'
        },
        contrast: {
            background: '{surface.0}',
            color: '{surface.950}'
        }
    }
};

export default {
    root,
    icon,
    colorScheme
} satisfies TagDesignTokens;
