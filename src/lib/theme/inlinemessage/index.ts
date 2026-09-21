import type { InlineMessageDesignTokens, InlineMessageTokenSections } from '@primeuix/themes/types/inlinemessage';

export const root: InlineMessageTokenSections.Root = {
    padding: '{form.field.padding.y} {form.field.padding.x}',
    borderRadius: '{content.border.radius}',
    gap: '0.5rem'
};

export const text: InlineMessageTokenSections.Text = {
    fontWeight: '500'
};

export const icon: InlineMessageTokenSections.Icon = {
    size: '1rem'
};

export const colorScheme: InlineMessageTokenSections.ColorScheme = {
    light: {
        info: {
            background: 'color-mix(in srgb, {info.50}, transparent 5%)',
            borderColor: '{info.200}',
            color: '{info.600}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {info.500}, transparent 96%)'
        },
        success: {
            background: 'color-mix(in srgb, {success.50}, transparent 5%)',
            borderColor: '{success.200}',
            color: '{success.600}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {success.500}, transparent 96%)'
        },
        warn: {
            background: 'color-mix(in srgb,{warn.50}, transparent 5%)',
            borderColor: '{warn.200}',
            color: '{warn.600}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {warn.500}, transparent 96%)'
        },
        error: {
            background: 'color-mix(in srgb, {error.50}, transparent 5%)',
            borderColor: '{error.200}',
            color: '{error.600}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {error.500}, transparent 96%)'
        },
        secondary: {
            background: '{surface.100}',
            borderColor: '{surface.200}',
            color: '{surface.600}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)'
        },
        contrast: {
            background: '{surface.900}',
            borderColor: '{surface.950}',
            color: '{surface.50}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)'
        }
    },
    dark: {
        info: {
            background: 'color-mix(in srgb, {info.color}, transparent 84%)',
            borderColor: 'color-mix(in srgb, {info.color}, transparent 64%)',
            color: '{info.color}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {info.color}, transparent 96%)'
        },
        success: {
            background: 'color-mix(in srgb, {success.color}, transparent 84%)',
            borderColor: 'color-mix(in srgb, {success.color}, transparent 64%)',
            color: '{success.color}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {success.color}, transparent 96%)'
        },
        warn: {
            background: 'color-mix(in srgb, {warn.color}, transparent 84%)',
            borderColor: 'color-mix(in srgb, {warn.color}, transparent 64%)',
            color: '{warn.color}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {warn.color}, transparent 96%)'
        },
        error: {
            background: 'color-mix(in srgb, {error.color}, transparent 84%)',
            borderColor: 'color-mix(in srgb, {error.color}, transparent 64%)',
            color: '{error.color}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {error.color}, transparent 96%)'
        },
        secondary: {
            background: '{surface.800}',
            borderColor: '{surface.700}',
            color: '{surface.300}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)'
        },
        contrast: {
            background: '{surface.0}',
            borderColor: '{surface.100}',
            color: '{surface.950}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)'
        }
    }
};

export default {
    root,
    text,
    icon,
    colorScheme
} satisfies InlineMessageDesignTokens;
